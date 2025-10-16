import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header' // Importa el componente Header
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header /> 
        <main>
          <h1 style={{color:'#fff'}}>Bienvenido a Pixel PowerPuff</h1>
           <p style={{color:'#fff'}}>Contenido principal de la página...</p>
        </main>
        <Footer>
          
        </Footer>
      </div>
      
    </>
  )
}

export default App
