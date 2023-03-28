import React, { useEffect, useState } from 'react'

function useFetch(url, check) {
    const [data, setdata] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const resultx = await response.json();
            if (resultx.error) {
                setError(error);
            }
            if (check === "sc") {
                setdata(resultx)
            }
            if (check === "mc") {
                setdata(resultx.results);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url])

    return (
        { data, error, loading }
    )
}

export default useFetch