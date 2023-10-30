import { useState, useEffect} from "react"

export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url).then(res => {
                console.log(res);
                if (!res.ok){
                    throw Error('could not fetch the data');
                }
                return res.json();
            }).then(data=>{
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message)
            })
        }, 1000)
    }, [])

    return {data, isPending, error}
}