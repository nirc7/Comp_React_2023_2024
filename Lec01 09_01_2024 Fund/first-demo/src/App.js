import logo from './logo.svg';
import './App.css';
import EHeader from './Elemtns/Eheader';
import FCStudent from './Functional Comps/FCStudent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {EHeader}
        <img src={logo} className="App-logo" alt="logo" />
        <FCStudent id="7" name="avi" grade={100}/>
        <FCStudent id="8" name="benny" grade={99}/>
      </header>
    </div>
  );
}

export default App;
