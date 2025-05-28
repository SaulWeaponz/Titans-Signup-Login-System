import Footer from "../sections/Footer";
import './pages.css'

function SignUp() {
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
              required
            />
             <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
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
             <label htmlFor="psw">Repeat Password</label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw"
              required
            />
            <div className="clearfix">
              <button type="button" className="cancelbtn">
                Cancel
              </button>
              <button type="submit" className="signupbtn">
                Sign Up
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
export default SignUp;
