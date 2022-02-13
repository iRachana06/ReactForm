import React from "react";
import ReactDOM from "react-dom";
function Message() { //JSXComponent
  const name = "user";
  const element = <div> <h1>Hello, {name} - You will find Notifications here. </h1> 
  <ul> <h3> Simple ReactJS project </h3> </ul>
  <ul> <h3> Project to demonstrate JSX Components </h3> </ul>
  <a href = "/"> Go to Home Page </a>
  </div>;
return(
  ReactDOM.render(element, document.getElementById("root"))
  );
}

export default Message;
