import React from "react";
import { Player } from "./Player";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

interface Props {
  player: Player;
}
export const PlayerDetail: React.FC<Props> = ({ player }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="assets/char1.jpg" />
        <Card.Body className="text-card">
          <Card.Title>
            <h3 className="title-card">{player.name}</h3>
          </Card.Title>
          <Card.Text className="text-card">
            <p>Level: {player.level.toString()}</p>
            <p>Rank : {player.rank.toString()}</p>
            <p>K/D ratio : {player.KDratio.toString()}</p>
          </Card.Text>

          <Link to={"/player-detail"}>
            <Button variant="warning">More Detail</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
