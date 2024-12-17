import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import Card from "../../component/Card";

export const Characters = () => {

    const { store } = useContext(Context)

    return (
        <div className="text-center mt-5">
            <div className="d-flex flex-wrap justify-content-center">
                {
                    store.people.map(character => (
                        <Card
                            key={character.uid}
                            title={character.name}
                            image={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                            link={`/character/${character.uid}`}
                        />
                    ))
                }
            </div>
        </div>
    );
}