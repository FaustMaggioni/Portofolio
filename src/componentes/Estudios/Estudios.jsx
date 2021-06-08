import React, { useState, useEffect } from 'react'
import './styles.css'
import ts from '../../assets/Certificados/CertificadoTS.jpg'
import js from '../../assets/Certificados/js.png'
import ml from '../../assets/Certificados/ml.png'
import py from '../../assets/Certificados/py.jpg'
import web from '../../assets/Certificados/web.png'
import reactjs from '../../assets/Certificados/REACT.jpg'
import frontend from '../../assets/Certificados/frontend.png'
import Carusel from './Carusel.jsx'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import educ from '../../assets/ed.png'


const Estudios = () => {
    const imagenes = [
        { src: ts, txt: 'Typescript' },
        { src: js, txt: 'Javascript' },
        { src: ml, txt: 'Introducción a Machine Learning' },
        { src: reactjs, txt: 'React js' },
        { src: web, txt: 'Responsive Web Design' },
        { src: py, txt: 'Python' },
        { src: frontend, txt: 'Librerías Frontend' },
    ]
    const [orientacion, setOrientacion] = useState()
    const [porcentaje, setPorcentaje] = useState(30)

    useEffect(() => {
        cambiarOrientacion()
    })
    const cambiarOrientacion = () => {
        console.log(window.innerWidth)
        if (window.innerWidth < 950) {
            setPorcentaje(100)
        } else {
            if (window.innerWidth > 950) {
                setPorcentaje(30)
            }
        }
    }
    window.addEventListener('resize', cambiarOrientacion)

    return (
        <div className='content'>
            <div className='principal'>
            <img className='libros' src={educ} />
            <h2 className='estudio'> Estudios </h2>
            </div>
            <div className='carrera'>
                <h3 className='ache'>
                    Licenciatura en Ciencias de la Computación, <br /> <b>Universidad nacional del Comahue </b>
                </h3>
            </div>
            <hr />
            <h2 className='estudio'> Capacitaciones </h2>
            <Carusel imagenes={imagenes}  porcentaje={porcentaje} />
        </div>
    )
}

export default Estudios
