import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Galeria from './pages/Galeria'; 
import './styles/app.css'; 
import Nav from './components/NavBar';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Fotter from './components/Footer';


const App = () => {
  
  return (
    <Router>
      <div className="app">
        <Nav /> {/* Barra de navegación */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Fotter />
      </div>
    </Router>
  );
};


export default App;
