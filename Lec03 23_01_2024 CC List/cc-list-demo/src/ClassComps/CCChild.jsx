import { Component } from "react";


export default class CCChild extends Component {
  constructor(props) {
    super(props);

    this.list = ["avi ", "benny", "charlie"];

    this.state = {
      persons: [{ id: 1, name: 'avi' }, { id: 2, name: 'benny' }]
    };
  }

  componentDidMount() {
    console.log('did mount');
  }

  componentWillUnmount() {
    console.log('unmount');
  }

  AddPerson = () => {
    let newPReonsList = [...this.state.persons, {id:3, name:'charlie'}];
    console.log(newPReonsList);
    this.setState({persons : newPReonsList});
  }

  render() {

    this.listAsLi = this.list.map((name, index) =>
      <a href="#" className="list-group-item" key={index}>{index + ": hello " + name + "!"}</a>);

    let personsStr = this.state.persons.map((per) =>
      <a href="#" className="list-group-item" key={per.id}>id={per.id} -- name={per.name}</a>);


    console.log('render in cchld');
    return (
      <>
        <p style={{ fontWeight: "bold", margin: 10 }}>persons list:</p>
        <div className="list-group" style={{ width: "70%" }}>{personsStr}</div>

        <button onClick={this.AddPerson}>Add Person</button>

        <p style={{ fontWeight: "bold", margin: 10 }}>names list:</p>
        <div className="list-group" style={{ width: "70%" }}>{this.listAsLi}</div>

        <button onClick={() => { this.props.sendData(7) }} >send2Parent</button>
      </>
    );
  }
}