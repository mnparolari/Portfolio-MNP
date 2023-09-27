'use client'
import { useState } from 'react'
import StyleProyects from './projects.module.css'
import Image from 'next/image'
import EnrollmentManagerPage from '../../../public/img/enrollment.png'
import Github from '../../../public/img/github.jpg'
import Internet from '../../../public/img/internet.png'
import ReactCardFlip from 'react-card-flip'


export default function EnrollmentManager() {

    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    };


    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className={StyleProyects.card} onClick={handleClick}>
                <Image className={StyleProyects.img} src={EnrollmentManagerPage} />
            </div>
            <div className={StyleProyects.card} onClick={handleClick}>
                <div className="card-body">
                    <h6 className="card-title" style={{ color: "#fff", fontWeight: "normal", fontSize: "1rem" }}>Enrollment Manager Clone Coderhouse</h6>
                    <p className="card-text" style={{ color: "#ffffff8c", fontSize: "0.8rem" }}>
                        Registration administrator.
                        Project carried out with Angular and the use of JSON-Server as a local database. A personalized clone was made, using the structural and programmatic aspects of the Coderhouse eLearning platform. <br /><br /></p>
                    <p style={{ color: "#ffffff8c", fontSize: "0.8rem" }}>[Navigation data, in GitHub README]</p>
                    <p className="card-text" style={{ color: "#42F5A3", fontSize: "0.8rem" }}><small >Technologies and libraries: <br />  <span style={{ color: "#fff" }}>
                        Angular CLI - ^16.1.0 <br />
                        Typescript <br />
                        Node.js - ^18.13.0 <br />
                        API - JSON-Server <br />
                        Angular Material <br />
                        SASS - ^1.63.3 <br />
                        SweetAlert2 - ^11.7.5 </span></small></p>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <a style={{ width: "65px", height: "45px", backgroundColor: "#000" }} type='button' href="https://enrollment-manager-clone-coderhouse-git-master-mnparolari.vercel.app/auth/login" target="_blank">
                            <Image className={StyleProyects.btn} style={{ width: "65px", height: "45px" }} src={Internet} alt="WWW" />
                        </a>
                        <a style={{ width: "70px", height: "70px", backgroundColor: "#000" }} type='button' href="https://github.com/mnparolari/enrollment-manager-clone-coderhouse" target="_blank">
                            <Image className={StyleProyects.btn} style={{ width: "70px", height: "70px" }} src={Github} alt="Github" />
                        </a>
                    </div>
                </div>
            </div>
        </ReactCardFlip>
    )
}