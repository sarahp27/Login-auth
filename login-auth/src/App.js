import "./App.css";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import NavBar from './Components/NavBar'
import About from '../src/Components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      {/* <center>
      <Login />
      </center> */}
      {/* <Homepage/> */}
    </div>
    )
}

export default App;

