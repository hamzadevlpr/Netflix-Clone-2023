import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainPage from "./Components/Homepage/MainPage";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import Dashboard from './Components/Dashboard/Dashboard'
import { ContextProvider } from "./Context/UserContext";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<ErrorPage title="we are sorry, but the page you requested was not found" />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
        <ToastContainer
          pauseOnHover={false}
        />
      </ContextProvider>
    </div>
  );
}

export default App;
