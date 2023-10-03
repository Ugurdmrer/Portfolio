import Container from "react-bootstrap/Container";
import HomepageSlider from "../components/HompageSlider";
import ServiceCard from "../components/ServiceCard";
import { Row, Col } from "react-bootstrap";
import AboutCard from "../components/AboutCard";
import AboutSection from "../components/AboutSection";

// Images

import serviceImage from "../assets/images/website-build.webp";
import serviceImage2 from "../assets/images/website-maintenance.png";
import serviceImage3 from "../assets/images/IT-support.png";
import aboutImage from "../assets/images/home-about.png";
import aboutImage1 from "../assets/images/Programming-code.jpg";
import aboutImage2 from "../assets/images/Kick-boxing.jpg";
import aboutImage3 from "../assets/images/Music.webp";
import aboutImage4 from "../assets/images/game.jpg";
import aboutImage5 from "../assets/images/pokemon.svg.png";

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
                image={serviceImage}
              />
            </Col>
            <Col>
              <ServiceCard
                title="Website Maintenance"
                text="I am editing the website that you already have"
                image={serviceImage2}
              />
            </Col>
            <Col>
              <ServiceCard
                title="IT Support"
                text="I am helping about IT stuff that your company needs"
                image={serviceImage3}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mt-5">
        <h1 className="d-flex justify-content-center mb-5 ">About Me</h1>
        <AboutSection
          image={aboutImage}
          text="I am a web developer. I am making websites as a freelancer. I am
            also helping about IT stuff that your company needs. I am editing
            the website that you already have. I am making websites as a
            freelancer. I am also helping about IT stuff that your company
            needs. I am editing the website that you already have."
        />
        <div className="container text-center">
          <div className="row">
            <AboutCard
              title="Programming"
              text="I am a web developer"
              image={aboutImage1}
            />
            <AboutCard
              title="Kickbox"
              text="Also i did some kickboxing"
              image={aboutImage2}
            />
          </div>
          <div className="row">
            <AboutCard
              title="Music"
              text="Eminem and NF are best rappers on earth"
              image={aboutImage3}
            />
            <AboutCard title="Games" text="A gamer" image={aboutImage4} />
            <AboutCard
              title="Pokemon"
              text="I am a pokemon fan"
              image={aboutImage5}
            />
          </div>
        </div>
      </section>
    </Container>
  );
}
