import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

export default function App() {
  const names = ["Sachin", "Rahul", "Kumble"];

  const empObj = {
    name: "sachin",
    age: 45,
    city: "Mum"
  }; // type= Object

  return (
    <div className="App">
      <MyInputClassComponent />
      {/* <ShowEmployeeDetails data={empObj} /> */}
      {/* <Age age={11 + 11} name="Sachin" />
      <hr />
      <Age /> */}
      {/* <ShowNames names={names} /> */}
    </div>
  );
}

// Class Component

class MyInputClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textBoxValue: "Typing Here..",
      counter: 1000
    };
  }

  handleInputChange = e => {
    // console.log(e.target.value);
    this.setState({
      textBoxValue: e.target.value
    });
  };

  increment = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleInputChange}
          value={this.state.textBoxValue}
        />
        <hr />
        <button onClick={this.increment}>{this.state.counter}</button>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       Hello React Class Component
  //       <hr />
  //     </div>
  //   );
  // }
}

// default Props
// function Age(props) {
function Age({ age = -1, name = "Guest" }) {
  return (
    <div>
      Hello {name}, Your Age is {age}
    </div>
  );
}

function ShowEmployeeDetails(props) {
  // console.log(Object.keys(props.data));
  // console.log(Object.values(props.data));
  return (
    <div>
      Hello Employee
      <hr />
      {Object.keys(props.data).map((value, index) => {
        return <div>{props.data[value]}</div>;
      })}
    </div>
  );
}

function ShowNames(props) {
  // JS Land
  // 100 js
  if (false) alert("h");
  return (
    // HTML LAND
    <div>
      Names Are :
      <hr />
      {props.names.map((value, index) => {
        return <div>{value}</div>;
      })}
      {/* // JS LANK */}
    </div>
  );
}

// Prop Types
Age.propTypes = {
  name: PropTypes.string
};

function Login() {
  return (
    <div className="App">
      WELCOME TO REACT SESSION - {1 + 1}
      <ReturnHeader />
      User name : <MyInputComponent type="text" />
      Password : <MyInputComponent type="password" />
      <MyButtonComponent name="Submit" />
      <MyButtonComponent name="Reset" />
    </div>
  );
}

function MyButtonComponent(props) {
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

function ReturnHeader(id) {
  return (
    <div>
      <h1 id="header1" class="myclass">
        {" "}
        Hello React{" "}
      </h1>
    </div>
  ); // jsx
}

// function sum(a,b){
//   return a+b;
// }

// sum(1,2); //3
// sum(1,4); //5

// function ReturnHeader(id){
//   return (
//     <h1 id ="header1" class= "myclass"> Hello World </h1>
//   ); // jsx
// }

// ReturnHeader('header1'); //

// <h1 id = "header1" class= "myclass"> Hello World </h1>
// <h1  id = "header2" class= "myclass"> Hello World </h1>

// function MyComponent(props) {
//   // Functional Component
//   return (
//     <div>
//       <button>{props.name}</button>
//     </div>
//   );
// }

// function MyInputComponent(props) {
//   // Functional Component
//   return (
//     <div>
//       <input type={props.type} />
//     </div>
//   );
// }

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

// <h3>This is my H3</h3>
//       User Name : <MyInputComponent type="text" />
//       Pwd : <MyInputComponent type="password" />
//       <MyComponent name="Submit" />
//       <MyComponent name="Reset" />
