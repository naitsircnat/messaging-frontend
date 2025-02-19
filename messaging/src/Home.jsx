import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col id="friends">
            <h2>Friends</h2>
          </Col>
          <Col id="chat-window">
            <h2>Chat Window</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
