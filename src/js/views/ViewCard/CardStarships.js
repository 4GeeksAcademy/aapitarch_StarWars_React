import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import Card from "../../component/Card";

export const Starships = () => {

    const { store } = useContext(Context)

    return (
        <div className="text-center mt-5">
            <div className="d-flex flex-wrap justify-content-center">
                {
                    store.starShips.map(starShuip => (
                        <Card
                            key={starShuip.uid}
                            title={starShuip.name}
                            image={`https://starwars-visualguide.com/assets/img/starships/${starShuip.uid}.jpg`}
                            link={`/starship/${starShuip.uid}`}
                        />
                    ))
                }
            </div>
        </div>
    );
}