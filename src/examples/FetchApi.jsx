import { useState, useEffect } from "react";

export const FetchApi = () => {
  const [personajes, setPersonajes] = usestate([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return <div></div>;
};
