import React, { Fragment } from 'react';
import './App.scss';
import Welcome from './Components/Welcome';
import Origins from './Components/Origins';
import Pillars from './Components/Pillars';
import Locations from './Components/Locations';
import XebiaGroup from "./Components/XebiaGroup";
import COE from './Components/COE';
import Clients from './Components/Clients';
import Policy from './Components/Policy';
import Tools from './Components/Tools';
import LifeAtXebia from "./Components/LifeAtXebia";
import ThingsToRemember from './Components/ToRemember';

function App() {
  return (
    <Fragment>
      <Welcome />
      <Origins />
      <Pillars />
      <Locations />
      <XebiaGroup />
      <COE />
      <Clients />
      <Policy />
      <ThingsToRemember />
      <Tools/>
      <LifeAtXebia />
    </Fragment>
  );
}

export default App;
