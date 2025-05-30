import { useState } from "react";
import Footer from "../sections/Footer";
import './pages.css';

function SignUp() {
  const [formdata, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repeatpassword: "",
    image: null
  });
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (eventObj, property) => {
    const value = eventObj.target.value;
    setFormData({ ...formdata, [property]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convert to base64 for localStorage
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formdata.password !== formdata.repeatpassword) {
      setErrorMsg("Passwords do not match.");
      setSuccessMsg("");
      return;
    }

    const newUser = {
      username: formdata.username,
      email: formdata.email,
      password: formdata.password,
      image: formdata.image,
    };

    // Save to localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    setFormData({
      username: "",
      email: "",
      password: "",
      repeatpassword: "",
      image: null
    });

    setSuccessMsg("Account created successfully!");
    setErrorMsg("");
  };

  return (
    <div>
      <div className="container1">
        <h1>Welcome to the SignUp Page.</h1>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />

            {successMsg && <p style={{ color: "green" }}>{successMsg}</p>}
            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

            <label htmlFor="name">Username</label>
            <input
              type="text"
              placeholder="Username"
              name="name"
              value={formdata.username}
              onChange={(e) => handleChange(e, "username")}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
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

            <label htmlFor="psw-repeat">Repeat Password</label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              value={formdata.repeatpassword}
              onChange={(e) => handleChange(e, "repeatpassword")}
              required
            />

            <label htmlFor="image">Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />

            <div className="clearfix">
              <button type="button" className="cancelbtn">
                Cancel
              </button>
              <button type="submit" className="signupbtn">
                Sign Up
              </button>
            </div>

            <div>
              <p>Already have an account? <a href="/Login">Login !</a></p>
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
