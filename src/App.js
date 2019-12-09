import React from "react";
import "./App.scss";
import Welcome from "../src/screens/welcome/welcome";
import BornInNetherlands from "./screens/bornInNetherlands/bornInNetherlands";
import Pillars from "./screens/pillars/pillars";
import Clients from "./screens/clients/clients";
import Policy from "./screens/policy/policy";
import LifeAtXebia from "./screens/lifeAtXebia/lifeAtXebia";
import Coe from "./screens/coe/coe";
import Locations from './screens/locations/locations';
import XebiaGroup from "./screens/xebiaGroup/xebiaGroup";
function App() {
  return (
    <div className="App">
      <Welcome />
      <BornInNetherlands />
      <Locations />
      <Pillars />
      <XebiaGroup />
      <Coe />
      <Clients />
      <Policy />
      <LifeAtXebia />
    </div>
  );
}

export default App;