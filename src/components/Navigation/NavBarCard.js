import React from "react";
import { Link } from "react-router-dom";

export default function NavBarCard({ slug, id, name }) {
  return (
    <Link to={slug} key={id}>
      <li className="">{name}</li>
    </Link>
  );
}
