import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirected, setRedirected] = useState(false);
  const { setUser, setReady } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "/login",
        { email, password },
        { withCredentials: true }
      );
      setUser(data);
      setReady(true)
      alert("Login successful");
      setRedirected(true);
    } catch (e) {
      alert(`Login failed`);
    }
  }

  if (redirected) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className=" grow flex items-center justify-center">
      <div className="mb-64">
        <h1 className="text-4xl text-center m-2">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="your@email.ru"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <button className="primary">Login</button>
        </form>
        <div className="m-2 text-gray-500 text-center">
          Don't have an account yet?{" "}
          <Link className="underline text-black" to={"/register"}>
            Register now
          </Link>
        </div>
      </div>
    </div>
  );
}
