import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  const mensaje = "Bienvenidos a Proyect Conspiracy Store";
  return (
    <>
      <div className="container">
        <NavBar />
        <ItemListContainer mensaje={mensaje} />
      </div>
    </>
  );
}

export default App;
