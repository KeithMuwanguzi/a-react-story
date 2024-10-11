import Alert from "./Alert";
import {Link} from 'react-router-dom';

const NotFound = () => {
    const message="The page you're looking for may have been removed, had its name changed, or is temporarily unavailable.";
    return ( 
        <div className="not-found">
            <h1>Page Not Found</h1>
            <Alert message={message} type='error'/>
            <Link to="/"><p>Back to Homepage</p></Link>
        </div>
     );
}
 
export default NotFound;