import React from "react";
import { Stack, Spinner } from "react-bootstrap";
import useMatchs from "../hooks/useMatchs";
import MatchDetail from "./MatchDetail";
import { Match } from "./match";

const MatchList: React.FC = () => {
  const [loading, error, data] = useMatchs();

  if (error) {
    return <>{error}</>;
  }
  if (loading) {
    return (
      <>
        {" "}
        <Spinner animation="border" variant="primary" />
      </>
    );
  }
  console.log(data);
  return (
    <Stack gap={3}>
      {data.matchs.map((match: Match) => {
        return <MatchDetail match={match} />;
      })}
    </Stack>
  );
};

export default MatchList;
