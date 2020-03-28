import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <h2>Starting to editing to see some magic happen!</h2>
      <h3>This is my H3</h3>
      User Name : <MyInputComponent type="text" />
      Pwd : <MyInputComponent type="password" />
      <MyComponent name="Submit" />
      <MyComponent name="Reset" />
    </div>
  );
}

function MyComponent(props) {
  // Functional Component
  return (
    <div>
      <button>{props.name}</button>
    </div>
  );
}

function MyInputComponent(props) {
  // Functional Component
  return (
    <div>
      <input type={props.type} />
    </div>
  );
}

// Function..
// function sum(a,b){ // reusable using params.
//   return a+b;
// }

// <div>
//   <h1 id="header1">Hello World</h1>
//   <h1 id="header2">Hello World</h1>
// </div>

// function returnHeader(id){ // id is not being used yet !
//   return "<div> <h1 id={id}> Hello World ! </h1> </div>"
// }

// returnHeader("header1")
// returnHeader("header2")
