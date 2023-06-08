
import './App.css'

import { BrowserRouter, Link, Route, Routes, } from 'react-router-dom'

import Signup from './components/signup'
import Login from './components/login'
import Profile from './components/profile'
import Path from './components/Path'
function App() {


  return (
    <>
      <BrowserRouter>
        <h1>login to start your to do</h1>
        <Link to={'/path'}>
          <button>get started</button>
        </Link>
        <Routes>
          <Route path='/path' element={<Path />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
