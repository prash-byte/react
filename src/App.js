import './App.css';
import Navbar from './components/Navbar';
import Home1 from './pages/Home';
import About1 from './pages/About';
import Contact1 from './pages/Contact';
import { BrowserRouter,  Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar />
      <Routes>

        <Route path=" " element={<Home1/>}/>
        <Route path="/About" element={<About1/>}/>
        <Route path="/Contact" element={<Contact1/>}/>

      </Routes>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
