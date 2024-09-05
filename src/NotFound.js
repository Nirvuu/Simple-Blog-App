import { Link } from "react-router-dom";

const NotFound  = () => {
    return ( 
        <div className="no-found">
         <h2>Not Found</h2> 
         <p>Sorry this page does not exist.</p>  
         <Link to='/' >  Back to Home Page...</Link>
         </div>

     );
}
 
export default NotFound;