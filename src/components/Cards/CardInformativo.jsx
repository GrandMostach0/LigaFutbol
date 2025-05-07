import React from "react";

function CardInformativo({Title, Numer, Text}){
    return(
        <div className="rounded-2xl py-5 px-4 border border-gray-200 text-left w-2xl">
            <div className="">
                <h2 className="font-semibold">{Title}</h2>
            </div>
            <p className="text-3xl font-bold my-2">{Numer}</p>
            <p className="text-xs text-gray-500">{Text}</p>
        </div>
    )
}

export default CardInformativo;