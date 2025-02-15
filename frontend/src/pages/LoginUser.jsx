import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    try {
      const response = await fetch(`${VITE_API_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include', // Important for cookie handling
      });

      const data = await response.json();

      if (!response.ok) {
        setIsError(true);
        if (data.errors) {
          setMessage(data.errors[0].msg);
        } else {
          setMessage(data.message || "Invalid email or password");
        }
        return;
      }

      // Login successful
      setMessage("Login successful! Redirecting...");
      
      // Store token in localStorage if remember me is checked
      if (rememberMe && data.token) {
        localStorage.setItem('token', data.token);
      }

      // Store user data if needed
      if (data.user) {
        localStorage.setItem('user', JSON.stringify(data.user));
      }

      // Redirect after successful login
      setTimeout(() => {
        navigate('/'); // or wherever you want to redirect after login
      }, 1500);

    } catch (error) {
      setIsError(true);
      setMessage("Network error. Please try again.");
    }
  };

  // Your existing animation variants
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

  const floatingSymbols = [
    { text: "{ JS }", top: "10%", left: "10%", rotate: -15 },
    { text: "<React/>", top: "20%", right: "15%", rotate: 15 },
    { text: "Python", top: "60%", left: "15%", rotate: 10 },
    { text: "//Code", bottom: "20%", right: "10%", rotate: -10 },
    { text: "MySQL", top: "40%", left: "80%", rotate: 20 },
    { text: "<HTML/>", bottom: "30%", left: "40%", rotate: -5 }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-950 via-red-900 to-black">
      {/* Floating Symbols */}
      {floatingSymbols.map((symbol, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl md:text-5xl lg:text-6xl text-red-500/30 font-bold font-mono"
          style={{ 
            ...symbol,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}
          animate={{
            y: ["0%", "-40%", "0%"],
            rotate: [symbol.rotate, symbol.rotate + 10, symbol.rotate],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        >
          {symbol.text}
        </motion.div>
      ))}

      {/* Main Form Container */}
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
          Student Login
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
            Login
          </motion.button>

          <motion.div 
            variants={itemVariants}
            className="flex justify-between items-center mt-4 text-gray-400 text-sm"
          >
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="mr-2 rounded border-red-500/30 bg-black/30"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <a href="#" className="text-red-400 hover:text-red-300 transition-colors">
              Forgot Password?
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-4 text-gray-400"
          >
            Don't have an account?{" "}
            <Link to="/register" className="text-red-400 hover:text-red-300 transition-colors">
              Register here
            </Link>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Login;
