import Container from "react-bootstrap/Container";
import HomepageSlider from "../components/HompageSlider";
import ServiceCard from "../components/ServiceCard";
import { Row, Col } from "react-bootstrap";
import cardImage from "../assets/images/slider1.jpg";

export default function Home() {
  return (
    <Container>
      <section className="slider">
        <HomepageSlider />
      </section>

      <section className="services">
        <Container>
          <Row className="gap-4">
            <Col>
              <ServiceCard title="test" text="test" image={cardImage} />
            </Col>
            <Col>
              <ServiceCard title="test" text="test" image={cardImage} />
            </Col>
            <Col>
              <ServiceCard title="test" text="test" image={cardImage} />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about">
        
      </section>
    </Container>
  );
}
