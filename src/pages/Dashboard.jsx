// Dashboard.js
import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Dashboard.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { auth } from "../firebase/firebaseConfig"; // Import your Firebase configuration
import { useAuthState } from "react-firebase-hooks/auth";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  // Redirect to login if user is not authenticated
  useEffect(() => {
    if (!user && !loading) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  if (loading) {
    return (
      <div className="loading-screen text-white">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-screen text-white">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li>
            <i className="bi bi-house"></i> Home
          </li>
          <li>
            <i className="bi bi-book"></i> Courses
          </li>
          <li>
            <i className="bi bi-person"></i> Profile
          </li>
          <li>
            <i className="bi bi-gear"></i> <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header-card">
          <div className="header-details">
            {user && user.photoURL ? (
              <img
                src={user.photoURL}
                alt="User Profile"
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              />
            ) : (
              <p>Hola</p>
            )}
            <div>
              <h5 className="user-name">
                {getGreeting()}, {user?.displayName || user?.email}!
              </h5>
              <p className="welcome-text">Here’s your dashboard overview:</p>
            </div>
          </div>
          <div className="header-stats">
            <p>Attendance</p>
            <div className="progress">
              <div className="progress-bar bg-info" style={{ width: "59%" }}>
                59%
              </div>
            </div>
            <p>Fee</p>
            <div className="progress">
              <div className="progress-bar bg-success" style={{ width: "88%" }}>
                88%
              </div>
            </div>
          </div>
        </div>

        {/* School Updates */}
        <h5 className="section-title">School Updates</h5>
        <div className="card-grid">
          <Card icon="bi-newspaper" title="News" />
          <Card icon="bi-calendar-event" title="Events" />
          <Card icon="bi-bullhorn" title="Bulletin" />
        </div>

        {/* Academic Section */}
        <h5 className="section-title">Academic Section</h5>
        <div className="card-grid">
          <Card icon="bi-boot" title="Assignment" />
          <Card icon="bi-house-door" title="Homework" />
          <Card icon="bi-journal" title="Exam" />
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>© 2025 CodeWithLyee | Empowering Developers</p>
          <p>Privacy Policy | Terms of Service</p>
        </footer>
      </div>
    </div>
  );
};

// Card Component
const Card = ({ icon, title }) => (
  <div className="custom-card">
    <div className="icon-container">
      <i className={`bi ${icon} fs-1`}></i>
    </div>
    <h6 className="card-title">{title}</h6>
  </div>
);

export default Dashboard;
