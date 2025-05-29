import { useState } from "react";
import Footer from "../sections/Footer";
import './pages.css'

function SignUp() {
  const [formdata, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repeatpassword: ""
  })
  const handleChange =(eventObj, property) => {
    let value = eventObj.target.value;
    setFormData({...formdata, [property]: value});
  }
   const handleSubmit =(e)=>{
    e.preventDefault();
    setFormData({username: "",email:"",password:"",repeatpassword:""})
    console.log(formdata)
   }
  return (
    <div>
        <div className="container1">
            <h1>Welcome to the SignUp Page.</h1>
        </div>
      <div>
        <form >
          <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <label htmlFor="name">Username</label>
            <input
              type="text"
              placeholder="Username"
              name="name"
              value={formdata.username}
              onChange={(e)=>handleChange(e, "username")}
              required
            />
             <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formdata.email}
              onChange={(e)=>handleChange(e, "email")}
              required
            />
            <label htmlFor="psw">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              value={formdata.password}
              onChange={(e)=>handleChange(e, "password")}
              required
            />
             <label htmlFor="psw">Repeat Password</label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw"
              value={formdata.repeatpassword}
              onChange={(e)=>handleChange(e, "repeatpassword")}
              required
            />
            <div className="clearfix">
              <button type="button" className="cancelbtn">
                Cancel
              </button>
              <button type="submit" className="signupbtn" onClick={handleSubmit}>
                Sign Up
              </button>
            </div>
            <div>
              <p>Already have an account? Login!</p>
            </div>
          </div>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default SignUp;
