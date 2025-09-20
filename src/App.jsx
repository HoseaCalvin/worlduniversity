import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import CountrySearch from './pages/Search.jsx'
import CountryDetail from './pages/CountryDetail.jsx'
import CountryProvider from './context/CountryContext.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <CountryProvider>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/search' element={<CountrySearch/>}></Route>
            <Route path='/search/:name' element={<CountryDetail/>}></Route>
            <Route path='/about' element={<About/>}></Route>
          </Routes>
      </BrowserRouter>
    </CountryProvider>
  )
}

export default App
