import React, { Fragment } from 'react';
import './App.scss';
import Welcome from './Components/Welcome';
import Origins from './Components/Origins';
import Pillars from "./Components/Pillars";
// import Clients from "./screens/clients/clients";
// import Policy from "./screens/policy/policy";
// import LifeAtXebia from "./screens/lifeAtXebia/lifeAtXebia";
// import Coe from "./screens/coe/coe";
// import Locations from './screens/locations/locations';
// import XebiaGroup from "./screens/xebiaGroup/xebiaGroup";
// import Tools from './screens/tools/tools';
// import ThingsToRemember from './screens/ttoremember/thingstoremember';

function App() {
  return (
    <Fragment>
      <Welcome />
      <Origins />
      <Pillars />
      {/* <Locations />
      <XebiaGroup />
      <Coe />
      <Clients />
      <Policy />
      <ThingsToRemember />
      <Tools/>
      <LifeAtXebia /> */}
    </Fragment>
  );
}

export default App;
