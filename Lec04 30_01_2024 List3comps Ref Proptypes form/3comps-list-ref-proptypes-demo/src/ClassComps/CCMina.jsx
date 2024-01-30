import React, { Component } from 'react'

import PropTypes from 'prop-types';

import FCInputs from '../FuncComps/FCInputs'
import FCPersonsList from '../FuncComps/FCPersonsList'



export default class CCMina extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        { id: 1, name: 'avi' },
        { id: 2, name: 'benny' }
      ],
      counter: 0
    };
  }

  getPfromI = (per) => {
    let newPerons = [...this.state.persons, per];
    console.log(newPerons);
    this.setState({ persons: newPerons },
      () => console.log('new persons changed', this.state.persons));
  }

  chgNums = (e) => {
    this.setState({ [e.target.name]: e.target.value, num: 7 });
  }

  btnAdd = () => {
    this.setState((prev) => ({ counter: prev.counter + 1 }));
    //code ...
    this.setState((prev) => ({ counter: prev.counter + 1 }));
    console.log('counter in btnadd', this.state.counter);

  }

  render() {
    console.log('counter  in render', this.state.counter);
    return (
      <div>CCMina
        <FCInputs sendP2P={this.getPfromI} />
        <FCPersonsList persons={this.state.persons} /> <br />

        NUM1:<input type="text" name="txtNum1" onChange={this.chgNums} />  {this.state.txtNum1}<br />
        NUM2: <input type="text" name="txtNum2" onChange={this.chgNums} /> {this.state.txtNum2}<br />
        <button onClick={this.btnAdd}>+</button> <br />
        counter= {this.state.counter}
      </div>
    )
  }
}

CCMina.propTypes = {
  name: PropTypes.string.isRequired,
  bonus: PropTypes.number.isRequired
};
