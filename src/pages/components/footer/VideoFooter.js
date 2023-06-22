import React from 'react'
import './videoFooter.css'

function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@Paulo Ebac</h3>
                <p>Descrição do vídeo</p>
                <div className="videoFooter__music">
                    <p>Icone</p>
                    <p>Titulo da música</p>
                </div>
            </div>
            <img
                className="videoFooter__record"
                alt="Imagem de um vinil girando"
                src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
            />
        </div>
    )
}

export default VideoFooter
