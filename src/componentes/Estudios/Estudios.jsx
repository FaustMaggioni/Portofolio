import React from 'react'
import './styles.css'
import ts from '../../assets/Certificados/CertificadoTS.jpg'
import js from '../../assets/Certificados/js.png'
import ml from '../../assets/Certificados/ml.png'
import py from '../../assets/Certificados/py.jpg'
import web from '../../assets/Certificados/web.png'
import reactjs from '../../assets/Certificados/REACT.jpg'
import frontend from '../../assets/Certificados/frontend.png'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Estudios = () => {
    return (
        <div class='content'>
            <h2 class='estudio'> Estudios </h2>
            <div class='carrera'>
                <h3 class='ache'>
                    Licenciatura en Ciencias de la Computación, <br /> <b>Universidad nacional del Comahue </b>
                </h3>
            </div>
            <hr />
            <h2 class='estudio'> Capacitaciones </h2>
            <hr />
            <Carousel autoPlay={true} centerMode={true} centerSlidePercentage={40}>
                <div class='b'>
                    <img class='certif' src={py} />
                    <p> Python </p>
                </div>
                <div class='b'>
                    <img class='certif' src={ml} />
                    <p> Introducción al Machine Learning </p>
                </div>
                <div class='b'>
                    <img class='certif' src={js} />
                    <p> Javascript </p>
                </div>
                <div class='b'>
                    <img class='certif' src={ts} />
                    <p> Typescript </p>
                </div>
                <div class='b'>
                    <img class='certif' src={web} />
                    <p> Responsive Web </p>
                </div>
                <div class='b'>
                    <img class='certif' src={reactjs} />
                    <p> React JS </p>
                </div>
                <div class='b'>
                    <img class='certif' src={frontend} />
                    <p> Librerías Frontend </p>
                </div>
            </Carousel>
        </div>
    )
}

export default Estudios
