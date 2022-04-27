import React, {useEffect} from 'react'
import profile from '../../assets/yo.webp'
import startup from '../../assets/desktop.svg'
import './header.css'

const Header = () => {

    useEffect(() =>{
        const prof = document.querySelector('#profile')
        prof.classList.add('girar')    
        setTimeout(() => {
            prof.classList.remove('girar')
        }, 2000)
    })

    return (
        <div className='header'>
            <header className='center'>
                <h1 id="name-title"> Faustino Maggioni Duffy </h1>
                <h2 id="profession"> Software Developer </h2>
            </header>
            <img src={profile} id='profile' />
        </div>
    )
}

export default Header
