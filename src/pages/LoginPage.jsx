import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
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
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
