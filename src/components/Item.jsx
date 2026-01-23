import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item = ({ prod }) => {
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>${prod.price},00</Card.Text>
        <Link to={`/item/${prod.id}`} className="btn btn-dark">
          Ver Más
        </Link>
      </Card.Body>
    </Card>
  );
};
