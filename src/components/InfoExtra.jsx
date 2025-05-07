import React from "react";
import { useNavigate } from "react-router-dom";

function InfoExtra() {
    const navigate = useNavigate();
    return(
        <section className="text-center my-30">
            <h1 className="text-5xl font-bold">Únete a nuestra liga</h1>
            <br />
            <p className="text-xl">¿Quieres formar parte de nuestra comunidad? Inscribe a tu equipo en nuestras competiciones.</p>
            <br />
            <button className="btnPrimary bg-black text-white mr-5" onClick={() => navigate("/Inscripcion")}>Inscribe tu equipo</button>

        </section>
    )
}

export default InfoExtra;