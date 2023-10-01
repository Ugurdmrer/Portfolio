import { Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import instagramIcon from '../../assets/icons/instagram.svg'
import githubIcon from '../../assets/icons/github.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
export default function Footer() {
  return (
    <footer className="footer mt-5 border shadow bg-secondary rounded">
        <Row className='gap-3'>
            
                <Col className='d-flex flex-column text-align-center justify-content-center p-5'>
                    <h4 className='text-center text-white'>Pages</h4>
                    <p className='text-center'><Link className='text-decoration-none text-white' to="/">Home</Link></p>
                    <p className='text-center'><Link className='text-decoration-none text-white' to="/Services">Services</Link></p>
                    <p className='text-center'><Link className='text-decoration-none text-white' to="/About">About</Link></p>
                    <p className='text-center'><Link className='text-decoration-none text-white' to="/Contact">Contact</Link></p>
                </Col>
                <Col className='d-flex flex-column justify-content-center'>
                    <h4 className='text-center'>All right reserved. © 2023 <br/><strong><Link className='text-decoration-none text-white' to="/">Uğur Demirer</Link></strong></h4>
                </Col>
                <Col className='d-flex flex-column justify-content-center'>
                    <h4 className='text-center text-white'>Social Media</h4>
                    <div className='d-flex flex-row justify-content-center'>
                        <a  href="https://www.instagram.com/ugurdmrer/" target="_blank" rel="noopener noreferrer"><img  src={instagramIcon}></img></a>
                        <a  href="https://github.com/Ugurdmrer" target="_blank" rel="noopener noreferrer"><img  src={githubIcon}></img></a>
                        <a  href="https://www.linkedin.com/in/osman-ugur-demirer/" target="_blank" rel="noopener noreferrer"><img  src={linkedinIcon}></img></a>
                    </div>
                        
                </Col>
        </Row>
    </footer>
  )
}

