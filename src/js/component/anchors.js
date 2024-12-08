import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/anchor.css";

export const Anchor = () => {

    const { actions } = useContext(Context);

    return (
        <div className="anchor-fixed">
            <div id="simple-list-example" className="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
                <a className="p-1 rounded" onClick={() => actions.setCategory("people")}>Personajes</a>
                <a className="p-1 rounded" onClick={() => actions.setCategory("planets")}>Planetas</a>
                <a className="p-1 rounded" onClick={() => actions.setCategory("species")}>Especies</a>
                <a className="p-1 rounded" onClick={() => actions.setCategory("starships")}>Naves espaciales</a>
                <a className="p-1 rounded" onClick={() => actions.setCategory("vehicles")}>Vehiculos</a>
            </div>
        </div>
    );
}

