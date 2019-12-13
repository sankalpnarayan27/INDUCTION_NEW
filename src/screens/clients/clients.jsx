import React from "react";
import "./clients.scss";
import clientsData from "./clientsData";
import { getImage } from "../../utils/getImage";
import { slideHorizontally } from "../../utils/slideHorizontatlly";
const Clients = () => {
  const getClients = () => {
    return clientsData.clients.map((client, index) => {
      let filePath = "icons/";
      let extension = "svg";
      console.log(client);
      //getImage(filePath, client.image, extension)
      return (
        <div className="py-4 m-2 client" key={"client" + index}>
          <div>
            <img alt={client.name} src={client.image} />
          </div>
        </div>
      );
    });
  };

  const scrollClients = direction => {
    let container = document.getElementById("clientsContainer");
    slideHorizontally(container, direction, 10, 250, 10);
  };

  return (
    <div className="clients-container container d-flex flex-column justify-content-start align-items-center">
      <header className="mb-4">Clients</header>
      <div className="clients-cards">
        <div id="clientsContainer" className="d-flex flex-column flex-wrap">
          {getClients()}
        </div>
      </div>
      <div className="d-flex">
        <i className="fa fa-arrow-circle-left" onClick={() => scrollClients("left")}></i>
        <i className="fa fa-arrow-circle-right" onClick={() => scrollClients("right")}></i>
      </div>
    </div>
  );
};

export default Clients;
