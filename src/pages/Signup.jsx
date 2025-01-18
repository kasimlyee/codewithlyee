import React, { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import "../styles/Auth.css"; // Custom styling if needed

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login"); // Redirect to login after successful signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div
        className="card p-4 shadow-lg"
        style={{
          width: "30rem",
          borderRadius: "15px",
          backgroundColor: "#1A1A2E",
        }}
      >
        <div className="card-body">
          <h2 className="text-center text-white mb-4">Sign Up</h2>
          {error && <p className="text-danger text-center">{error}</p>}
          <form onSubmit={handleSignup}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-white">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label text-white">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-deep-pink w-100 mb-3">
              Sign Up
            </button>
            <p className="text-center text-white">
              Already have an account?{" "}
              <a href="/login" className="text-purple">
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
