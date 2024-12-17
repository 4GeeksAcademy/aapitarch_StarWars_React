import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import Card from "../../component/Card";

export const Vehicles = () => {

    const { store } = useContext(Context)

    return (
        <div className="text-center mt-5">
            <div className="d-flex flex-wrap justify-content-center">
                {
                    store.vehicles.map(vehicles => (
                        <Card
                            key={vehicles.uid}
                            title={vehicles.name}
                            image={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`}
                            link={`/vehicle/${vehicles.uid}`}
                        />
                    ))
                }
            </div>
        </div>
    );
}