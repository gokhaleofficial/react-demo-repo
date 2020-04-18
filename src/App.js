import React from "react";
import PropTypes from "prop-types";
import { Odd, Even } from "./ConditionalRendering";

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
      Hello World
      {/* <MyInputClassComponent /> */}
      {/* <ShowEmployeeDetails data={empObj} /> */}
      {/* <Age age={11 + 11} name="Sachin" />
      <hr />
      <Age /> */}
      {/* <ShowNames names={names} /> */}
      <hr /> <br />
      <ButtonTest />
    </div>
  );
}

class ButtonTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      response: {
        status: null,
        message: null
      }
    };
    console.log("INside Constr");
  }

  handleClick = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    });
  };

  componentDidMount() {
    // This is where I can run side effects..
    // Ex : API Calls.

    const URL = "https://dummy.restapiexample.com/api/v1/employee/2";
    fetch(URL)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          response: data
        });
      });

    console.log("Inside Component Did Mount");
  }

  // componentWillUnmount() {
  //   console.log("Inside Component Will Unmount");
  // }

  componentDidUpdate() {
    console.log("Inside Component Did Update");
  }

  render() {
    console.log("Inside Render");
    if (!this.state.loggedIn) {
      return (
        <div>
          You Have logged out
          <button onClick={this.handleClick}>Log In Again</button>
        </div>
      );
    }

    return (
      <div>
        {this.state.loggedIn}
        <br />
        {this.state.response.status}
        <br />
        {this.state.response.message}
        <br />
        Your Home Page Here..
        <button onClick={this.handleClick}>Log Out</button>
      </div>
    );
  }
}

// Class Component

class MyInputClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textBoxValue: "Typing Here..",
      counter: 0,
      ShowComponentAsStateVariabe: null
    };
    this.ShowComponent = null;
  }

  handleInputChange = e => {
    // console.log(e.target.value);
    this.setState({
      textBoxValue: e.target.value
    });
  };

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
      // ShowComponentAsStateVariabe: <Odd />
    });
  };

  render() {
    // JS Land - Begins

    // Gonna point to another REact COmp.
    // console.log(this.state.counter);

    if (this.state.counter % 2 === 0) {
      this.ShowComponent = <Even />;
    } else {
      this.ShowComponent = <Odd />;
    }

    // JS Land - Ends
    return (
      <div>
        <input
          onChange={this.handleInputChange}
          value={this.state.textBoxValue}
        />
        <hr />
        {this.state.counter}
        {/* Ternary Operator */}
        {/* {this.state.counter % 2 === 0 ? <Even /> : <Odd />} */}
        <hr />
        Second Way :{/* Handle Conditions before REturn  */}
        {this.ShowComponent}
        <hr />
        {/* POinting a Component from a state
        {this.state.ShowComponentAsStateVariabe} */}
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

// class name extends React.Component {

//   constructor(){
//     // Vars
//   }

//   methods(){

//   }

//   // sadaldskjd

//   method1(){
// ///

//   }

//   method2(){
// ///

//   }

// }
