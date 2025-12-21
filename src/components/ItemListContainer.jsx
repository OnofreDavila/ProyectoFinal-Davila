import React from "react";

export const ItemListContainer = ({ mensaje }) => {
  return (
    <div className="container bg-secondary-subtle d-flex justify-content-center">
      {mensaje}
    </div>
  );
};
