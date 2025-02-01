import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Make sure to prevent default form submission
    try {
      const response = await fetch("http://127.0.0.1:8000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("User registered successfully!");
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Registration failed!");
      }
    } catch (error) {
      alert("An error occurred during registration!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <button type="submit">Register</button>
      <p className="mt-4 text-center">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500 underline">
          Login
        </a>
      </p>
    </form>
  );
};

export default Register;
