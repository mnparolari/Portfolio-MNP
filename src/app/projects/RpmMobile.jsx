'use client'
import { useState } from 'react';
import StyleProyects from './projects.module.css'
import Image from 'next/image'
import RpmMobilePage from '../../../public/img/mobile.png'
import Github from '../../../public/img/github.jpg'
import Internet from '../../../public/img/internet.png'
import ReactCardFlip from 'react-card-flip'

export default function RpmMobile() {

    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className={StyleProyects.card} onClick={handleClick}>
                <Image className={StyleProyects.img} src={RpmMobilePage} alt='RpmMobilePage' />
            </div>
            <div className={StyleProyects.card} onClick={handleClick}>
                <div className="card-body">
                    <h6 className="card-title" style={{ color: "#fff", fontWeight: "normal", fontSize: "1rem" }}>RPM, La casa del vinilo - Mobile</h6>
                    <p className="card-text" style={{ color: "#ffffff8c", fontSize: "0.8rem" }}>Mobile version of e-commerce made with React Native Typescript with offline synchronization capacity and data persistence. Application state management was carried out with Redux Toolkit, database management was implemented with Firebase Realtime Database, offline synchronization with Firebase Authentication, and data persistence with SQLite and Async storage. On the other hand, device interfaces and their corresponding camera, location and geolocation permissions were created.<br /><br /></p>
                    <p className="card-text" style={{ color: "#42F5A3", fontSize: "0.8rem", textAlign: "center" }}><small >Technologies and libraries: <br />  <span style={{ color: "#fff" }}>
                        React Native - ^0.72.6 <br />
                        Typescript - ^5.1.3 <br />
                        Expo - ^49.0.8 <br />
                        Node.js - ^20.9.0 <br />
                        NPM - ^10.2.2 <br />
                        React Native Elements - ^4.0.0-rc.8 <br />
                        Async Storage - ^1.18.2 <br />
                        Redux Toolkit - ^1.9.6 <br />
                        SQLite - ^11.3.3 <br />
                        Firebase Realtime Database <br />
                        Firebase Authentication</span></small></p>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <a style={{ width: "65px", height: "45px", backgroundColor: "#000" }} type='button' href="https://wetransfer.com/downloads/13ddc3b143a2ffe08bc53e280871515c20231110192509/632bd751408d1d163a89685e57bf113f20231110192538/bb5032" target="_blank">
                            <Image className={StyleProyects.btn} style={{ width: "65px", height: "45px" }} src={Internet} alt="WWW" />
                        </a>
                        <a style={{ width: "70px", height: "70px", backgroundColor: "#000" }} type='button' href="https://github.com/mnparolari/RPM-Mobile" target="_blank">
                            <Image className={StyleProyects.btn} style={{ width: "70px", height: "70px" }} src={Github} alt="Github" />
                        </a>
                    </div>
                </div>
            </div>
        </ReactCardFlip >
    )
}