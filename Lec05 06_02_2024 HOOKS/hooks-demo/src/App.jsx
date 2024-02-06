import { useState, useEffect } from 'react';

import './App.css';

import Button from '@mui/material/Button';
import PersonAdd from '@mui/icons-material/PersonAdd';
import TextField from '@mui/material/TextField';

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log('didmount');

    return () => {
      console.log('unmount');
    }
  }, [])

  useEffect(() => {
    console.log('count', count);
  }, [count])

  console.log('in function');

  return (
    <>
      <div className="card">
        <button onClick={() => setCount(prev => prev + 1)}>
          count is {count}
        </button> <br /> <br />

        <TextField id="standard-basic" label="Name"
          margin="normal" variant="standard"  color="secondary"/> <br /><br />
        <Button variant="outlined" color="secondary" endIcon={<PersonAdd />}>
          Add Person
        </Button>
      </div>
    </>
  )
}

export default App
