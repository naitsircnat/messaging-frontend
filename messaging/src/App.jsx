import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <>
      <NavBar />
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
      <Footer />
    </>
  );
}

export default App;
