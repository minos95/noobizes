import React from "react";
import { useLocation } from "react-router-dom";
import { Participant } from "../component/participant";
import { Container, Row, Table } from "react-bootstrap";
import Header from "../component/Header";
interface props {
  state: Participant;
}
export const Participantroute: React.FC = () => {
  const location = useLocation();
  const participants = location.state;
  console.log(participants);
  return (
    <>
      <Header />
      <div className="body">
        <Container>
          <h1>Participants stats </h1>
          <Table striped bordered variant="dark">
            <thead>
              <tr>
                <th>Name</th>
                <th>Level</th>
                <th>Kills</th>
                <th>Assists</th>
              </tr>
            </thead>
            <tbody>
              {participants.map((participant: Participant) => {
                return (
                  <tr>
                    <td> {participant.championName}</td>
                    <td> {participant.champLevel.toString()}</td>
                    <td> {participant.kills.toString()}</td>
                    <td>{participant.assists.toString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
};
