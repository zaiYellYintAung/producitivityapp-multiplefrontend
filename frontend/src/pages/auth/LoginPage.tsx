import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../state/userSlice";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispath = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let token = "no token";
    try {
      axios
        .post("http://localhost:5000/auth/login", { username, password })
        .then((res) => {
          token = res.data.token;
          console.log(res.data);
        })
        .then(() => {
          dispath(setUser({ username, token, isAuthenticated: true }));
          console.log("Token" + token);
          console.log("success");
          navigate("/");
        });
    } catch {
      console.log("Error");
    }
  };

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="max-w-md w-5/6 mx-auto rounded-lg shadow-lg bg-white p-8">
        <h2 className="text-3xl text-center font-semibold text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-gray-800 font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-800 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-100 hover:text-black">
            Login
          </button>
        </form>
        <p className="text-gray-600 text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;