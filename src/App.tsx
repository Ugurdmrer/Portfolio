import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import ErrorPage from './Errorpage'
import Navbar from './components/layout/Navbar'
function App() {

  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
