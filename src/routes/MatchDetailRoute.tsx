import React from "react";
import useMatchDetail from "../hooks/useMatchDetail";
import { Spinner, Row, Col, Card, Button, Container } from "react-bootstrap";
import Header from "../component/Header";
import { Link } from "react-router-dom";
interface Team {}
function stampToDate(stamp: Date) {
  const date = new Date(stamp);
  return (
    date.getDay() +
    "/" +
    date.getMonth() +
    "/" +
    date.getFullYear() +
    " , " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds()
  );
}
function durationFormat(sec: number) {
  return Math.floor(sec / 60) + ":" + (sec % 60);
}
const MatchDetailRoute: React.FC = () => {
  const [loading, error, data] = useMatchDetail();

  if (error) {
    console.log(error);
    return <>error</>;
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
  const gameCreation = stampToDate(data.getMatchDetail.info.gameCreation);
  const gameStart = stampToDate(data.getMatchDetail.info.gameStartTimestamp);
  const gameEnd = stampToDate(data.getMatchDetail.info.gameEndTimestamp);
  const gameDuration = durationFormat(data.getMatchDetail.info.gameDuration);
  const team: Team = data.getMatchDetail.info.teams;
  return (
    <>
      <Header />
      <div className="body ">
        <Container className="text-card">
          <h3>Game Info</h3>
          <Row style={{ padding: 50 }}>
            <Col>
              <b>Name:</b> {data.getMatchDetail.info.gameName}
            </Col>
            <Col>
              <b>Mode:</b> {data.getMatchDetail.info.gameMode}
            </Col>
            <Col>
              <b>Type:</b> {data.getMatchDetail.info.gameType}
            </Col>
            <Col>
              <b>Version:</b> {data.getMatchDetail.info.gameVersion}
            </Col>
          </Row>
          <h3>Game time</h3>
          <Row style={{ padding: 50 }}>
            <Col>
              Creation:
              {gameCreation}
            </Col>
            <Col>Duration: {gameDuration}</Col>
            <Col>Start: {gameStart}</Col>
            <Col>End: {gameEnd}</Col>
          </Row>
          <Row style={{ marginRight: "auto", marginLeft: "auto" }}>
            <Col>
              {" "}
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="assets/char1.jpg" height={250} />
                <Card.Body className="text-card">
                  <Card.Title>
                    <h3 className="title-card">PARTICIPANTS</h3>
                  </Card.Title>
                  <Card.Text className="text-card">
                    <p>{data.getMatchDetail.info.participants.length}</p>
                  </Card.Text>

                  <Link
                    to={"/participant"}
                    state={data.getMatchDetail.info.participants}
                  >
                    <Button variant="warning">More Detail</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              {" "}
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="assets/team.jpeg" height={250} />
                <Card.Body className="text-card">
                  <Card.Title>
                    <h3 className="title-card">TEAMS</h3>
                  </Card.Title>
                  <Card.Text className="text-card">
                    <p>{data.getMatchDetail.info.teams.length}</p>
                  </Card.Text>

                  <Link to={"/teams"} state={team}>
                    <Button variant="warning">More Detail</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MatchDetailRoute;
