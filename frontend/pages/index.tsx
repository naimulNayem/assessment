import Head from "next/head";
import Layout from "../layouts/Layout";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const submitHandler = async () => {
    await router.push("/register");
  };

  return (
    <Layout>
      <h5 style={{ marginBottom: "1.5rem" }}>
        Welcome, Please Register to add movie
      </h5>
      <button
        onClick={submitHandler}
        className="w-100 btn btn-md btn-primary"
        type="submit"
      >
        Register
      </button>
    </Layout>
  );
}
