import React from 'react'
import linked from '../../assets/link.png.webp'
import github from '../../assets/github.svg'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <h3 id='follow-me' className='flash animated'> Follow me! </h3>
            <footer className='footer'>
                <a className='link' href='https://www.linkedin.com/in/maggioniduffy/' target='_blank'>
                    <img className='footerItem' src={linked} />
                </a>
                <a className='link' href='https://github.com/maggioniduffy' target='_blank'>
                    <img className='footerItem' src={github} />
                </a>
            </footer>
        </div>
    )
}

export default Footer
