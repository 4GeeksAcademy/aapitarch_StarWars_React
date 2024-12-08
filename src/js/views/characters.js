import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Characters = () => {

    const { store } = useContext(Context)

    return (
        <div className="text-center mt-5">
            <div className="d-flex flex-wrap justify-content-center">
                {
                    data.map((data) => (
                        <Card
                            key={data.uid}
                            title={data.name}
                            image={`https://starwars-visualguide.com/assets/img/${store.getCategory}/${data.uid}.jpg`}
                            id={data.uid}
                            item={data.uid}
                        />
                    ))
                }
            </div>
        </div>
    );
}