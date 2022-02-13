import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div align="center">
      <h1>Simple React App</h1>
      <Link to="/AddingUser"> Create a list </Link>

      <h3>Notification Tab</h3>
      <Link to="/Message"> Notifications </Link>
    </div>
  );
}
export default Home;
