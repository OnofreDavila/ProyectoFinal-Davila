import React from "react";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <div className="navbar bg-secondary p-2 text-white">
        <a className="navbar-brand">Logo</a>
        <a className="text-white text-decoration-none" href="#">
          Poleras Niños
        </a>
        <a className="text-white text-decoration-none" href="#">
          {" "}
          Poleras
        </a>
        <a className="text-white text-decoration-none" href="#">
          Pantalones
        </a>
        <CartWidget />
      </div>
    </>
  );
};
