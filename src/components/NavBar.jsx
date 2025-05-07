import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {

    const navigate = useNavigate();

    return(
        <div className="px-16 py-3 flex items-center justify-between border border-b-gray-500">
            <div className="flex items-center">
                <Link to="/" className="mr-10">
                    <h1 className="text-2xl font-bold">Liga de Fútbol</h1>
                </Link>

                <nav className="text-gray-500">
                    <ul className="flex items-center justify-center font-semibold">
                        <li className="mr-4">
                            <Link to="/Ligas">Ligas</Link>
                        </li>

                        <li className="mr-4">
                            <Link to="/Equipos">Equipos</Link>
                        </li >

                        <li className="mr-4">
                            <Link to="/Partidos">Partidos</Link>
                        </li>

                        <li>
                            <Link to="/Clasificacion">Clasificación</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="">
                <button
                className="py-4 px-4 rounded-2xl font-bold bg-neutral-200 cursor-pointer"
                onClick={() => navigate("/Inscripciones")}>
                    Inscribe a tu equipo
                </button>
            </div>
        </div>
    )
}

export default NavBar;