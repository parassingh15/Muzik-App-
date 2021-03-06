import './App.css';
import Login from './pages/Login/Login'
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="search" element={<Search/>} />
      </Routes>
      </BrowserRouter>
      
      
      
    </div>
  );
}
export default App;
