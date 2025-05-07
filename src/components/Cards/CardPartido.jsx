import React from "react";
import {useNavigate } from "react-router-dom";

function CardPartido({EquipoLocal,Categoria, EquipoVisitante, Fecha, Hora, Estadio}) {

    const navigate = useNavigate();

    return(
        <div className="border border-gray-500/50 py-5 px-5 rounded-2xl">
            <button className="border border-gray-500/50 py-1 px-2 mb-2 rounded-2xl text-xs">{Categoria}</button>

            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <div className="w-[50px] h-[50px] bg-black rounded-full"></div>
                    <p className="font-bold">{EquipoLocal}</p>
                </div>

                <p className="font-bold text-xl">vs</p>

                <div className="flex items-center gap-2">
                    <p className="font-bold">{EquipoVisitante}</p>
                    <div className="w-[50px] h-[50px] bg-black rounded-full"></div>
                </div>
            </div>

            <div>
                <p>{Fecha}</p>
            </div>
            <div>
                <p>{Hora}</p>
            </div>
            <div>
                <p>{Estadio}</p>
            </div>

            <button className="border border-gray-500/50 w-full py-1 rounded-xl mt-2" onClick={() => navigate("/DetallesPartido")}>Detalles del Partido</button>
        </div>
    )
}

export default CardPartido;