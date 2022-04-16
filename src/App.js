import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import About from './components/Pages/About/About';
import Blogs from './components/Pages/Blogs/Blogs';
import Home from './components/Pages/Home/Home';
import NotFound from './components/Pages/NotFound/NotFound';
import Services from './components/Pages/Services/Services';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      
    </div>
  );
}

export default App;
