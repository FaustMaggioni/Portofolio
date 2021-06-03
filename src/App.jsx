import React from 'react'
import Footer from './componentes/Footer/Footer'
import Header from './componentes/Header/Header'
import Stack from './componentes/Stack/Stack'
import Estudios from './componentes/Estudios/Estudios'
import Proyectos from './componentes/Proyectos/Proyectos'

const App = () => {
    return (
        <div class='container'>
            <Header />
            <main class='main'>
                <h2 id='hola'> Hola! Soy Faustino</h2>
                <div class='info'>
                    <p>
                        Apasionado del frontend y de capacitarme y nunca dejar de aprender. Desde que descubrí el desarrollo web siempre traté de no dejar de mejorar mis habilidades tanto como en el lado del cliente, como del servidor.
                    </p>
                </div>
                <Proyectos />
                <Estudios />
                <Stack />
            </main>
            <Footer />
        </div>
    )
}

export default App
