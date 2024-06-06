import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Blog" element={<Blog/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
