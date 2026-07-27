import { useState } from "react";
import "./App.css";
import SiteNav from "./components/SiteNav";
import HeroSection from "./components/HeroSection";
import Button from "./components/Button";
import StatRow from "./components/Stats/StatRow";
import WhatWeDo from "./components/WhatWeDo";

function App() {
  return (
    <>
      <SiteNav />
      <HeroSection eyebrow={"Cadence Leadership + Communication"} />
      <StatRow />
      <WhatWeDo />
    </>
  );
}

export default App;
