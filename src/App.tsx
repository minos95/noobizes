import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./style.css";
import Routecomponent from "./routes/Routecomponent";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routecomponent />
    </BrowserRouter>
  );
};

export default App;
