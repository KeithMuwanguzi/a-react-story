import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Alert from "./Alert";
import { useHistory } from "react-router-dom";

const BlogDetail = () => {

    const {id} = useParams();
    const history = useHistory();

    const {data, loading, error} = useFetch('http://localhost:8080/blogs/'+id);
    const blog = data;

    const handleClick= ()=>{
        fetch('http://localhost:8080/blogs/'+blog.id,{
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        });
    }

    return ( 
        <div className="blog-detail">
            {error && <Alert message={error} type='error'/>}
            {loading && !error && <Alert message='Loading Please wait...' type='info'/>}
            {data.length !== 0 && 
                <article>
                    <h2>{blog.title}</h2>
                    <p className="author">Written by {blog.author}</p>
                    <p>{blog.content}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            }
        </div>
     );
}
 
export default BlogDetail;