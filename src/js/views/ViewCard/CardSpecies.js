import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import Card from "../../component/Card";

export const Species = () => {

    const { store } = useContext(Context)

    return (
        <div className="text-center mt-5">
            <div className="d-flex flex-wrap justify-content-center">
                {
                    store.species.map(species => (
                        <Card
                            key={species.uid}
                            title={species.name}
                            image={`https://starwars-visualguide.com/assets/img/species/${species.uid}.jpg`}
                            link={`/specie/${species.uid}`}
                        />
                    ))
                }
            </div>
        </div>
    );
}