import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';
import Empresa from './pages/Empresa/Empresa';

function App() {
  return (
    <div>
      <Router>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/productos" element={<Products/>}></Route>
      <Route path="/servicios" element={<Services/>}></Route>
      <Route path="/empresa" element={<Empresa/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
