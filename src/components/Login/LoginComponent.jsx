import React, { useState } from "react";
import { motion } from "framer-motion";
import "./LoginStyle.css";
import loginVideo from "./videos/login_video.mp4";

export const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend or perform validation
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="login-page">
      {/* Background video for the login page */}
      <video className="login-video" autoPlay loop muted>
        <source src={loginVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <motion.div
        className="login-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Container for login form */}
        <motion.form
          className="login-form"
          onSubmit={handleSubmit}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          {/* Login form */}
          <h2>"Welcome to Brewed Brilliance Café!"</h2>
          {/* Header for welcome message */}
          <motion.input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            required
            whileFocus={{ scale: 1.05 }}
          />
          {/* Input field for username */}
          <motion.input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
            whileFocus={{ scale: 1.05 }}
          />
          {/* Input field for password */}
          <motion.button
            type="submit"
            className="coffee-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign In
          </motion.button>
          {/* Button for submitting login */}
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
          {/* Link for signing up */}
        </motion.form>
      </motion.div>
    </div>
  );
};
