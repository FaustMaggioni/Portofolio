import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <div className='experience'>
      <h2> Experience </h2>
      <h3> I've worked as a developer for Patagonian Tech, doing... </h3>
      <div className='jobs'>
        <h5> QA Automation Developer </h5>
        <div className='job-stack'> 
          <img alt='playwright'></img>
          <img alt='cucumber'></img>
          <img alt='typescript'></img>
        </div>
        <h5> Backend Developer </h5>
        <div className='job-stack'> 
          <img alt='nestjs' src='https://docs.nestjs.com/assets/logo-small.svg'/>
          <img alt='typescript'></img>
        </div>
      </div>
    </div>
  )
}

export default Experience