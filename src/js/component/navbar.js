import React, { useContext } from "react";
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">STAR WARS</span>
			</Link>

			<div className="dropdown">
				<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favoritos
				</button>
				<ul className="dropdown-menu">
                    {store.favorites.length > 0 ? (
                        store.favorites.map((favorite, index) => (
                            <li key={index} className="d-flex align-items-center justify-content-between">
                                <a className="dropdown-item">{favorite}</a>
                                <button className="btn btn-sm ms-2" onClick={() => actions.removeFavorite(favorite)}>
									<i className="fa-solid fa-trash"></i>
                                </button>
                            </li>
                        ))
                    ) : (
                        <li>
                            <a className="dropdown-item">No hay favoritos en la lista</a>
                        </li>
                    )}
                </ul>
			</div>
		</nav>
	);
};
