import { Card, Container } from "react-bootstrap";

export default function ServiceCard(props: any) {
    const { title, text, image } = props;
  return (
    <Container>
      <Card style={{ width: "22rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
