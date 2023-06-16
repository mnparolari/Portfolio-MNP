'use client'
import { useState } from 'react';
import StyleProyects from './proyects.module.css'
import Image from 'next/image'
import RpmPage from '../../../public/img/rpm.png'
import Github from '../../../public/img/github.jpg'
import Internet from '../../../public/img/internet.png'
import ReactCardFlip from 'react-card-flip'

export default function Rpm() {

    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className={StyleProyects.card} onClick={handleClick}>
                <Image className={StyleProyects.img} src={RpmPage} />
            </div>
            <div className={StyleProyects.card} onClick={handleClick}>
                <div className="card-body">
                    <h6 className="card-title" style={{ color: "#fff", fontWeight: "normal", fontSize: "1rem" }}>RPM, La casa del vinilo</h6>
                    <p className="card-text" style={{ color: "#ffffff8c", fontSize: "0.8rem" }}>E-commerce especializado en venta de vinilos realizado en su totalidad con React JS. <br /><br /></p>
                    <p className="card-text" style={{ color: "#42F5A3", fontSize: "0.8rem" }}><small >Tecnologías y librerías: <br />  <span style={{ color: "#fff" }}> React.js - ^18.2.0 <br />
                        Node.js - ^18.13.0 <br />
                        NPM - ^8.19.3 <br />
                        Firebase - ^9.22.0 <br />
                        Bootstrap - ^5.2.3 <br />
                        Materialize-css - ^1.0.0-rc.2 <br />
                        Toastify - ^9.1.3 <br />
                        SweetAlert2 - ^11.7.5 </span></small></p>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <a style={{ width: "65px", height: "45px", backgroundColor: "#000" }} type='button' href="https://rpm-lacasadelvinilo.vercel.app/" target="_blank">
                            <Image className={StyleProyects.btn} style={{ width: "65px", height: "45px" }} src={Internet} alt="WWW" />
                        </a>
                        <a style={{ width: "70px", height: "70px", backgroundColor: "#000" }} type='button' href="https://github.com/mnparolari/RPM" target="_blank">
                            <Image className={StyleProyects.btn} style={{ width: "70px", height: "70px" }} src={Github} alt="Github" />
                        </a>
                    </div>
                </div>
            </div>
        </ReactCardFlip >
    )
}