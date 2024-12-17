import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import Card from "../../component/Card";

export const Planets = () => {

    const { store } = useContext(Context)

    return (
        <div className="text-center mt-5">
            <div className="d-flex flex-wrap justify-content-center">
                {
                    store.planets.map(planets => (
                        <Card
                            key={planets.uid}
                            title={planets.name}
                            image={`https://starwars-visualguide.com/assets/img/planets/${planets.uid}.jpg`}
                            link={`/planet/${planets.uid}`}
                        />
                    ))
                }
            </div>
        </div>
    );
}