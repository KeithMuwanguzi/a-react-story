import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data, loading, error, handleDelete} = useFetch('http://localhost:8080/blogs');
    
    const johnSmithBlogs = data.filter((blog) => blog.author === 'Olga Bewsey');

    

    return ( 
        <div className="home">
            {error && <div className="error">{error}</div>}
            {loading && !error && <div className="author">Loading ...</div>}
            {data.length !== 0 && <BlogList blogs={data} title='All Blogs' handleDelete={handleDelete}/>}
            {johnSmithBlogs.length !== 0 && <BlogList blogs={johnSmithBlogs} title='Olga Bewsey' handleDelete={handleDelete}/>}
        </div>
    );
}
 
export default Home;