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
        <div className="py-4 px-5 m-2" key={"client" + index}>
          <img alt={client.name} src={client.image} />
        </div>
      );
    });
  };

  const scrollClients = direction => {
    let container = document.getElementById("clientsContainer");
    slideHorizontally(container, direction, 10, 250, 10);
  };

  return (
    <div className="clients-container screen-container d-flex flex-column justify-content-start align-items-center">
      <header className="mb-4">Clients</header>
      <div className="clients-cards">
        <div id="clientsContainer" className="d-flex flex-column flex-wrap">
          {getClients()}
        </div>
      </div>
      <div className="d-flex">
        <input
          className="button-scroll mr-2"
          type="button"
          value="<"
          onClick={() => scrollClients("left")}
        />
        <input
          className="button-scroll ml-2"
          type="button"
          value=">"
          onClick={() => scrollClients("right")}
        />
      </div>
    </div>
  );
};

export default Clients;
