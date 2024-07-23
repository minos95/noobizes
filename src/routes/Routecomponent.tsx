import { Route, Routes } from "react-router-dom";

import MatchDetailRoute from "./MatchDetailRoute";
import { Participantroute } from "./ParticipantRoute";
import { Teamroute } from "./TeamRoute";

const Routecomponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MatchDetailRoute />} />

      <Route path="/participant" element={<Participantroute />} />
      <Route path="/teams" element={<Teamroute />} />
    </Routes>
  );
};

export default Routecomponent;
