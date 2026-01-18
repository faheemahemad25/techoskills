// import './App.css'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'


function App() {

  return (
    <>

      <Routes>
        <Route element={<Navbar />}>
          <Route path='/' element={<Home />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
