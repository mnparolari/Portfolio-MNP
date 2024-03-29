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
                <Image className={StyleProyects.img} src={EnrollmentManagerPage} alt='EnrollmentManagerPage' />
            </div>
            <div className={StyleProyects.card} onClick={handleClick}>
                <div className="card-body">
                    <h6 className="card-title" style={{ color: "#fff", fontWeight: "normal", fontSize: "1rem" }}>Enrollment Manager Clone Coderhouse</h6>
                    <p className="card-text" style={{ color: "#ffffff8c", fontSize: "0.7rem" }}>
                        Registration administrator.
                        Project carried out with Angular from the use of JSON-Server through an API with NodeJS Cors. A personalized clone was made, using the structural and programmatic aspects of the Coderhouse eLearning platform. <br /><br /></p>
                    <p style={{ color: "#ffffff8c", fontSize: "0.6rem" }}>[Navigation data, in GitHub README]</p>
                    <div>
                        <p className="card-text" style={{ color: "#42F5A3", fontSize: "0.8rem", textAlign: "center" }}><small >Technologies and libraries: <br /></small></p>
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <p style={{ color: "#42F5A3", fontSize: "0.8rem" }}>
                                <small>
                                    <span style={{ color: "#fff" }}>
                                        Angular CLI - ^16.1.0 <br />
                                        Typescript - ^5.1.3<br />
                                        Node.js - ^20.9.0 <br />
                                        JSON-Server - ^0.17.4 <br />
                                        Angular Material - ^16.1.4
                                    </span>
                                </small>
                            </p>
                            <p style={{ color: "#42F5A3", fontSize: "0.8rem" }}>
                                <small>
                                    <span style={{ color: "#fff" }}>
                                        RxJS - ^7.8.0 <br />
                                        NgRx - ^16.2.0 <br />
                                        Chart.js - ^4.3.2 <br />
                                        Ng2 Charts - ^5.0.2
                                    </span>
                                </small>
                            </p>
                        </div>
                    </div>
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