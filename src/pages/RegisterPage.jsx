import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
    } catch (e) {
      alert(`Registration failed, try again later`);
    }
  }

  return (
    <div className=" grow flex items-center justify-center">
      <div className="mb-64">
        <h1 className="text-4xl text-center m-2">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Jone Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="your@email.ru"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Register</button>
        </form>
        <div className="m-2 text-gray-500 text-center">
          Already a member?{" "}
          <Link className="underline text-black" to={"/login"}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
