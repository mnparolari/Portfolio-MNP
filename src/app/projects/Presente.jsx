'use client'
import { useState } from 'react'
import StyleProyects from './projects.module.css'
import Image from 'next/image'
import Github from '../../../public/img/github.jpg'
import PresenteHome from '../../../public/img/presente.png'
import Internet from '../../../public/img/internet.png'
import ReactCardFlip from 'react-card-flip'

export default function Presente() {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className={StyleProyects.card} onClick={handleClick} >
                <Image className={StyleProyects.img} src={PresenteHome} alt='PresenteHomePage'/>
            </div>
            <div className={StyleProyects.card} onClick={handleClick} >
                <div className="card-body">
                    <h6 className="card-title" style={{ color: "#fff", fontWeight: "normal", fontSize: "1rem" }}>Radio Presente, La voz del Ex Olimpo</h6>
                    <p className="card-text" style={{ color: "#ffffff8c", fontSize: "0.8rem" }}>Website for community, alternative and popular radio.
                        100% HTML site, CSS-SASS, Photoshop. <br /><br /></p>
                    <p className="card-text" style={{ color: "#42F5A3", fontSize: "0.8rem", textAlign: "center" }}><small >Technologies and libraries: <br />  <span style={{ color: "#fff" }}> Node.js - ^18.13.0 <br />
                        Bootstrap - v5.0.2 <br />
                        SASS - ^1.63.3 <br />
                        HTML5 <br />
                        CSS3 <br />
                        Animate.css <br /></span></small></p>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <a style={{ width: "65px", height: "45px", backgroundColor: "#000" }} type='button' href="https://mnparolari.github.io/radiopresente/" target="_blank">
                            <Image className={StyleProyects.btn} style={{ width: "65px", height: "45px" }} src={Internet} alt="WWW" />
                        </a>
                        <a style={{ width: "70px", height: "70px", backgroundColor: "#000" }} type='button' href="https://github.com/mnparolari/radiopresente" target="_blank">
                            <Image className={StyleProyects.btn} style={{ width: "70px", height: "70px" }} src={Github} alt="Github" />
                        </a>
                    </div>
                </div>
            </div>
        </ReactCardFlip>
    )
}