import React from "react";
import { Match } from "./match";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
interface Props {
  match: Match;
}
const MatchDetail: React.FC<Props> = ({ match }) => {
  console.log(match);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="assets/char1.jpg" />
        <Card.Body className="text-card">
          <Card.Title>
            <h3 className="title-card">{match.id.toString()}</h3>
          </Card.Title>
          <Card.Text className="text-card">
            <p>Level:</p>
          </Card.Text>

          <Link to={"/match-detail"}>
            <Button variant="warning">More Detail</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MatchDetail;
