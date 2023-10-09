import React from 'react';
import '../css/style.css';

function Navbar() {
    return (
        <header>
            <a href="/"><img src="https://d2j6dbq0eux0bg.cloudfront.net/images/11817075/545427038.jpg" alt="Logo" height="50" width="50" /></a>
            <nav>
                <ul>
                    <li>
                        <a href="/"> Inicio </a>
                    </li>
                    {/*<li>
                        <a href="/Videojuegos"> Videojuegos </a>
                    </li>*/}
                    <li>
                        <a href="/Consolas"> Consolas </a>
                    </li>
                    {/*<li>
                        <a href=""> Accesorios </a>
                    </li>*/}
                    <li>
                        <a href="/Login"> Iniciar Sesion </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
