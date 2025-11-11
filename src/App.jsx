import Header from './components/Header/Header.jsx'
// import './zero.css'
// import './main.css'
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes.jsx';
import { BrowserRouter } from 'react-router-dom'
import { useEffect, useState } from 'react';
import ScrollToTop from './modules/ScrollToTop.jsx';


function App() {
  const [pressedRoute, setPressedRoute] = useState('');

  return (
    <BrowserRouter basename='/rice-linux-site/'>
      <ScrollToTop />
      <Header setPressedRoute={setPressedRoute} />
      <AnimatedRoutes pressedRoute={pressedRoute} />
    </BrowserRouter>
  )
}

export default App
