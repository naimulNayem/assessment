import axios from "axios";
import React, { SyntheticEvent, useState, useEffect } from "react";
import Layout from "../layouts/Layout";
import "./login.module.css";

const Movie = () => {
  const [movie, setMovie] = useState("");
  const [fetchedMovie, setFetchedMovie] = useState([]);
  const [isAddedSuccess, setIsAddedSuccess] = useState(false);

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3001/movie");
      console.log(res.data);
      setFetchedMovie(res.data);
    };
    // call the function
    if (isAddedSuccess)
      fetchData()
        // make sure to catch any error
        .catch(console.error);
  }, [isAddedSuccess]);

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/movie", { movie });
      setFetchedMovie((p) => p.concat(res.data));
      setIsAddedSuccess(true);
      setMovie("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <div>
        <form onSubmit={submitHandler}>
          <h1 className="h3 mb-3 fw-normal">Please Add your favourite movie</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Movie Name"
              value={movie}
              required
              onChange={(e) => setMovie(e.target.value)}
            />
            <label htmlFor="floatingInput">Movie Name</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Submit
          </button>
        </form>

        {fetchedMovie.map((p) => (
          <ul key={p._id}>
            <li key={p._id}>{p.movie}</li>
          </ul>
        ))}
      </div>
    </Layout>
  );
};

export default Movie;
