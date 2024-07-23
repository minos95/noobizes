import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import { Container, Table } from "react-bootstrap";
import { Team } from "../component/team";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";

import { Icon } from "@mui/material";
export const Teamroute: React.FC = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <>
      <Header />
      <div className="body">
        <Container>
          <h1>Teams stat</h1>
          <Table striped variant="dark">
            <thead>
              <tr>
                <th>Team</th>
                <th>Win</th>
                <th>Baron/kills</th>
                <th>Champion/kills</th>
                <th>Dragon/kills</th>
                <th>Horde/kills</th>
                <th>Inhibitor/kills</th>
              </tr>
            </thead>
            <tbody>
              {location.state.map((team: Team, index: Number) => {
                return (
                  <tr>
                    <td> Team {index.toString()}</td>
                    <td>
                      {team.win ? (
                        <FaRegCheckCircle size={28} color="green" />
                      ) : (
                        <FaRegTimesCircle size={28} color="red" />
                      )}
                    </td>
                    <td>
                      {team.objectives.baron.first ? (
                        <FaRegCheckCircle size={28} color="green" />
                      ) : (
                        <FaRegTimesCircle size={28} color="red" />
                      )}{" "}
                      /{team.objectives.baron.kills.toString()}
                    </td>
                    <td>
                      {team.objectives.champion.first ? (
                        <FaRegCheckCircle size={28} color="green" />
                      ) : (
                        <FaRegTimesCircle size={28} color="red" />
                      )}
                      / {team.objectives.champion.kills.toString()}
                    </td>
                    <td>
                      {team.objectives.dragon.first ? (
                        <FaRegCheckCircle size={28} color="green" />
                      ) : (
                        <FaRegTimesCircle size={28} color="red" />
                      )}{" "}
                      /{team.objectives.dragon.kills.toString()}
                    </td>
                    <td>
                      {team.objectives.horde.first ? (
                        <FaRegCheckCircle size={28} color="green" />
                      ) : (
                        <FaRegTimesCircle size={28} color="red" />
                      )}{" "}
                      /{team.objectives.horde.kills.toString()}
                    </td>
                    <td>
                      {team.objectives.inhibitor.first ? (
                        <FaRegCheckCircle size={28} color="green" />
                      ) : (
                        <FaRegTimesCircle size={28} color="red" />
                      )}{" "}
                      /{team.objectives.inhibitor.kills.toString()}
                    </td>
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
