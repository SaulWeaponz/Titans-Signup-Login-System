import { useState, useEffect } from "react";
import './pages.css'; // Make sure this has styles for circular images, etc.
import Footer from "../sections/Footer";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ username: "", email: "", image: "" });
  const [message, setMessage] = useState("");

  // Fetch latest user on load
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const lastUser = users[users.length - 1]; // latest signed up/logged in user
    setUser(lastUser);
    if (lastUser) {
      setUpdatedUser({ ...lastUser });
    }
  }, []);

  const handleChange = (e, field) => {
    setUpdatedUser({ ...updatedUser, [field]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdatedUser((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((u) =>
      u.email === user.email && u.username === user.username ? updatedUser : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUser(updatedUser);
    setEditMode(false);
    setMessage("Profile updated successfully!");
  };

  if (!user) return <p>No user found.</p>;

  return (
    <div className="container mt-4">
      <h2>User Dashboard</h2>

      {message && <p style={{ color: "green" }}>{message}</p>}

      <div className="profile-card" style={{ maxWidth: "400px", margin: "auto" }}>
        <img
          src={updatedUser.image || "https://via.placeholder.com/150"}
          alt="Profile"
          className="rounded-circle"
          style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "50%" }}
        />
        <div className="mt-3">
          {editMode ? (
            <>
              <input
                type="text"
                value={updatedUser.username}
                onChange={(e) => handleChange(e, "username")}
                placeholder="Username"
                className="form-control mb-2"
              />
              <input
                type="email"
                value={updatedUser.email}
                onChange={(e) => handleChange(e, "email")}
                placeholder="Email"
                className="form-control mb-2"
              />
              <input type="file" onChange={handleImageChange} className="form-control mb-2" />
              <button className="btn btn-success" onClick={handleUpdate}>
                Save Changes
              </button>
              <button className="btn btn-secondary ml-2" onClick={() => setEditMode(false)}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <h4>{user.username}</h4>
              <p>{user.email}</p>
              <button className="btn btn-primary" onClick={() => setEditMode(true)}>
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
