import React from 'react'
import './styles.css'
import Proyecto from './Proyecto/Proyecto'
import design from '../../assets/design.png'

const Proyectos = () => {
    const proyectos= [{
        nombre: 'E-Commerce',
        src: 'https://lucid-bell-990b19.netlify.app/',
        img:'https://i.ibb.co/B3MZ4XC/image.png',
        descr: 'Ecommerce funcional utilizando React js, Stripe, ecommerce.js y Material-UI.Realizado en un curso con JavascriptMastery.'
    },
    {
        nombre: 'Club Admin',
        src: 'https://dreamy-kowalevski-0a3bdd.netlify.app/',
        img:'https://i.ibb.co/P4GzFCN/club.png',
        descr: 'Página web para el básquet del Club Atlético Pacífico de Neuquén. EN PROGRESO.'
    },
    {
        nombre: 'Weather App',
        src: 'https://festive-stonebraker-a10b33.netlify.app/',
        img: 'https://i.ibb.co/SmVF9Xb/logo.png',
        descr: 'Progressive Web App para consultar el clima por ciudades. Usando weather api, service workers y react js.'
    }]
    return (
        <div className='cont'>
            <div className='uno'>
                <h2 className='title'> Mis proyectos ☕ </h2>
            </div>
            <div className='proyectos'>
                {proyectos.map((p,i) =>{
                    return(
                        <Proyecto nombre={p.nombre} src={p.src} img={p.img} i={i} descripcion={p.descr}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Proyectos
