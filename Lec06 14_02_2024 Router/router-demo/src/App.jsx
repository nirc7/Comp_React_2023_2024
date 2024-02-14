import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './Home';
import About from './About';
import MenuComponent from './MenuComponent';
import User from './User';

function App() {

  return (
    <>
      <div>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/menu/77">Menu</Link>
      </div>

      <div className="card">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu/:userId" element={<MenuComponent />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </>
  )
}

export default App
