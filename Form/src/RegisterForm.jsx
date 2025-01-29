import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    setSuccess("");

    try {
      const response = await fetch("https://your-api.com/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Registration successful!");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError(data.message || "Registration failed!");
      }
    } catch (err) {
      setError("Server error! Try again later.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center text-black bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold text-center mb-6">Register</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <form onSubmit={handleRegister} className="space-y-4">
          <input type="text" className="w-full p-3 border rounded" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" className="w-full p-3 border rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" className="w-full p-3 border rounded" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <input type="password" className="w-full p-3 border rounded" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          <button type="submit" className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600">Register</button>
          <p className="mt-4 text-center"> Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
        </form>
      </div>
    </div>
  );
}