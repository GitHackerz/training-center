import React from "react";
import ParcoursCard from "./parcours-card";

export default function ParcoursList({parcours, type}) {

    return (
        <div>
            <h1 className="text-7xl text-blue-900 font-bold text-center mt-32">{
                type === "ALL" ? "All Parcours" : "My Parcours"
            }</h1>
            <div className="card-container inline-flex flex-wrap gap-40 w-full p-20">
                {
                    parcours.length === 0 &&
                    <h1 className="text-3xl font-bold text-center mt-32">No Parcours Found</h1>
                }
                {
                    parcours.map((parcours) => {
                        return <ParcoursCard id={parcours._id} key={parcours._id} {...parcours} />
                    })
                }

            </div>
        </div>
    );
}