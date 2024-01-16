import viteLogo from '/vite.svg';
import './App.css';
import EHeader from './Elements/EHeader';
import FCStudent from './FuncComps/FCStudent';
import CCCar from './ClassComps/CCCar';

function App() {
  return (
    <>
      <div>
        {EHeader}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Ruppin</h1>
      <div className="card">
        
        <CCCar model="BMW" speed={200} color="benny"/>
        <CCCar model="Susita" speed={150} color="avi"/>

        <FCStudent id={"1"} name="avi" grade={100}/>
        <FCStudent id={7} name="benny" grade={99}/>
        <FCStudent id={8} name="cahrlie" grade={50}/>
      </div>
    </>
  )
}

export default App
