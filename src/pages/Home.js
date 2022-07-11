import React from "react";
import CardHome from "../components/Card/CardHome";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="container py-16 flex space-x-4">
        <CardHome />
        <CardHome />
        <CardHome />
      </div>
    </Layout>
  );
}
