import React from "react"
import { Link } from "react-router-dom"
import { Card, Button } from "react-bootstrap" // Asegúrate de importar los componentes necesarios

const Item = ({ id, img, detail, category, name }) => {
  return (
    <div style={{ width: "18rem" }}>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{detail}</Card.Text>
          <Card.Text>{category}</Card.Text> {/* Corregir a Card.Text */}
          <Link to={`/item/${id}`}>
            <Button variant="primary"> Detalles </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item
