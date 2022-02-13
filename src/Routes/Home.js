import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/AddingUser"> Create a list </Link>

      <h1>Notification Tab</h1>
      <Link to="/Message"> Notifications </Link>
    </div>
  );
}
export default Home;
