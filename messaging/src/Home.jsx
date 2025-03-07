import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import UserListingInd from "./UserListingInd";

function Home() {
  // async function getUsers() {
  //   const users = await axios.get(`${import.meta.env.VITE_API_URL}/user/users`);
  //   return users;
  // }

  const response = axios.get(`${import.meta.env.VITE_API_URL}/user/users`);

  console.log(response.data);

  return (
    <>
      <Container>
        <Row>
          <Col id="users">
            <UserListingInd name="charlie" status="hello" />
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
