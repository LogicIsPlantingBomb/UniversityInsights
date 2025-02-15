import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

// Use Vite environment variable syntax
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    try {
      const response = await fetch(`${VITE_API_URL}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          fullname: {
            firstname: formData.firstname,
            lastname: formData.lastname,
          },
          email: formData.email,
          password: formData.password,
        }),
        credentials: 'include',
      });

      const data = await response.json();

      if (!response.ok) {
        setIsError(true);
        if (data.errors) {
          // Handle validation errors
          setMessage(data.errors[0].msg);
        } else {
          // Handle other errors
          setMessage(data.message || "Error registering user");
        }
        return;
      }

      // Registration successful
      setMessage("Registration successful! Redirecting...");
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
      
      // Redirect after successful registration
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (error) {
      setIsError(true);
      setMessage("Network error. Please try again.");
      console.error("Registration error:", error);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-950 via-red-900 to-black">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative w-96 p-8 bg-black/40 backdrop-blur-sm rounded-xl shadow-2xl border border-red-500/20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent"
        >
          Register Student
        </motion.h2>

        {message && (
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-center mb-4 ${
              isError ? "text-red-500" : "text-green-400"
            }`}
          >
            {message}
          </motion.p>
        )}

        <motion.form
          variants={containerVariants}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <motion.div variants={itemVariants}>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="w-full p-3 bg-black/30 border border-red-500/30 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="w-full p-3 bg-black/30 border border-red-500/30 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
              value={formData.lastname}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 bg-black/30 border border-red-500/30 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 bg-black/30 border border-red-500/30 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-red-700 to-red-500 text-white p-3 rounded-lg hover:from-red-600 hover:to-red-400 font-semibold transition-all"
          >
            Register
          </motion.button>

          <motion.div
            variants={itemVariants}
            className="text-center mt-6 text-gray-400"
          >
            Already have an account?{" "}
            <Link 
              to="/login" 
              className="text-red-400 hover:text-red-300 transition-colors font-semibold"
            >
              Login here
            </Link>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Register;
