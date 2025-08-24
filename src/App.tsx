import './App.css'
import { Outlet } from 'react-router'
import { NavBar } from './components/NavBar/NavBar'

function App() {
  return (
    <>
      <NavBar />

      <Outlet />
    </>
  )
}

export default App
