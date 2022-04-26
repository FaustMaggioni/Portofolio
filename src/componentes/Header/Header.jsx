import React, {useEffect} from 'react'
import profile from '../../assets/yo.webp'
import './styles.css'
import startup from '../../assets/desktop.svg'
const Header = () => {

    useEffect(() =>{
        const prof = document.querySelector('#profile')
        prof.classList.add('girar')    
        setTimeout(() => {
            prof.classList.remove('girar')
        }, 2000)
    })

    return (
        <div>
            <header className='center'>
                <h1> Faustino Maggioni Duffy </h1>
                <h2 className='rol'> Software Developer <img class='startup' src={startup} /> </h2>
            </header>
            <img src={profile} id='profile' />
        </div>
    )
}

export default Header
