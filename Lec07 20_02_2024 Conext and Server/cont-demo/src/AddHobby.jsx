import { useState } from 'react';
import { useContext } from 'react'
import { HobbyContext } from './HobbyContextProvider'

export default function AddHobby(props) {
  const { addHobby } = useContext(HobbyContext);

  const [name, setName] = useState(null);
  const [times, setTimes] = useState(0);

  return (
    <div>
      <br /> <br />
      name: <input type="text" onChange={(e) => setName(e.target.value)} /> <br />
      times: <input type="text" onChange={(e) => setTimes(e.target.value)} /> <br /> <br />
      <button onClick={() => addHobby(name, times)}   >+</button>
    </div>
  )
}
