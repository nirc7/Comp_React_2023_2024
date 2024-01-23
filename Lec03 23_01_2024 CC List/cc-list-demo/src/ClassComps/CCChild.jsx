import { Component } from "react";


export default class CCChild extends Component {
  constructor(props) {
    super(props);

    this.list = ["avi ", "benny", "charlie"];
  }

  componentDidMount() {
    console.log('did mount');
  }

  componentWillUnmount() {
    console.log('unmount');
  }

  render() {

    this.listAsLi = this.list.map((name, index) =>
      <a href="#" className="list-group-item" key={index}>{index + ": hello " + name + "!"}</a>);

    console.log('render in cchld');
    return (
      <>
        <p style={{ fontWeight: "bold", margin: 10 }}>names list:</p>
        <div className="list-group" style={{ width: "70%" }}>{this.listAsLi}</div>

        <button onClick={() => { this.props.sendData(7) }} >send2Parent</button>
      </>
    );
  }
}