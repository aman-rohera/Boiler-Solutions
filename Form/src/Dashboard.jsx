import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-3xl font-semibold mb-4">Welcome!</h2>
        <p className="text-gray-700">You have successfully logged in.</p>
        <button onClick={() => { localStorage.removeItem("token"); navigate("/login"); }} className="mt-4 bg-red-500 text-white p-3 rounded hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
}