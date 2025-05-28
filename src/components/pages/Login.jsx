import Footer from "../sections/Footer";
import './pages.css'

function Login() {
  return (
    <div>
        <div className="container">
            <h1>Welcome to the Login Page.</h1>
        </div>
      <div>
        <form >
          <div className="container">
            <h1>Login Form</h1>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              name="name"
              required
            />
             <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              required
            />
            <label htmlFor="psw">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
            <div className="clearfix">
              <button type="submit" className="signupbtn">
                Login
              </button>
              <button type="button" className="cancelbtn">
                Cancel
              </button>
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
