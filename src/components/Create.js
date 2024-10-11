import { useState } from "react";
import Alert from "./Alert";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('Select an author');
    const [alert,setAlert] = useState('');
    const [alertType, setAlertType] = useState('error');
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = {title,content:body,author:author};
        

        if(title === ''){
            setAlert('The title can not be empty.');
            setAlertType('error');
            return;
        }else if(body === ''){
            setAlert('The blog body can not be empty.');
            setAlertType('error');
            return;
        }else if(author === 'Select an author'){
            setAlert('Please select an author to continue.');
            setAlertType('error');
            return;
        }else{
            setAlert('New Blog Added successfully ');
            setAlertType('success');

            fetch('http://localhost:8080/blogs/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
           .then(()=>{
                history.push('/');     
           });
        }

        
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog content:</label>
                <textarea
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="Select an author">Select an author</option>
                    <option value="John Smith">John Smith</option>
                    <option value="Evelyn Marks">Evelyn Marks</option>
                    <option value="Alexander Johnson">Alexander Johnson</option>
                </select>
                <button>Submit</button>
                {alert !== '' && <Alert type={alertType} message={alert}/>}
            </form>
        </div>
     );
}
 
export default Create;