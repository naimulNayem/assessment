import React from "react";
import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossOrigin="anonymous"
        />
      </Head>

      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link legacyBehavior href="/">
                  <a
                    style={{
                      marginRight: "1rem",
                      marginLeft: "0.5rem",
                      color: "black",
                    }}
                    className="nav-link active"
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link legacyBehavior href="/login">
                  <a className="nav-link active" aria-current="page">
                    Login
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link legacyBehavior href="/register">
                  <a className="nav-link active" aria-current="page">
                    Register
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="form-signin w-100 m-auto">{children}</main>
    </>
  );
};

export default Layout;
