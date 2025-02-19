import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Route, Switch } from "wouter";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import Home from "./Home";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
