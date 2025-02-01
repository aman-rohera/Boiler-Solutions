import { useState } from "react";
import API from "../api";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("login/", formData);
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      alert("Login successful!");
    } catch (error) {
      alert("Invalid credentials!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <a href="/register" className="text-blue-500 underline">Register</a>
      </p>
    </form>
  );
};

export default Login;
