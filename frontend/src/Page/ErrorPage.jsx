import { Link } from "react-router-dom"
import '../CssCompontens/Errorpage.css'
const ErrorPage = () => {
  return (
    <div className="Error-box">
        <h1 className="Err-head">404 Not Found</h1>
        <p>Your vistied page not found. You may go home page</p>
        <Link to='/'><button className="Err-btn"> Back to home page </button></Link>
    </div>
  )
}

export default ErrorPage