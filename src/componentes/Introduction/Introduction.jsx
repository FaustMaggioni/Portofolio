import React from 'react'
import './introduction.css'

const Introduction = () => {
    const rotate= () =>{
        const emoji= document.querySelector('#emoji')
        console.log(emoji)
        emoji.classList.add('rot')
    }

    const recto = () =>{
        const emoji= document.querySelector('#emoji')
        emoji.classList.toggle('rot')
    }
  return (
      <div className='info'>
        <div className='inner-info'>
          <h2 id='hello' onMouseOver={rotate} onMouseOut={recto}> Hi! I'm Faustino {' '} <div id='emoji'>  👋 </div></h2>
          <p id='about'>
            Energic <br/>
            Creative <br/>
            Proactive
          </p>
        </div>
      </div>
  )
}

export default Introduction