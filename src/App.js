import React from 'react';
import { Container } from 'react-bootstrap';
import Welcome from './Sections/Welcome';
import Origins from './Sections/Origins';
import Pillars from './Sections/Pillars';
import Locations from './Sections/Locations';
// import XebiaGroup from "./Sections/XebiaGroup";
// import COE from './Sections/COE';
import Clients from './Sections/Clients';
import Policy from './Sections/Policy';
import ThingsToRemember from './Sections/ToRemember';
import Tools from './Sections/Tools';
// import LifeAtXebia from "./Sections/LifeAtXebia";

import './App.scss';

function App() {
  return (
    <Container fluid>
      <Welcome />
      <Origins />
      <Pillars />
      <Locations />
      <Clients />
      <Policy />
      <ThingsToRemember />
      <Tools />
    </Container>
  );
}

export default App;
