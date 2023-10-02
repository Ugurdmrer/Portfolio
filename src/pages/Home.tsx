import Container from "react-bootstrap/Container";
import HomepageSlider from "../components/HompageSlider";
import ServiceCard from "../components/ServiceCard";
import { Row, Col } from "react-bootstrap";
import cardImage from "../assets/images/slider1.jpg";
import AboutCard from "../components/AboutCard";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <Container>
      <section>
        <HomepageSlider />
      </section>

      <section className="services">
        <Container className="mt-5">
          <h1 className="d-flex justify-content-center mb-5">Services</h1>
          <Row className="gap-4">
            <Col>
              <ServiceCard
                title="Building Websites"
                text="I am making website as a freelancer to my customers"
                image={cardImage}
              />
            </Col>
            <Col>
              <ServiceCard title="Website Maintenance" text="I am editing the website that you already have" image={cardImage} />
            </Col>
            <Col>
              <ServiceCard title="IT Support" text="I am helping about IT stuff that your company needs" image={cardImage} />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mt-5">
        <h1 className="d-flex justify-content-center mb-5">About Me</h1>
        <AboutSection image={cardImage} text="I am a web developer. I am making websites as a freelancer. I am
            also helping about IT stuff that your company needs. I am editing
            the website that you already have. I am making websites as a
            freelancer. I am also helping about IT stuff that your company
            needs. I am editing the website that you already have." />
        <div className="container text-center">
          <div className="row">
              <AboutCard title="Programming" text="I am a web developer" image={cardImage}/>
              <AboutCard title="Kickbox" text="Also i did some kickboxing" image={cardImage}/>
          </div>
          <div className="row">
              <AboutCard title="Music" text="Eminem and NF are best rappers on earth" image={cardImage}/>
              <AboutCard title="Games" text="A gamer" image={cardImage}/>
              <AboutCard title="Pokemon" text="I am a pokemon fun" image={cardImage}/>
          </div>
        </div>
      </section>
    </Container>
  );
}
