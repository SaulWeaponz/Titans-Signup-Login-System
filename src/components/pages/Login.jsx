import { useState } from "react";
import { useNavigate } from "react-router-dom"; // for navigation
import Footer from "../sections/Footer";
import "./pages.css";

function Login() {
  const [formdata, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [loginMsg, setLoginMsg] = useState("");
  const navigate = useNavigate(); // initialize navigation

  const handleChange = (eventObj, property) => {
    const value = eventObj.target.value;
    setFormData({ ...formdata, [property]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = storedUsers.find(
      (user) =>
        user.username === formdata.username &&
        user.email === formdata.email &&
        user.password === formdata.password
    );

    if (matchedUser) {
      setLoginMsg("Login successful!");
      localStorage.setItem("currentUser", JSON.stringify(matchedUser)); // store logged in user
      setTimeout(() => {
        navigate("/dashboard"); // redirect to dashboard
      }, 1000);
    } else {
      setLoginMsg("Invalid credentials. Please try again.");
    }

    setFormData({
      username: "",
      email: "",
      password: ""
    });
  };

  return (
    <div>
      <div className="container1">
        <h1>Welcome to the Login Page.</h1>
      </div>
      <div>
        <form onSubmit={handleLogin}>
          <div className="container">
            <h1>Login Form</h1>

            {loginMsg && (
              <p style={{ color: loginMsg.includes("successful") ? "green" : "red" }}>
                {loginMsg}
              </p>
            )}

            <label htmlFor="name">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              name="name"
              value={formdata.username}
              onChange={(e) => handleChange(e, "username")}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={formdata.email}
              onChange={(e) => handleChange(e, "email")}
              required
            />

            <label htmlFor="psw">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              value={formdata.password}
              onChange={(e) => handleChange(e, "password")}
              required
            />

            <div className="clearfix">
              <button type="submit" className="signupbtn">
                Login
              </button>
              <button
                type="button"
                className="cancelbtn"
                onClick={() => setFormData({ username: "", email: "", password: "" })}
              >
                Cancel
              </button>
            </div>

            <div>
              <p>Don't have an account? <a href="/signup">SignUp</a></p>
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

export default Login;
