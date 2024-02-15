import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Details from './pages/Details'





function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/details' element={<Details></Details>}></Route>
        <Route path='/*' element={<Navigate to={'/'}></Navigate>}></Route>
      </Routes>
    </>
  )
}

export default App
