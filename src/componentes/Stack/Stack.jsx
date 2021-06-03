import React from 'react'
import html from '../../assets/html5.png'
import reactjs from '../../assets/structure.png'
import js from '../../assets/javascript.png'
import css from '../../assets/css-3.png'
import './styles.css'


const Stack = () => {
    return (
        <div>
            <h2 id='paraEsteSitio'> Para este sitio utilicé </h2>
            <div class='stack'>
                <img class='logo' src={html} />
                <img class='logo' src={reactjs} />
                <img class='logo' src={js} />
                <img class='logo' src={css} />
            </div>
        </div>
    )
}

export default Stack
