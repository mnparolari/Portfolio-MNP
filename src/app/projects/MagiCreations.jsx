'use client'
import { useState } from 'react'
import StyleProyects from './projects.module.css'
import Image from 'next/image'
import MagiPage from '../../../public/img/magi.png'
import Github from '../../../public/img/github.jpg'
import Internet from '../../../public/img/internet.png'
import ReactCardFlip from 'react-card-flip'


export default function MagiCreations() {

    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    };


    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className={StyleProyects.card} onClick={handleClick}>
                <Image className={StyleProyects.img} src={MagiPage} alt='MagiCreationsPage' />
            </div>
            <div className={StyleProyects.card} onClick={handleClick}>
                <div className="card-body">
                    <h6 className="card-title" style={{ color: "#fff", fontWeight: "normal", fontSize: "1rem" }}>Magi Creations</h6>
                    <p className="card-text" style={{ color: "#ffffff8c", fontSize: "0.7rem" }}>
                        Static e-commerce dedicated purely and exclusively to the sale of sublimated and printed products from the company Magi Creaciones, located in Mendoza-Argentina. <br /><br /></p>
                    <p style={{ color: "#ffffff8c", fontSize: "0.6rem" }}>[Project carried out by students received from Coderhouse from the "Royal Project" initiative, obtained as a benefit from the TOP10 awarded by the institution.]</p>
                    <div>
                        <p className="card-text" style={{ color: "#42F5A3", fontSize: "0.8rem", textAlign: "center" }}><small >Technologies and libraries: <br /></small></p>
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <p style={{ color: "#42F5A3", fontSize: "0.8rem" }}>
                                <small>
                                    <span style={{ color: "#fff" }}>
                                        React.js - ^18.2.0 <br />
                                        Node.js - ^18.13.0 <br />
                                        NPM - ^8.19.3 <br />
                                        Firebase - ^9.22.0 <br />
                                        Bootstrap - ^5.2.3
                                    </span>
                                </small>
                            </p>
                            <p style={{ color: "#42F5A3", fontSize: "0.8rem" }}>
                                <small>
                                    <span style={{ color: "#fff" }}>
                                        SweetAlert2 - ^11.7.5 <br />
                                        Formpree <br />
                                        Vercel <br />
                                        Figma
                                    </span>
                                </small>
                            </p>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <a style={{ width: "65px", height: "45px", backgroundColor: "#000" }} type='button' href="https://magi-impresiones.vercel.app/" target="_blank">
                            <Image className={StyleProyects.btn} style={{ width: "65px", height: "45px" }} src={Internet} alt="WWW" />
                        </a>
                        <a style={{ width: "70px", height: "70px", backgroundColor: "#000" }} type='button' href="https://github.com/mnparolari/Magi-Impresiones" target="_blank">
                            <Image className={StyleProyects.btn} style={{ width: "70px", height: "70px" }} src={Github} alt="Github" />
                        </a>
                    </div>
                </div>
            </div>
        </ReactCardFlip >
    )
}