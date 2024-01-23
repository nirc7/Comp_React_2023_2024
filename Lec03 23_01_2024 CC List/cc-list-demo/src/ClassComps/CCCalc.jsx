import { Component } from "react";

export default class CCCalc extends Component {

  constructor(props) {
    super(props);

    this.state = {
      num1: 0,
      num2: 0,
      res: 0,
      counter: 0
    };
  }

  chgNum1 = (e) => {
    this.setState({ num1: Number(e.target.value) });
  }

  btnAdd = () => {
    this.setState({
      res: this.state.num1 + this.state.num2,
      day: 'sunday'
    });
    console.log('BTN', this.state.res);
  }


  btnPlusPlus = () => {
    //opt1
    this.setState((prevS) => ({ counter: prevS.counter + 1 }));
    
    //opt2
    // let newC = this.state.counter+1;
    // this.setState({counter: newC} );
  }

  render() {

    console.log('render', this.state.res);

    return (
      <div style={{
        border: "dashed 3px orange", borderRadius: 15,
        margin: 20, padding: 15
      }}>
        <h3>Calc</h3>
        <h4>{this.props.stam}</h4>
        num1: <input type="text" onChange={this.chgNum1} /> <br />
        num2: <input type="text"
          onChange={(e) => this.setState({ num2: Number(e.target.value) })} /> <br /> <br />
        <button onClick={this.btnAdd} >+</button> <br />
        res={this.state.res} <br />
        <button onClick={this.btnPlusPlus} >++</button> {this.state.counter} <br />
      </div>
    );
  }
}