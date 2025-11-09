import Header from './components/Header/Header.jsx'
// import './zero.css'
// import './main.css'
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes.jsx';
import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react';


function App() {
  const [pressedRoute, setPressedRoute] = useState('');

  return (
    <BrowserRouter>
      <Header setPressedRoute={setPressedRoute} />
      <AnimatedRoutes pressedRoute={pressedRoute} />
    </BrowserRouter>
  )
}

export default App
