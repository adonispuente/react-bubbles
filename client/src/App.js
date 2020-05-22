import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute
            exact
            path="/protectedFriends"
            // component={FriendsList}
          />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
