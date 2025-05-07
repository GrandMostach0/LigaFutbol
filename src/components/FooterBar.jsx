import React from "react";
import { Link } from "react-router-dom";

function FooterBar() {
    return(
        <footer className="flex justify-around px-16 py-3 text-center border-t-1 border-gray-200">
            <section>
                <div className="mb-5">
                    <h1 className="font-bold">Liga de Futbol</h1>
                </div>

                <p>Promoviendo el deporte y los valores del fútbol desde 2010.</p>
            </section>

            <section>
                <h4 className="mb-5 font-semibold">Competiciones</h4>
                <ul className="text-left">
                    <li className="mb-2">
                        <Link to="/LigaMayor">Fútbol Mayor</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/LigaJuvenil">Fútbol Juvenil</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/LigaFemenil">Fútbol Femenil</Link>
                    </li>
                    <li>
                        <Link to="/LigaInfantil">Fútbol Infantil</Link>
                    </li>
                </ul>
            </section>

            <section>
                <h4 className="mb-5 font-semibold">Enlaces</h4>
                <ul className="text-left">
                    <li className="mb-2">
                        <Link to="/Calendarios">Calendarios</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/Galerias">Galería</Link>
                    </li>
                    <li>
                        <Link to="/TablaPosiciones">Tabla de Posiciones</Link>
                    </li>
                </ul>
            </section>
            
            <section>
                <h4 className="mb-5 font-semibold">Contacto</h4>
                <ul className="text-left">
                    <li className="mb-2">
                        <p>Estadio Municipal, Calle Principal 123</p>
                    </li>
                    <li className="mb-2">
                        <a href="mailto:info@gmail.com">info@ligafutbol.com</a>
                    </li>
                    <li>
                        <a href="tel:+52999123456">+52 999 123 3456</a>
                    </li>
                </ul>
            </section>
        </footer>
    )
}

export default FooterBar;