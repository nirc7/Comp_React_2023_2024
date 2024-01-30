import React from 'react'

export default function FCInputs(props) {

  let myId;
  let myName;

  const btnAddPerson = () => {
    let person = { id: myId, name: myName };
    props.sendP2P(person);
  }


  return (
    <div>
      ID:<input type="text" onChange={(e) => myId = e.target.value} /> <br />
      NAME: <input type="text" onChange={(e) => myName = e.target.value} /> <br />
      <button onClick={btnAddPerson}>Add Person</button>
    </div>
  )
}
