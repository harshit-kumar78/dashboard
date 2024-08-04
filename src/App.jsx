import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidenav from './components/sidenav/Sidenav'
import Navbar from './components/navbar/navbar'
import Dashboard from './pages/dashboard/Dashboard';
import Main from './components/main/Main'
function App() {
  return (
    <>
      <div className="app">
        <div className="main">
          <Sidenav />
          <Main />
        </div>
      </div>
    </>
  )
}

export default App
