import React from 'react'
import Footer from './componentes/Footer/Footer'
import Header from './componentes/Header/Header'

const App = () => {

    const rotate= () =>{
        const emoji= document.querySelector('#emoji')
        console.log(emoji)
        emoji.classList.add('rot')
    }

    const recto = () =>{
        const emoji= document.querySelector('#emoji')
        emoji.classList.toggle('rot')
    }
    
    return (
        <div class='container' id='inicio'>
            <div class='navbar'>
                <a href='#proyectos' class='seccion'> 
                    <h5 class='innerlink'> Portafolio </h5> </a>
                <a href='#contacto' class='seccion'>
                    <h5 class='innerlink'> Contacto</h5>    </a>
            </div>
            <Header />

            <main class='main'>
                <div class='info'>
                    <h2 id='hello' onMouseOver={rotate} onMouseOut={recto}> Bienvenido <div id='emoji'> 👋 </div></h2>
                </div>
            </main>
        
            <Footer />
        </div>
    )
}

export default App
