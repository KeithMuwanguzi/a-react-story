import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {

    const {id} = useParams();

    const {data, loading, error} = useFetch('http://localhost:8080/blogs/'+id);
    const blog = data;

    return ( 
        <div className="blog-detail">
            {error && <div className="error">{error}</div>}
            {loading && !error && <div className="author">Loading ...</div>}
            {data.length !== 0 && 
                <div>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>   
                    <p className="author">Author: {blog.author}</p>
                </div>
            }
        </div>
     );
}
 
export default BlogDetail;