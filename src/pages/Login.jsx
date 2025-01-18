import React, { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import "../styles/Auth2.css"; // Custom styling if needed

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Redirect after successful login
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
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
          <h2 className="text-center text-white mb-4">Login</h2>
          {error && <p className="text-danger text-center">{error}</p>}
          <form onSubmit={handleLogin}>
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
              Login
            </button>
            <p className="text-center text-white">
              Don't have an account?{" "}
              <a href="/signup" className="text-purple">
                Sign up here
              </a>
            </p>
          </form>

          <button onClick={handleGoogleLogin} className="google-signin-btn">
            <svg
              class="google-logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="20"
              height="20"
            >
              <path
                fill="#4285F4"
                d="M23.49 12.3c0-.76-.07-1.48-.2-2.17H12.5v4.19h5.86c-0.25 1.28-0.99 2.37-2.07 3.04v2.5h3.33c2.01-1.85 3.16-4.6 3.16-8.06z"
              ></path>
              <path
                fill="#34A853"
                d="M12.5 7.13c1.47 0 2.73 0.5 3.67 1.35l2.73-2.73C17.93 3.14 15.79 2 12.5 2 8.29 2 5 4.29 5 7.5c0 1.45.51 2.76 1.35 3.74l2.73-2.73c-.45-.66-.71-1.47-.71-2.34 0-1.81 1.47-3.28 3.28-3.28z"
              ></path>
              <path
                fill="#FBBC05"
                d="M5 7.5c0-1.81 1.47-3.28 3.28-3.28s3.28 1.47 3.28 3.28c0 .87-.26 1.68-.71 2.34L5.35 11.24c-.84-.98-1.35-2.29-1.35-3.74z"
              ></path>
              <path
                fill="#EA4335"
                d="M12.5 7.13c1.47 0 2.73 0.5 3.67 1.35l2.73-2.73C17.93 3.14 15.79 2 12.5 2 8.29 2 5 4.29 5 7.5c0 1.45.51 2.76 1.35 3.74l2.73-2.73c-.45-.66-.71-1.47-.71-2.34 0-1.81 1.47-3.28 3.28-3.28z"
              ></path>
            </svg>{" "}
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
