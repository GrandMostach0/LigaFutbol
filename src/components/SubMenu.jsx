import React, { useState } from "react";

function SubMenu({opciones}){

    const [opcionSeleccionada, setOpcionSeleccionada] = useState(opciones[0]);

    return(
        <div className="flex items-center justify-around gap-2 rounded-xl py-1 px-2 bg-gray-300/50">
            {opciones.map((opcion, index) => (
                <p
                key={index}
                onClick={() => setOpcionSeleccionada(opcion)}
                className={`cursor-pointer rounded-xl py-1 px-4 text-xs font-semibold ${
                    opcion === opcionSeleccionada ? 'bg-slate-50' : 'text-slate-500'
                }`}
            >
                {opcion}
            </p>
            ))}
        </div>
    )
}

export default SubMenu;