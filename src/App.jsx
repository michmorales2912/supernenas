import { useState } from 'react'
import viteLogo from '/vite.svg'
import Header from './components/header' // Importa el componente Header
import Footer from './components/footer'
import Characters from './components/characters' // Importa el componente Characters


function App() {

  return (
    <>
      <div>
        <Header /> 
        <main>
          <h1 style={{color:'#fff'}}>Bienvenido a Pixel PowerPuff</h1>
           <p style={{color:'#fff'}}>Contenido principal de la página...</p>
        </main>
        <Characters />
        <Footer>
          
        </Footer>
      </div>
      
    </>
  )
}

export default App
