import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Routes/Home";
import Jsxcomp from './Routes/jsxcomp';
import Registry from "./Routes/Registry";

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
          <Route path="/Registry">
            <Registry />
            </Route>
            <Route path="/Jsxcomp">
            <Jsxcomp />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
