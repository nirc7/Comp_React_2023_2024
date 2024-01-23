import './App.css';
import CCCalc from './ClassComps/CCCalc';
import CCChild from './ClassComps/CCChild';

function App() {

  const getData = (data) => {
    console.log(data);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <CCCalc stam="hello stam" /> <br />
        <CCChild sendData={getData} />

      </div>
    </>
  )
}

export default App
