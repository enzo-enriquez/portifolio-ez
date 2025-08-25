import Home from "./pages/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Menu from "./pages/NavBarMenu.js";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Natureza from "./pages/natureza/Natureza.js";
import Matematica from "./pages/matematica/Matematica.js";
import Linguagens from "./pages/Linguagens/Linguagens.js";
import Humanas from "./pages/Humanas/Humanas.js";
import BancoDados from "./pages/BancoDados/BancoDados.js";
import DesenvolvimentoSitemas from "./pages/DesenvolvimentoSistemas/DesenvolvimentoSitemas.js";
import ModelagemSistemas from "./pages/Modelagem/ModelagemSistemas.js";


function App() {
  return (
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/natureza" element={<Natureza />} />
          <Route path="/matematica" element={<Matematica />} />
          <Route path="/linguagens" element={<Linguagens />} />
          <Route path="/humanas" element={<Humanas />} />
          <Route path="/Banco-dados" element={<BancoDados/>} />
          <Route path="/Desenvolvimento-Sistemas" element={< DesenvolvimentoSitemas/>} />
          <Route path="/modelagem-sistemas" element={< ModelagemSistemas/>} />
        </Routes>
      </Router>
  );
}


export default App;