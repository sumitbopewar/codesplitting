import React, { Suspense } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Home from './Components/Home';
// import About from './Components/About';
// import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

const Home = React.lazy(()=> import('./Components/Home'))
const About = React.lazy(()=> import('./Components/About'))
const Contact = React.lazy(()=> import('./Components/Contact'))

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App