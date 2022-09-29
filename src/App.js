import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Nav from "./utils/Nav";
import Home from "./components/Home";

function App() {
  return (
    <div className="snap">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route render={() => <Redirect to="/home" />} />
      </Switch>
    </div>
  );
}

export default App;
