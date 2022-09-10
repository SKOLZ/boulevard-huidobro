import { NavLink, Route, Routes } from 'react-router-dom';
import Contact from './Screens/Contact';
import Location from './Screens/Location';
import News from './Screens/News';
import Photos from './Screens/Photos';
import Project from './Screens/Project';
import Logo from './assets/logo.png';
import Footer from './assets/footer.png';
import './App.scss';

function App() {
  return (
    <main className="main">
      <img src={Logo} alt="" className="logo" />
      <nav className="navbar">
        <NavLink className="nav-link" to="/">Novedades</NavLink>
        <NavLink className="nav-link" to="/project">Proyecto</NavLink>
        <NavLink className="nav-link" to="/location">Ubicacion</NavLink>
        <NavLink className="nav-link" to="/photos">Fotos</NavLink>
        <NavLink className="nav-link" to="/contact">Contacto</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="project" element={<Project />} />
        <Route path="location" element={<Location />} />
        <Route path="photos" element={<Photos />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <img src={Footer} alt="" className="logo" />
    </main>
  )
}

export default App
