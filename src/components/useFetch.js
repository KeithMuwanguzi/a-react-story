import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(url).then((response) => {
            if(!response.ok){
                throw Error("Couldn't fetch data from that end point")
            }
            return response.json();
        }).then((data) => {
            setData(data);
            setLoading(false);
            setError(null);
        }).catch((error) => {
            setError(error.message);
        });
    },[url]);

    const handleDelete = (id)=>{
        const newBlogs = data.filter((blog) => {
            return blog.id !== id;
        });

        setData(newBlogs);
    }

    return {data, loading, error, handleDelete};
}

export default useFetch;