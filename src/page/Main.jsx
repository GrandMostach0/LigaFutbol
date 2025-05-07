import React from "react";
import {useNavigate } from "react-router-dom";
import "../App.css";

function Main(){

    const navigate = useNavigate();

    return(
        <section className="py-35">
            <div className="m-auto w-2xl text-center">
                <h1 className="font-bold text-5xl mb-2">Liga de Futbol 2025</h1>
                <p>Toda la emoción del fútbol en un solo lugar. Sigue a tu equipo favorito en todas las categorías.</p>
                <br />
                <button className="btnPrimary text-white bg-black">Ver partidos</button>
                <button className="btnPrimary ">Clasificación</button>
            </div>
        </section>

        
    )
}

export default Main;