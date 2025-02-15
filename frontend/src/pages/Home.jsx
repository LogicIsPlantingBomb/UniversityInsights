import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const cardVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(220, 38, 38, 0.1), 0 10px 10px -5px rgba(220, 38, 38, 0.04)",
      borderColor: "rgba(239, 68, 68, 0.5)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const buttonVariants = {
    initial: {
      backgroundPosition: "0%",
    },
    hover: {
      scale: 1.03,
      backgroundPosition: "100%",
      boxShadow: "0 20px 25px -5px rgba(220, 38, 38, 0.25), 0 8px 10px -6px rgba(220, 38, 38, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
        backgroundPosition: {
          duration: 0.8,
          ease: "easeInOut"
        }
      }
    },
    tap: {
      scale: 0.98,
      boxShadow: "0 10px 15px -3px rgba(220, 38, 38, 0.2), 0 4px 6px -4px rgba(220, 38, 38, 0.1)",
    }
  };

  const navLinkVariants = {
    hover: {
      scale: 1.1,
      color: "#ef4444",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  const floatingSymbols = [
    { text: "$", top: "10%", left: "10%" },
    { text: "💰", top: "20%", right: "15%" },
    { text: "📊", top: "60%", left: "15%" },
    { text: "🎓", bottom: "20%", right: "10%" },
    { text: "📈", top: "40%", left: "80%" },
    { text: "💹", bottom: "30%", left: "40%" }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-red-950 via-red-900 to-black">
      {/* Floating Symbols */}
      {floatingSymbols.map((symbol, index) => (
        <motion.div
          key={index}
          className="absolute text-3xl text-red-500/20"
          style={{ ...symbol }}
          animate={{
            y: ["0%", "-50%", "0%"],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
          whileHover={{
            scale: 1.5,
            opacity: 0.8,
            transition: { duration: 0.3 }
          }}
        >
          {symbol.text}
        </motion.div>
      ))}

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-black/40 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <h1 className="text-2xl font-bold text-red-500">University Insights</h1>
            </motion.div>
            <div className="flex space-x-4">
              <motion.div
                variants={navLinkVariants}
                whileHover="hover"
              >
                <Link 
                  to="/login"
                  className="text-gray-300 px-3 py-2 rounded-md"
                >
                  Login
                </Link>
              </motion.div>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link 
                  to="/register"
                  className="bg-red-600 text-white px-4 py-2 rounded-md"
                >
                  Register
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            Plan Your Study Abroad Journey
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.3 }
            }}
          >
            Get comprehensive financial assessments to make informed decisions about managing your finances for studying abroad.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                title: "Financial Assessment",
                description: "Detailed analysis of your financial readiness for studying abroad"
              },
              {
                title: "Expert Guidance",
                description: "Professional advice on managing education expenses and investments"
              },
              {
                title: "Cost Planning",
                description: "Comprehensive planning for tuition, living expenses, and other costs"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                className="p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-red-500/20 cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <motion.h3 
                  className="text-xl font-semibold text-red-500 mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  {card.title}
                </motion.h3>
                <p className="text-gray-300">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <motion.div
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="inline-block"
            >
              <Link
                to="/register"
                className="inline-block bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-[length:200%] text-white px-12 py-4 rounded-lg font-semibold shadow-lg hover:shadow-red-500/30"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Get Started Now</span>
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="bg-black/40 backdrop-blur-sm py-8 mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <motion.p
            whileHover={{ scale: 1.05, color: "#f3f4f6" }}
          >
            © 2024 University Insights. All rights reserved.
          </motion.p>
          <motion.p 
            className="mt-2"
            whileHover={{ scale: 1.05 }}
          >
            Visit us at: {" "}
            <motion.a 
              href="https://universityinsights.in/" 
              className="text-red-500 hover:text-red-400"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, x: 5 }}
            >
              universityinsights.in
            </motion.a>
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;
