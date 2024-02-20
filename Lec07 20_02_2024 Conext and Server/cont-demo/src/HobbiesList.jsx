import React from 'react'
import { useContext } from 'react'
import { HobbyContext } from './HobbyContextProvider';

export default function HobbiesList(props) {
  const { hobbies, removeHobby } = useContext(HobbyContext);

  let hobbiesStr = hobbies.map(hob =>
    <div key={hob.id}> id={hob.id} -- name={hob.name} -- times={hob.times} 
      <span onClick={() => removeHobby(hob.id)}> X </span> </div>);

  return (
    <div>HobbiesList <br />
      {hobbiesStr}
    </div>
  )
}
