import React, { useState, useEffect } from "react";

function MyFirstHook() {
  const [counter, setCounter] = useState(100);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Inside Use Effect - Counter Hook");
    document.title = counter;
    // return () => {
    //   console.log("Clean UP - Effect -1 ");
    // };
  }, [counter]);


  useEffect(() => {
    console.log("Inside Use Effect - Name");
    // return () => {
    //   console.log("Clean UP - Effect 2");
    // };
  }, [name]);

  useEffect(() => console.log("Always"));


  console.log("Just Before Render");
  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>Hooks : {counter}</button>
      <br />
      {name}
      <input onChange={e => setName(e.target.value)} />
    </>
  );
}
export default MyFirstHook;

class MyInputClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      name: "Guest"
    };
  }

  componentDidMount() {
    document.title = this.state.counter;
  }

  componentDidUpdate() {
    document.title = this.state.counter;
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  render() {
    return (
      <>
        <button onClick={this.increment}>
          Hello, From Class : {this.state.name} = {this.state.counter}
        </button>
      </>
    );
  }
}

// export default MyInputClassComponent;
