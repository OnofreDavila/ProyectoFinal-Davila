import React from "react";
import { Link } from "react-router-dom";
import "./EmptyCart.css";

export const EmptyCart = () => {
  return (
    <div className="empty-state-wrapper">
      <div className="empty-state-content">
        <div className="empty-icon">🛒</div>
        <h1 className="empty-title">TU CARRITO ESTÁ VACÍO</h1>
        <p className="empty-message">Descubre nuestra colección y encuentra tu estilo único</p>
        <Link to="/" className="btn-shop">
          EXPLORAR PRODUCTOS
        </Link>
      </div>
    </div>
  );
};
