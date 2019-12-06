import React from 'react';
import './locations.scss';
const Locations = _ => {
    return (
        <div className="pillars-container screen-container d-flex flex-column justify-content-center align-items-center">
            <header className="mb-4">Locations</header>
            <div className="locations-grid text-center container">
                <div id="map" className="embed-responsive embed-responsive-16by9" ></div>
            </div>
        </div>
    )
}
export default Locations;