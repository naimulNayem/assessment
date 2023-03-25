import axios from "axios";
import React, { SyntheticEvent, useState } from "react";
import Layout from "../layouts/Layout";
import { useRouter } from "next/router";
import "./login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080", {
        email,
        password,
      });
      console.log(res);
    } catch (err) {
      console.error(err);
    }
    await router.push("/movie");
  };

  return (
    <Layout>
      <div>
        <form onSubmit={submitHandler}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="email@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingInput"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingInput">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
