'use client'
import { useState } from 'react'
import StyleContact from './contact.module.css'
import Image from 'next/image'
import MNP from '../../../public/img/mnp.jpeg'
import Github from '../../../public/img/github.jpg'
import Linkedin from '../../../public/img/linkedin.png'
import Email from '../../../public/img/email.png'
import Whatsapp from '../../../public/img/wpp.jpg'
import Simpson from '../../../public/img/simpson.png'
import ReactCardFlip from 'react-card-flip'

export default function Contacto() {
	const [isFlipped, setIsFlipped] = useState(false)
	const handleClick = () => {
		setIsFlipped(!isFlipped)
	}
	const handleDownloadCV = () => {
		const link = document.createElement('a')
		link.href = '/pdfs/MNP_cv.pdf'
		link.download = 'MNP_Curriculum_Vitae.pdf'
		link.click()
	}

	return (
		<div className={StyleContact.containerGroup}>
			{/* <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
				<div onClick={handleClick} style={{ width: "490px", borderRadius: "1%", backgroundColor: "#000", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "45px", paddingBottom: "43px"}}>
					<Image style={{ width: "300px", height: "65%", borderRadius: "50%", cursor: "pointer" }} src={Simpson} alt="Gif" />
				</div> */}
				<div className={StyleContact.containerCard}>
					<div style={{ display: "flex", justifyContent: "center", backgroundColor: "#000" }}>
						<div className={StyleContact.card}>
							<div className="card-body" style={{ marginTop: "10px" }}>
								<h6 className="card-title" style={{ color: "#fff", fontWeight: "normal", fontSize: "1.2rem", paddingLeft: "10px"}}>MARTÍN NICOLÁS PAROLARI</h6>
								<p className="card-text" style={{ color: "#ffffff8c", fontSize: "1rem", color: "#42F5A3", paddingLeft: "10px" }}>BUENOS AIRES/ARGENTINA <br /><br /></p>
								<div>
									<div style={{ display: "flex", alignItems: "center" }}><Image style={{ width: "55px", height: "55px", marginLeft: "7px" }} src={Email} alt="Email" /> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mnparolari@gmail.com" target='_blank' style={{ marginTop: "15px", marginLeft: "15px", textDecoration: "none", color: "gray" }}>MNPAROLARI@GMAIL.COM</a></div>
									<div style={{ display: "flex", alignItems: "center" }}><Image style={{ width: "70px", height: "70px" }} src={Github} alt="Github" /> <a href='https://github.com/mnparolari' target='_blank' style={{ marginTop: "15px", marginLeft: "10px", textDecoration: "none", color: "gray" }}>MNPAROLARI</a></div>
									<div style={{ display: "flex", alignItems: "center", marginTop:"10px" }}><Image style={{ width: "45px", height: "45px", marginLeft: "13px" }} src={Linkedin} alt="LinkedIn" /><a href='https://www.linkedin.com/in/mart%C3%ADn-nicol%C3%A1s-parolari-a0092799/' target='_blank' style={{ marginTop: "15px", marginLeft: "22px", textDecoration: "none", color: "gray" }}>MARTIN NICOLÁS PAROLARI</a></div>
									<div style={{ display: "flex", alignItems: "center", marginTop:"20px" }}><Image style={{ width: "65px", height: "40px" }} src={Whatsapp} alt="Whatsapp" /><a href='https://wa.me/+5491134629639?text=%C2%A1Hola,%20Mart%C3%ADn!%20%C2%BFC%C3%B3mo%20est%C3%A1s?%20' target='_blank' style={{ marginTop: "15px", marginLeft: "19px", textDecoration: "none", color: "gray" }}>+54 9 11 3462 9639</a></div>
								</div>
								<button type="button" onClick={handleDownloadCV} className="btn btn-secondary" style={{ display: "flex", alignItems: "center", fontSize: "0.8rem", width: "100px", height: "40px", textAlign: "center", marginRight: "35px", position: "relative", left: "70%" }}>DOWNLOAD CV</button>
							</div>
						</div>
					</div>
					<div className={StyleContact.btnDownloadC}>
						<Image src={MNP} style={{ width: "300px", height: "65%", borderRadius: "50%" }} />
						<h6 style={{ marginTop: "20px" }}>THANK YOU SO MUCH!</h6>
					</div>
				</div>
			{/* </ReactCardFlip> */}
		</div>
	)
}