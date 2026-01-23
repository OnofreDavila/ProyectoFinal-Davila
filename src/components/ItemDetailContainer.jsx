import React, { useEffect, useState } from "react";
import { getOneProduct } from "../asyncMock/data";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id)
      .then((res) => setDetail(res))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <ItemDetail detail={detail} />
    </div>
  );
};
