import { Card } from "react-bootstrap";

export default function ServiceCard(props: any) {
    const { title, text, image } = props;
  return (
      <Card className="h-100" style={{ width: "22rem" }}>
        <Card.Img className="border h-100" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <hr />
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
  );
}
