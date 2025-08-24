import { Outlet } from 'react-router'
import { NavBar } from './components/NavBar/NavBar'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
