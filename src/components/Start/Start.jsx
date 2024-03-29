'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import StyleStart from './start.module.css'
import Logo from '../../../public/img/MNP-2circular.png'

export function Start({ setStarting }) {

    const handleStarting = () => {
        setStarting(false)
    };

    return (
        <>
            <div className={StyleStart.startContainer} style={{ textAlign: "center" }}>
                <Image style={{ marginTop: "160px" }} src={Logo} alt="LogoMNP" />
                <div style={{textAlign:"center"}}>
                    <h1 style={{ marginLeft: "15px", fontSize: "1.8rem", fontWeight: "lighter", color: "#fff" }}><span style={{ color: "#42F5A3", fontWeight: "bolder" }}>MARTÍN NICOLÁS PAROLARI</span></h1>
                    <h2 style={{ marginLeft: "25px", fontSize: "1.7rem", fontWeight: "lighter", color: "#fff" }}><span style={{ color: "#764BC4", fontWeight: "bolder" }}>FRONT-END DEVELOPER</span></h2>
                    <p style={{ marginLeft: "25px", fontWeight: "lighter", color: "#fff" }}>I INVITE YOU TO KNOW MY WORK</p>
                </div>
                <Link type="button" className="btn btn-secondary" style={{}} onClick={handleStarting} href="/">¡GO!</Link>
            </div>
        </>
    )
}
