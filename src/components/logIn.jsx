import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import "../components/logIn.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, login } = useAuth();
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const success = await login(email, password);
      if (!success) {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error occurred while logging in:", error);
      setError("Incorrect login or password");
    }
  };

  if (user) {
    return <div>You are now logged in!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      {error && <p className="text-danger">{error}</p>}
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
      <p className="mt-5 mb-3 text-body-secondary">&copy; 2023</p>
    </form>
  );
};

export default Login;
