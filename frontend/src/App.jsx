import React ,{ useState } from 'react'
import Register from "./pages/RegisterUser";
import {Route, Routes } from 'react-router-dom';
import Login from './pages/LoginUser';
import Home from './pages/Home';


function App() {

  return (
    <>
	 <Routes>
	  	<Route path = "/" element={<Home/>}/>
		<Route path = "/register" element={<Register/>}/>
		<Route path = "/login" element={<Login/>}/>
	 </Routes>
    </>
  )
}

export default App
