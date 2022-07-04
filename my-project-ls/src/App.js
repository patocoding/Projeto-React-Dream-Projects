import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home'
import Contato from './components/Pages/Contato'
import Sobre from './components/Pages/Sobre'
import NewProject from './components/Pages/NewProject'
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projetos from './components/Pages/Projetos';

function App() {
  return (
    <div className="App">
        <Router>
         <Navbar/>
          <Container customClass='min-height'>
            <Routes>
              <Route  path="/" element={<Home/>}></Route>
              <Route  path="/contato" element={<Contato/>}></Route>
              <Route  path="/projetos" element={<Projetos/>}></Route>
              <Route  path="/sobre" element={<Sobre />}></Route>
              <Route  path="/newproject" element={<NewProject />}></Route>
            </Routes>
          </Container>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
