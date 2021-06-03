import React from 'react'
import profile from '../../assets/profile.jpg'
import './styles.css'

const Header = () => {
    return (
        <div>
            <header class='center'>
                <h1 >Faustino Maggioni Duffy </h1>
                <h2> Frontend Developer </h2>
            </header>
            <img src={profile} id='profile' />
        </div>
    )
}

export default Header
