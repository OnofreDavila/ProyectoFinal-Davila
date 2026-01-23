import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="container text-center">
      <h1> Error: no se encuentra la ruta! </h1>
      <Link className="btn btn-dark" to="/">
        !Volver a Home!
      </Link>
    </div>
  );
};
