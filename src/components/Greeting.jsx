// Task 1: Create a New Component 

// In src/components/, create a file named Greeting.jsx

// // Inside Greeting.jsx, define a functional React component 
import React from "react";

function Greeting({ name }) {
    return (
      <div> 
        <h2>Hello, {name}! From the Greeting Component! </h2> 
        <p>This is your first custom component in React.</p>  {/* Returns required text */}
      </div>
    );
  }
  
  export default Greeting;

