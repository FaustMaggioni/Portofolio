import React from 'react'
import { Experience, Footer, Header, Introduction } from './componentes'
import './App.css'

const App = () => {
    
    return (
        <div className='content'>
            <Header />
            <Introduction />
            <Experience />
            <Footer />
        </div>
    )
}

export default App
