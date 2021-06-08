import React, {useState} from 'react'
import './styles.css'
import repo from '../../../assets/code.png'

const Proyecto = ({nombre,descripcion,img,src,i}) => {
    const [hover,setHover] = useState(false)
    
    const show = () =>{
        setHover(true)
    }

    const esconder = () =>{
        setHover(false)
    }

    {/*return (
        <div className='card' onMouseOver={show} onMouseLeave={esconder}>
            {!hover ? 
                (
                <img className='foto' src={img} />) : (
                <div className='actions'>
                    <h4 className='nombre'> {nombre} </h4>
                    <p className='desc'>{descripcion}</p>
                    <div className='botones'>
                    <a href='www.google.com'>
                        <img className='repo' src={repo} />
                    </a>
                    <a className='probar' target='_blank'href={src}>
                        <p className='prueba'> PROBAR </p>
                    </a>
                    </div>
                </div>
                    )
                    }
        </div>
                )*/}
    if(i%2==0){
    return(
        <div className='card'style={{marginRight: '20rem'}} >
            <img className='foto' src={img} />
            <div className='actions'>
                    <h4 className='nombre'> {nombre} </h4>
                    <p className='desc'>{descripcion}</p>
                    <div className='botones'>
                    <a href='www.google.com'>
                        <img className='repo' src={repo} />
                    </a>
                    <a className='probar' target='_blank'href={src}>
                        <p className='prueba'> PROBAR </p>
                    </a>
                    </div>
                </div>
        </div>
    )}

    return(
        <div className='card' style={{marginLeft: '20rem'}}>
            <div className='actions'>
                    <h4 className='nombre'> {nombre} </h4>
                    <p className='desc'>{descripcion}</p>
                    <div className='botones'>
                    <a href='www.google.com'>
                        <img className='repo' src={repo} />
                    </a>
                    <a className='probar' target='_blank'href={src}>
                        <p className='prueba'> PROBAR </p>
                    </a>
                    </div>
            </div>
            <img className='foto' src={img} />
        </div>
    )

}

export default Proyecto
