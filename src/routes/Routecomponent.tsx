import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Playerdetails from "./Playerdetails";

const Routecomponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/" element={<Playerdetails />} />
    </Routes>
  );
};

export default Routecomponent;
