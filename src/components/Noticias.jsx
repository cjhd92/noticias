import React from 'react';
import imagen_no from '../../src/descarga.png';
const Noticias = ({ noticia }) => {

    //extraer los datos
    const { urlToImage, url, title, description, source } = noticia;

    const imagen = (urlToImage)
        ?
        <div className='card-image'>
            <img src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
        </div>


        : <div className='card-image'>
            <img src={imagen_no} alt={title} />
            <span className="card-title">{source.name}</span>
           </div>

    return (
        <div className='col s12 m6 4'>
            <div className='card'>

                {imagen}


                <div className='card-content'>
                    <h3>{title}</h3>
                    <p><strong>{description}</strong></p>
                </div>

                <div className='card-action'>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn">Ver Noticia Completa</a>
                </div>
            </div>
        </div>
    )
}

export default Noticias