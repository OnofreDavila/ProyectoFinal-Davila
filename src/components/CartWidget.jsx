import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import Badge from "react-bootstrap/Badge";

export const CartWidget = () => {
  return (
    <div>
      <TiShoppingCart fontSize={"1.5rem"} color="white" />
      <Badge bg="danger">5</Badge>
    </div>
  );
};
