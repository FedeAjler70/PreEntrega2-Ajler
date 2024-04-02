import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

export const Item = ( { id, name, detail, category, img  }) => {
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{detail}</Card.Text>
        <Card.Category>{category}</Card.Category>
        <Link to={`/item/${id}`}><Button variant="primary">Go somewhere</Button></Link>
      </Card.Body>
    </Card>
};
=======

export const Item = ( { product }) => (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.detail}</Card.Text>
        <Card.Category>{product.category}</Card.Category>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
>>>>>>> b3a2646c4fd281a586dca5e9a156750900d95e04
