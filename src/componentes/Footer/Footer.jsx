import React from 'react'
import linked from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import copy from '../../assets/copia.svg'
import gmail from '../../assets/gmail.png'
import './styles.css'

const Footer = () => {
    return (
        <footer class='footer'>
            <div class='izq'>
                <p class='mas'> </p>
                <a class='link' href='https://www.linkedin.com/in/faustino-maggioni-duffy-b8b3991ab/' target='_blank'>
                    <img class='footerItem' src={linked} />
                </a>
                <a class='link' href='https://github.com/FaustMaggioni?tab=repositories' target='_blank'>
                    <img class='footerItem' src={github} />
                </a>
            </div>
            <div class='derecha'>
                <a class='mail' target='_blank' href='https://mail.google.com/mail/u/0/'>
                    <img class='footerItem' id='google' src={gmail} />
                </a>
                <p class='mail'> faustino.maggioni@est.fi.uncoma.edu.ar</p>
            </div>
        </footer>
    )
}

export default Footer
