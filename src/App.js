import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Welcome from './Components/Welcome';
// import Origins from './Components/Origins';
// import Pillars from './Components/Pillars';
// import Locations from './Components/Locations';
// import XebiaGroup from "./Components/XebiaGroup";
// import COE from './Components/COE';
// import Clients from './Components/Clients';
// import Policy from './Components/Policy';
// import Tools from './Components/Tools';
// import LifeAtXebia from "./Components/LifeAtXebia";
// import ThingsToRemember from './Components/ToRemember';

import './App.scss';

function App() {
  return (
    <Container fluid>
      <Welcome />
      {/* <Origins />
      <Pillars />
      <Locations />
      <XebiaGroup />
      <COE />
      <Clients />
      <Policy />
      <ThingsToRemember />
      <Tools/>
      <LifeAtXebia /> */}
    </Container>
  );
}

export default App;
