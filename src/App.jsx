import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import NavBar from "./components/sections/Navbar";
import Dashboard from "./components/pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <>
      <BrowserRouter>
      <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/Login" element={<Login/>}/>
            {/* Protected route */}
          <Route
           path="/dashboard"
           element={
           <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
            </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
