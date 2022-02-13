import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Message from "./Routes/Message";
import AddingUser from "./Routes/AddingUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/AddingUser">
            <AddingUser />
          </Route>
          <Route path="/Message">
            <Message />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
