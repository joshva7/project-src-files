import './App.css';
import About from './Page/About';
import Contact from './Page/Contact';
import Home from './Page/Home';
import Singup from './Page/Singup'
import Header from './Compontens/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Page/Login';
import ErrorPage from './Page/ErrorPage';
import Footer from './Compontens/Footer';
import Accountpage from './Page/Accountpage';
import Cards from './Page/Cards';
function App() {
  
  return ( 
    <div>
      <BrowserRouter>
          <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Singup" element={<Singup />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path='/Login' element={<Login />}/>
          <Route path='/Account' element={<Accountpage />}/>
          <Route path='*' element={<ErrorPage />}/>
          <Route path='/Card' element={<Cards />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
