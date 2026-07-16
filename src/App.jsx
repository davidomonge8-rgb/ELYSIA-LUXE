import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/home.jsx';
import Rooms from './pages/rooms.jsx';
import Amenities from './pages/amenities.jsx';
import ContactUs from './pages/contactUs.jsx';
import Book from './pages/booknow.jsx'

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path='/amenities' element={<Amenities/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/book' element={<Book />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
