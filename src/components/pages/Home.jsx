import { Link } from "react-router-dom";
import "./pages.css";
import Footer from "../sections/Footer";

function Welcome() {
  return (
<div>
    <div className="welcome-container">
      <div className="welcome-box">
         <h1>TITANS FC</h1>
        <h1>Welcome to Our Platform </h1>
        <p>Your journey starts here. Please sign up or log in to continue.</p>
        <div className="button-group">
          <Link to="/signup" className="btn btn-primary">Sign Up</Link>
          <Link to="/login" className="btn btn-secondary">Login</Link>
        </div>
      </div>
      <div>
      </div>
    </div>
    <div>
        <Footer/>
    </div>
    </div>
  );
}

export default Welcome;
