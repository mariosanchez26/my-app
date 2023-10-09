import React, {useState} from "react";
import { Navigate } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false); // Variable de estado para controlar la autenticación
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Realiza la validación de inicio de sesión aquí
      if (email === 'mario13119916@gmail.com' && password === '12345678') {
        setLoggedIn(true); // Establece la variable de estado en true si la autenticación es exitosa
      } else {
        alert('Correo o contraseña incorrectos');
      }
    };
  
    if (loggedIn) {
      return <Navigate to="/Compra" /> // Muestra el mensaje de bienvenida con el nombre del usuario
    }
    return (
            <form onSubmit={handleSubmit}>
                <h2>Iniciar Sesion</h2>
                <div ClassName="form-group">
                    <label htmlFor="email" >Correo:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                </div>
                <div ClassName="form-group">
                    <label htmlFor="password" >Contraseña:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                <button type="submit">Iniciar Sesion</button>
            </form>
    );
}

export default Login;