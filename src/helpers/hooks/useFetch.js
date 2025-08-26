import { useEffect, useState } from "react";

export function useFetch(fetchFunction, params){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function fetch() {
            try {
                setLoading(true);
                const result = await fetchFunction(params);
                setData(result);
                console.log(result);
            } catch (error) {
                setError(error)
            }
            finally{
                setLoading(false);
            }
        }
        fetch();
    },[fetchFunction, params])
    
    return {data, loading, error};
}
