'use client'
import { useState } from 'react';
import StyleProyectos from './proyectos.module.css';
import Image from 'next/image';
import PresentePage from '../../../public/img/presente.png';
import Github from '../../../public/img/github.jpg';
import Internet from '../../../public/img/internet.png';
import ReactCardFlip from 'react-card-flip';

export default function Presente() {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="card mb-3" onClick={handleClick} style={{ width: "429px", borderRadius: "1%", backgroundColor: "#000", cursor: "pointer", marginLeft: "10px", marginRight: "10px" }}>
                <Image src={PresentePage} style={{ width: "430px", height: "65%", borderRadius: "1%" }} />
            </div>
            <div className="card mb-3" onClick={handleClick} style={{ width: "429px", borderRadius: "1%", backgroundColor: "#000", cursor: "pointer", marginLeft: "10px", marginRight: "10px" }}>
                <div className="card-body">
                    <h6 className="card-title" style={{ color: "#fff", fontWeight: "normal", fontSize: "1rem" }}>Radio Presente, La voz del Ex Olimpo</h6>
                    <p className="card-text" style={{ color: "#ffffff8c", fontSize: "0.8rem" }}>Sitio web para radio comunitaria, alternativa y popular.
                        Sitio 100% HTML, CSS-SASS, Photoshop. <br /><br /></p>
                    <p className="card-text" style={{ color: "#42F5A3", fontSize: "0.8rem" }}><small >Tecnologías y librerías: <br />  <span style={{ color: "#fff" }}> Node.js - ^18.13.0 <br />
                        Bootstrap - v5.0.2 <br />
                        SASS - ^1.63.3 <br />
                        HTML5 <br />
                        CSS3 <br />
                        Animate.css <br /></span></small></p>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <a style={{ width: "65px", height: "45px", backgroundColor: "#000" }} type='button' href="https://mnparolari.github.io/radiopresente/" target="_blank">
                            <Image className={StyleProyectos.btn} style={{ width: "65px", height: "45px" }} src={Internet} alt="WWW" />
                        </a>
                        <a style={{ width: "70px", height: "70px", backgroundColor: "#000" }} type='button' href="https://github.com/mnparolari/radiopresente" target="_blank">
                            <Image className={StyleProyectos.btn} style={{ width: "70px", height: "70px" }} src={Github} alt="Github" />
                        </a>
                    </div>
                </div>
            </div>
        </ReactCardFlip>
    )
}