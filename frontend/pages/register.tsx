import axios from "axios";
import { useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";
import Layout from "../layouts/Layout";
import "./register.module.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080", {
        name,
        email,
        password,
      });
    } catch (err) {
    }

    await router.push("/login");
  };

  return (
    <Layout>
      <div>
        <form onSubmit={submitHandler}>
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="floatingInput">Full Name</label>
          </div>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="email@example.com"
              value={email}
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
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingInput">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-info btn-block" type="submit">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
