import React from 'react';
import './locations.scss';
import connection from '../../assets/icons/connection.svg';
import globe from '../../assets/icons/worldwide.svg';
import hourglass from '../../assets/icons/hourglass.svg';
const Locations = _ => {
    return (
        <div className="locations-container screen-container d-flex flex-column justify-content-center align-items-center">
            <header className="mb-4">Locations</header>
            <div className="locations-grid text-center container">
                <div id="map" className="embed-responsive embed-responsive-16by9" ></div>
                <div className="locations-content">
                    <div className="col-md-4">
                        <div className="col-md-4">
                            <img alt="" src={connection} />
                        </div>
                        <div className="col-md-8">
                            <div>
                                <h3>2500+</h3>
                            </div>
                            <div>
                                <p>People World Wide</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-md-4">
                            <img alt="" src={globe} />
                        </div>
                        <div className="col-md-8">
                            <div>
                                <h3>12</h3>
                            </div>
                            <div>
                                <p>Global Presence</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-md-4">
                            <img alt="" src={hourglass} />
                        </div>
                        <div className="col-md-8">
                            <div>
                                <h3>16</h3>
                            </div>
                            <div>
                                <p>Glorious Years &amp; Counting</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Locations;