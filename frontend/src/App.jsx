import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainPage from "./Components/Homepage/MainPage";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer

        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
