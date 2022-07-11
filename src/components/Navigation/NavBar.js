import React from "react";
import { Link } from "react-router-dom";
import NavBarCard from "./NavBarCard";

export default function NavBar() {
  const items = [
    {
      name: "Home",
      slug: "/Home",
      id: 1,
    },
    {
      name: "Contact",
      slug: "/Contact",
      id: 2,
    },
  ];

  return (
    <div>
      <nav className="flex justify-between container py-5">
        <Link to="/">
          <h1 className="text-[#2f75cf] font-black text-xl">Mito Blog</h1>
        </Link>
        <div>
          <ul className="flex space-x-8">
            {items.map((item) => (
              <NavBarCard slug={item.slug} key={item.id} name={item.name} />
            ))}
          </ul>
        </div>
      </nav>
      <hr />
    </div>
  );
}
