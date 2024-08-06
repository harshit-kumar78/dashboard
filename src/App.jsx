import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Wrapper } from './components/wrapper/Wrapper';


function App() {
  return (

    <Routes>
      <Route path="/" element={<Wrapper />}></Route>
    </Routes>
  )
}

export default App
