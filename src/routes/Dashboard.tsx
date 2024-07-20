import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import { PlayerList } from "../component/PlayerList";

const Dashboard: React.FC = () => {
  return (
    <div className="body">
      <Header />
      <Container className="mt-5">
        <PlayerList />
      </Container>
    </div>
  );
};

export default Dashboard;
