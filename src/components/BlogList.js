import { Link } from "react-router-dom";

const BlogList = ({blogs, title, handleDelete   }) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {
                blogs.map((blog) => (
                    <Link to={`blog/${blog.id}`}>
                        <div className="blog-preview" key={blog.id}>
                            <h2>{blog.title}</h2>
                            <p className="author">Author: {blog.author}</p>
                            <button onClick={()=> handleDelete(blog.id)}>Delete</button>
                        </div>
                    </Link>
                ))  
            }
        </div>
     );
}
 
export default BlogList;