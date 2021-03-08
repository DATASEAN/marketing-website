import React from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom" 
import Home from "./pages/home"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
