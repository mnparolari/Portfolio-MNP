'use client'
import { useState } from 'react'
import StyleProyects from './projects.module.css'
import Image from 'next/image'
import LikeAtHomePage from '../../../public/img/likeathome.png'
import Github from '../../../public/img/github.jpg'
import Internet from '../../../public/img/internet.png'
import ReactCardFlip from 'react-card-flip'

export default function LikeAtHome() {

    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    };


    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className={StyleProyects.card} onClick={handleClick}>
                <Image className={StyleProyects.img} src={LikeAtHomePage} alt='LikeAtHomePage'/>
            </div>
            <div className={StyleProyects.card} onClick={handleClick}>
                <div className="card-body">
                    <h6 className="card-title" style={{ color: "#fff", fontWeight: "normal", fontSize: "1rem" }}>LikEat Home</h6>
                    <p className="card-text" style={{ color: "#ffffff8c", fontSize: "0.8rem" }}>Recipe search engine by ingredients.
                        Site 100% developed with Vanilla Javascript, HTML, CSS-SASS. <br /><br /></p>
                    <p className="card-text" style={{ color: "#42F5A3", fontSize: "0.8rem", textAlign: "center" }}><small >Technologies and libraries: <br />  <span style={{ color: "#fff" }}> Node.js - ^18.13.0 <br />
                        API - Spoonacular API (https://spoonacular.com/)<br />
                        Bootstrap - v5.0.2 <br />
                        SASS - ^1.63.3 <br />
                        Animate.css <br />
                        Luxon - ^1.0.0-rc.2 <br />
                        Toastify - ^9.1.3 <br />
                        SweetAlert2 - ^11.7.5 </span></small></p>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <a style={{ width: "65px", height: "45px", backgroundColor: "#000" }} type='button' href="https://lik-eat-home.vercel.app/" target="_blank">
                            <Image className={StyleProyects.btn} style={{ width: "65px", height: "45px" }} src={Internet} alt="WWW" />
                        </a>
                        <a style={{ width: "70px", height: "70px", backgroundColor: "#000" }} type='button' href="https://github.com/mnparolari/likEatHome" target="_blank">
                            <Image className={StyleProyects.btn} style={{ width: "70px", height: "70px" }} src={Github} alt="Github" />
                        </a>
                    </div>
                </div>
            </div>
        </ReactCardFlip>
    )
}