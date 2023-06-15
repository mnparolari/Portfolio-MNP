'use client'
import { useState } from 'react'
import Image from 'next/image'
import MNP from '../../../public/img/mnp.jpeg'
import Github from '../../../public/img/github.jpg'
import Linkedin from '../../../public/img/linkedin.png'
import Email from '../../../public/img/email.png'
import Whatsapp from '../../../public/img/wpp.jpg'
import GifContacts from '../../../public/img/gifcontacts.gif'
import ReactCardFlip from 'react-card-flip'

export default function Contacto() {

    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    };

    const handleDownloadCV = () => {
        const link = document.createElement('a')
        link.href = '/pdfs/cv.pdf'
        link.download = 'MNP_Curriculum_Vitae.pdf'
        link.click()
    };

    return (
        <>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="card mb-3" style={{ width: "450px", height: "390px", borderRadius: "1%", backgroundColor: "#000", marginRight: "15px", border: "2px solid " }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ color: "#fff", fontWeight: "normal", fontSize: "1rem" }}>MARTÍN NICOLÁS PAROLARI</h6>
                            <p className="card-text" style={{ color: "#ffffff8c", fontSize: "0.8rem", color: "#42F5A3" }}>BUENOS AIRES/ARGENTINA <br /><br /></p>
                            <div>
                                <div style={{ display: "flex", alignItems: "center" }}><Image style={{ width: "55px", height: "55px", marginLeft: "7px" }} src={Email} alt="Email" /> <p style={{ marginTop: "15px", marginLeft: "15px", fontWeight: "bolder" }}>MNPAROLARI@GMAIL.COM</p></div>
                                <div style={{ display: "flex", alignItems: "center" }}><Image style={{ width: "70px", height: "70px" }} src={Github} alt="Github" /> <p style={{ marginTop: "15px", marginLeft: "10px", fontWeight: "bolder" }}>MNPAROLARI</p></div>
                                <div style={{ display: "flex", alignItems: "center" }}><Image style={{ width: "45px", height: "45px", marginLeft: "13px" }} src={Linkedin} alt="LinkedIn" /> <p style={{ marginTop: "15px", marginLeft: "22px", fontWeight: "bolder" }}>MARTIN NICOLÁS PAROLARI</p></div>
                                <div style={{ display: "flex", alignItems: "center" }}><Image style={{ width: "65px", height: "40px" }} src={Whatsapp} alt="Whatsapp" /><p style={{ marginTop: "15px", marginLeft: "19px", fontWeight: "bolder" }}>+54 9 11 3462 9639</p></div>
                            </div>
                            <button type="button" onClick={handleDownloadCV} className="btn btn-secondary" style={{ display: "flex", alignItems: "center", fontSize: "0.8rem", height: "40px", textAlign: "center", marginRight: "35px", position: "relative", left: "70%" }}>DESCARGAR CV</button>
                        </div>
                    </div>
                    <div onClick={handleClick} >
                        <Image style={{ width: "450px", height: "390px", borderRadius: "1%", cursor: "pointer" }} src={GifContacts} alt="Gif" />
                    </div>
                </div>
                <div className="card" onClick={handleClick} style={{ width: "490px", borderRadius: "1%", backgroundColor: "#000", cursor: "pointer", display: "flex", alignItems:"center", position: "relative", left: "31%" }}>
                    <Image src={MNP} style={{ width: "300px", height: "65%", borderRadius: "50%" }} />
                    <h6 style={{ marginTop: "20px" }}>¡MUCHAS GRACIAS POR LEERME!</h6>
                </div>
            </ReactCardFlip>
        </>
    )
}