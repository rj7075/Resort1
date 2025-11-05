import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const WelcomePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <p className="text-gray-700 text-lg">You are not logged in.</p>
        <button
          onClick={() => navigate("/login")}
          className="mt-4 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-teal-50 to-white px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center max-w-md w-full border border-gray-100">
        <h1 className="text-3xl font-bold text-teal-600 mb-2">
          Welcome, {user.name}! 🎉
        </h1>

        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Email:</span> {user.email}
        </p>

        <p className="text-gray-700 mb-6">
          <span className="font-semibold">Role:</span>{" "}
          <span className="capitalize">{user.role || "user"}</span>
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="bg-teal-600 text-white px-5 py-2 rounded-md hover:bg-teal-700 transition"
          >
            Go to Home
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-gray-200 text-gray-800 px-5 py-2 rounded-md hover:bg-gray-300 transition"
          >
            View All Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
