import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Todo from './pages/Todo';
import './App.css';

function App() {
  return (
    <div className="container App">
      <Router>
        <div className="Margin">
          <NavLink className="Margin" exact="true" activeclassname="active" to="/">Home</NavLink>
          <NavLink className="Margin" activeclassname="active" to="/about">About</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
