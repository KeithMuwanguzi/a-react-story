import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
            fetch('http://localhost:8080/blogs').then((response) => {
                return response.json();
            }).then((data) => {
                setBlogs(data);
            })
        },[]);


    const johnSmithBlogs = blogs.filter((blog) => blog.author === 'Olga Bewsey');

    const handleDelete = (id)=>{
        const newBlogs = blogs.filter((blog) => {
            return blog.id !== id;
        });

        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            {blogs.length === 0 ? <BlogList blogs={blogs} title="No blogs here" /> :<BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete}/>}
            {johnSmithBlogs.length !== 0 ? <BlogList blogs={johnSmithBlogs} title='Olga Bewsey' handleDelete={handleDelete}/>:<BlogList blogs={johnSmithBlogs} title="" />}
        </div>
    );
}
 
export default Home;