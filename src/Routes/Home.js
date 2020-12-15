import React from 'react';
import {Link} from 'react-router-dom'
function Home() {
return(
    <div>
      <h1>Home</h1>
      <Link to="/registry"> Go to Registry Page </Link>
    
      <h1>Understand JSXComponent</h1>
      <Link to="/Jsxcomp"> Go to JSXComponent  </Link> 
    </div>
)
}
export default Home;