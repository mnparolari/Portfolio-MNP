'use client'
import StyleHeader from './header.module.css';
import Image from 'next/image';
import Github from '../../../public/img/github.jpg';
import Linkedin from '../../../public/img/linkedin.png';


export function ButtonsHeader() {
    return (
        <div style={{ marginLeft: "100px", marginRight: "20px", display: "flex", justifyContent: "space-around", backgroundColor: "#000" }}>
            <a style={{ width: "45px", height: "45px", backgroundColor: "#000" }} type='button' href="https://github.com/mnparolari" target="_blank">
                <Image className={StyleHeader.btn} style={{ width: "45px", height: "45px" }} src={Github} alt="Github" />
            </a>
            <a style={{ width: "45px", height: "45px", backgroundColor: "#000" }} type='button' href="https://www.linkedin.com/in/mart%C3%ADn-nicol%C3%A1s-parolari-a0092799/" target="_blank">
                <Image className={StyleHeader.btn} style={{ width: "45px", height: "45px" }} src={Linkedin} alt="LinkeIn" />
            </a>
        </div>
    )
}