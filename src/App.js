import Header from './components/Navbar';
import Consolas from './components/Consolas';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React, {useState} from 'react';
import './components/Card.css';
import Videojuegos from './components/Videojuegos';
import Compra from './components/Compra';
import './App.css';

function App() {
  function Private() {

    const [setLoggedIn] = useState(false); // Variable de estado para controlar la autenticación

    // Función para actualizar el estado de autenticación
    const loggedIn = (value) => {
      setLoggedIn(value);
    };

    return loggedIn ? <Navigate to="/Login" /> : <Navigate to="/Compra" />

  }
  return (
    <Router>
      <div className="body">
        <Header />
        <Routes>
          <Route exact path="/" element={<Videojuegos />} />
          <Route exact path="/Consolas" element={<Consolas />} />
          <Route exact path="/Private" element={<Private />} />
          <Route exact path="/Compra" element={<Compra />} />
          <Route exact path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
