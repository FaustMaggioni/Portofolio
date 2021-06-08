import React, {useEffect} from 'react'
import Footer from './componentes/Footer/Footer'
import Header from './componentes/Header/Header'
import Stack from './componentes/Stack/Stack'
import Estudios from './componentes/Estudios/Estudios'
import Proyectos from './componentes/Proyectos/Proyectos'
import cv from './assets/cv.pdf'
import cvlogo from './assets/cv.svg'
import flecha from './assets/right.svg'
import top from './assets/top.png'
import link from './assets/pdf.webp'
import mail from './assets/Email_SVG.svg'
import saludo from './assets/chau.svg'


const App = () => {

    const [mostrarForm,setForm] = React.useState(true)


    const onSubmit = (e) =>{
        e.preventDefault();
        setForm(false)
        setTimeout(() => setForm(true), 5000)
    }

    const rotate= () =>{
        const emoji= document.querySelector('#emoji')
        console.log(emoji)
        emoji.classList.add('rot')
    }

    const recto = () =>{
        const emoji= document.querySelector('#emoji')
        console.log(emoji)
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
            <hr/>
            <main class='main'>
                <div class='info'>
                <h2 id='hola' onMouseOver={rotate} onMouseOut={recto}> Bienvenido <div id='emoji'> 👋 </div></h2>
                </div>
                <div class='cv'> 
                <h4 class='parr' >
                    Soy Faustino, desde que descubrí el desarrollo me he convertido en un entusiasta. Mi meta es poder aprender lo máximo que pueda, dar un buen servicio y producto a mis clientes, y simpre disfrutar del proceso!
                 </h4>
                <h3 class='txt'> Actualmente buscando trabajo como desarrollador! </h3>
                <a className='linkcv' href={cv} target='_blank'>
                <img className='cvimg' src={cvlogo}/>
                </a>
                <a href={cv} target='_blank'>
                <h4 className='btncv'> RESUME / CV </h4>
                </a>
                </div>
                <div id='proyectos'>
                <Proyectos  />
                </div>
                <Estudios />
                <div id='contacto'  className='formContainer'>
                    { mostrarForm? (
                    <div className='contactar'>
                    <div className='formulario'>
                    <h4 className='contact'> Contactame! </h4>
                    <form className='form' onSubmit={onSubmit} >
                        <input className='input' type='text' name='from_name'  placeholder='Tu nombre' />
                        <input className='input' type='text' name='reply_to' placeholder='Tu email'  />
                        <input  className='input' type='text' name='message'  placeholder='Tu mensaje' />
                        <button id='submit' type='submit'> SUBMIT </button>
                    </form>
                    </div>
                    <img className='mail' src={mail}/>
                    </div>) :
                     (  <div >
                        <h3 className='grax'> Gracias! </h3>
                        <img id='chau' src={saludo}/>
                        </div>
                    )}
                </div>
                <a href='#inicio' > <img className='top' src={top}/> </a>
            </main>
            
            <Stack />
            <Footer />
        </div>
    )
}

export default App
