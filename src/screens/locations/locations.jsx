import React from 'react';

const Locations = _ => {
    return (
        <div className="pillars-container screen-container d-flex flex-column justify-content-center align-items-center">
            <header className="mb-4">Locations</header>
            <div className="pillar-grid text-center">
                <div id="map" style={{width: "500px", height: "400px"}}></div>
            </div>
        </div>
    )
}
export default Locations;