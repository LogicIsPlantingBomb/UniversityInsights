# Full Stack User Registration System.

## Overview
This is a **Full Stack User Registration System** built with **React (Frontend) and Express.js (Backend)**. The frontend utilizes **Tailwind CSS** for styling and **Framer Motion** for animations, while the backend is powered by **Express.js, MongoDB, JWT authentication, and middleware validation**.

## Features
✅ **User Registration** with validation
✅ **User Login** with JWT Authentication
✅ **Protected Routes** with Middleware Authorization
✅ **Floating Animation Effects** using Framer Motion
✅ **Tailwind CSS** for a modern UI
✅ **Secure Password Hashing** with bcrypt
✅ **Token Blacklisting for Logout**

---
## Frontend (React + Tailwind CSS)
### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/user-registration-system.git
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Ensure the backend is running on `http://localhost:5000`

### Dependencies
- React
- Tailwind CSS
- Framer Motion (for animations)
- Axios (for API requests)

### Key Components
- `Register.jsx`: Registration form with animations and validation
- `Login.jsx`: User login page
- `Profile.jsx`: Displays user details (protected route)

---
## Backend (Node.js + Express + MongoDB)
### Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Setup environment variables:
   Create a `.env` file and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the backend server:
   ```sh
   npm start
   ```

### Dependencies
- Express.js
- Mongoose
- JWT (jsonwebtoken)
- bcrypt.js (for password hashing)
- express-validator (for input validation)
- cookie-parser (for handling JWT in cookies)

### API Endpoints
| Method | Endpoint        | Description        | Auth Required |
|--------|---------------|-------------------|---------------|
| POST   | `/register`   | Registers a user  | No            |
| POST   | `/login`      | Logs in a user    | No            |
| GET    | `/profile`    | Fetch user data   | Yes           |
| GET    | `/logout`     | Logs out user     | Yes           |

---
## Middleware
- **authUser**: Ensures the user is authenticated before accessing protected routes.
- **Validation Middleware**: Uses express-validator to validate user input fields.

---
## Controllers
- **registerUser**: Handles new user registration and password hashing.
- **loginUser**: Validates login credentials and issues JWT tokens.
- **getUserProfile**: Fetches user profile (protected route).
- **logoutUser**: Clears the JWT token and blacklists it.

---
## Future Enhancements
- Implement **Refresh Tokens** for better session management.
- Add **Forgot Password** functionality.
- Extend user profile with more fields.
- Improve UI with additional animations and themes.

---
### License
This project is open-source and free to use.

---
**Developed by Dhruv Bhardwaj 🚀**

