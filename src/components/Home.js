import Alert from "./Alert";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import {Link} from 'react-router-dom';

const Home = () => {

    const {data, loading, error} = useFetch('http://localhost:8080/blogs');

    

    return ( 
        <div className="home">
            {error && <Alert message={error} type='error'/>}
            {loading && !error && <Alert message='Loading Please wait...' type='info'/>}
            <Link to='/create'><p className="homep">Add New Blog</p></Link>
            {data.length !== 0 ? <BlogList blogs={data} title='All Blogs' />: <div><p>No blogs.</p></div>}
        </div>
    );
}
 
export default Home;