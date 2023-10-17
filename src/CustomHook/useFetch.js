import {useState , useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async (url) => {
            try{
                const response = await fetch(url)
                const urlData = await response.json()
                setData(urlData)
                setLoading(false)
            }catch(error){
                setLoading(false)
                setError(error)
            }
        }
        fetchData(url)
    },[url])

    return {data , loading , error}

}

export default useFetch