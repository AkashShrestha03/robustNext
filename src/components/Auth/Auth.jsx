import React, { useState } from "react";
import axios from "axios";
import cookie from "cookie-js";
import { Toaster, toast } from "react-hot-toast";
import API from "@/Config";

const Auth = () => {
  const [registerData, setRegisterData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    contactNo: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API}/api/Register/User`,
        registerData
      );
      toast.success("Registration successful!");
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "An error occurred during registration.";
      toast.error(message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API}/api/Login/User`, loginData);

      // Save accessToken in cookies
      const { accessToken } = response.data.data;
      cookie.set("accessToken", accessToken);

      toast.success("Login successful!");

      // Optionally, handle user data or redirect
      console.log("User Info:", response.data.data.user);
    } catch (error) {
      const message =
        error.response?.data?.message || "An error occurred during login.";
      toast.error(message);
    }
  };

  return (
    <div className="auth-body">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="auth-main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form className="signin-form" onSubmit={handleRegister}>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={registerData.firstname}
              onChange={handleRegisterChange}
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={registerData.lastname}
              onChange={handleRegisterChange}
              required
            />
            <input
              type="text"
              name="username"
              placeholder="User Name"
              value={registerData.username}
              onChange={handleRegisterChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={registerData.email}
              onChange={handleRegisterChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={registerData.password}
              onChange={handleRegisterChange}
              required
            />
            <input
              type="text"
              name="contactNo"
              placeholder="Contact Number"
              value={registerData.contactNo}
              onChange={handleRegisterChange}
              required
            />
            <button type="submit">Sign up</button>
          </form>
        </div>

        <div className="login">
          <form className="login-form" onSubmit={handleLogin}>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleLoginChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
