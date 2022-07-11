import React from "react";
import NavBar from "../Navigation/NavBar";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <div className=" ">
      <NavBar />
      <main className="">
        <div className="">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
