import { Component } from "react";

export default class CCCar extends Component {
  constructor(props) {
    super(props);

    let num = 7;
    this.number = 8;
    this.state = {
      speed: this.props.speed,
      lisnecePAltte: '11-11-11',
      name: 'no name'
    };
  }

  btnINSP = () => {
    //this.state.speed += 2 //ERROR!

    //opt1  - no relation betteew the previous state
    // this.setState({
    //   speed: 300,
    //   lisnecePAltte : '22-22-22'
    // });

    //opt2  - relation beteew the previous state
    this.setState((prevS) => ({ speed: prevS.speed + 2 }));
  }

  chgName = (e) => {
    let strName  = e.target.value.toUpperCase();
    this.setState({name: strName});
  }

  render() {
    console.log('render');
    return (
      <div style={{
        color: "blue",
        border: 'solid yellow 3px',
        borderRadius: 15,
        margin: 10,
        padding: 10
      }}>
        <h4>Car</h4>
        model={this.props.model} <br />
        speed = {this.state.speed} <br />
        color = {this.props.color} <br />
        <button onClick={this.btnINSP}>Increase Speed</button> <br />
        <input type="text" onChange={this.chgName} /> {this.state.name}
      </div>
    );
  }
}