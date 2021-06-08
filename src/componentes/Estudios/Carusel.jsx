import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import './styles.css'
import Popover from '@material-ui/core/Popover';

const Carusel = ({ imagenes, porcentaje, orientacion }) => {


    return (
        <Carousel class='carousel' axis={orientacion} autoPlay={true} stopOnHover centerMode={true} autoPlay centerSlidePercentage={porcentaje}>
            {imagenes.map((img) => {
                return (
                    <div class='b'>
                        <img src={img.src}  class='certif'/>
                        <p class='indice'> {img.txt} </p>
                       </div>
                )
            })}
        </Carousel>
    )
}

export default Carusel
