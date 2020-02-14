import React, { Fragment } from 'react';
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
import LifeAtXebia from "./Sections/LifeAtXebia";
import Tools from './Sections/Tools';
import Events from './Sections/Events';

import './App.scss';

function App() {
  return (
    <Fragment>
      <Container fluid>
        <Welcome />
        <Origins />
        <Pillars />
        <Locations />
        <Clients />
      </Container>
      <Policy />
      <Container>
        <ThingsToRemember />
        <Tools />
      </Container>
      <LifeAtXebia />
      <Events />
    </Fragment>
  );
}

export default App;
