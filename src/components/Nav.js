import React from "react";
import { navData } from "../data";
import { NavLink } from "react-router-dom";


const Nav = () => {
  const { items } = navData;

  return (
    <nav id="nav">
      <ul className="flex gap-x-[58px]">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                className="link hover:border-b-2 hover:border-drk transition duration-300"
                to={item.href}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
