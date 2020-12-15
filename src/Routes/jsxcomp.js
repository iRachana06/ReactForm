import React from 'react';
import ReactDOM from 'react-dom';
function Jsxcomp()
 {

const name = "friend";
 
const element = <h1>Hello, { name }. This is what we have.</h1>;
  
ReactDOM.render(
    element, 
    document.getElementById("root")
);

}

export default Jsxcomp;