import Container from "react-bootstrap/Container";
import HomepageSlider from "../components/HompageSlider";
import ServiceCard from "../components/ServiceCard";
import { Row, Col } from "react-bootstrap";
import cardImage from "../assets/images/slider1.jpg";

export default function Home() {
  return (
    <Container>
      <section>
        <HomepageSlider />
      </section>

      <section className="services">
        <Container className="mt-5">
          <Row className="gap-4">
            <Col>
              <ServiceCard title="Building Websites" text="I am making website as a freelancer to my customers" image={cardImage} />
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
