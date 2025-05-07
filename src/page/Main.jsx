import React from "react";
import {useNavigate } from "react-router-dom";
import "../App.css";

import CardInformativo from "../components/Cards/CardInformativo";
import SubMenu from "../components/SubMenu";

function Main(){

    const navigate = useNavigate();
    const ListaSubOpciones = ["Finalizados", "Resultados"];
    const ListaSubOpciones2 = ["Mayor", "Juvenil", "Infantil"];

    return(
        <main className="w-[1200px] m-auto">
            <section className="py-35">
                <div className="m-auto w-2xl text-center">
                    <h1 className="font-bold text-5xl mb-2">Liga de Futbol 2025</h1>
                    <p>Toda la emoción del fútbol en un solo lugar. Sigue a tu equipo favorito en todas las categorías.</p>
                    <br />
                    <button onClick={() => navigate("/Partidos")} className="btnPrimary text-white bg-black">Ver partidos</button>
                    <button onClick={() => navigate("/Clasificacion")} className="btnPrimary">Clasificación</button>
                </div>
            </section>

            <section className="text-center mb-20">
                <h1 className="text-5xl font-bold mb-4">Bienvenido a la Liga de Fútbol</h1>
                <p>Descubre toda la información sobre nuestras competiciones, equipos y jugadores. Mantente al día con los resultados, clasificaciones y próximos partidos.</p>

                <div className="flex justify-around gap-3 my-5">
                    <CardInformativo key={1} Title={"Ligas"} Numer={12} Text={"3 mayores, 4 juveniles, 5 infantiles"}/>
                    
                    <CardInformativo key={2} Title={"Equipos"} Numer={148} Text={"+12 desde la temporada pasada"}/>

                    <CardInformativo key={3} Title={"Partidos"} Numer={24} Text={"Este fin de Semana"}/>

                    <CardInformativo key={4} Title={"Jugadores"} Numer={"2,450"} Text={"En todas las categorías"}/>
                </div>

            </section>

            <section className="flex gap-5">
                <div className="flex-1/2">
                    <div className="flex items-center justify-between mb-5">
                        <h1 className="font-bold text-2xl">Partidos</h1>
                        <SubMenu opciones={ListaSubOpciones} />
                    </div>

                    <div>
                        <h1>Hola</h1>
                    </div>
                </div>

                <div className="flex-1/4">
                    <h1 className="font-bold text-2xl mb-2">Clásificación</h1>
                    <SubMenu opciones={ListaSubOpciones2} />
                </div>
            </section>
        </main>

    )
}

export default Main;