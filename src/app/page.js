'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { LanguagesTools } from '@/components/LanguagesTools/LanguagesTools'
import StyleHome from './page.module.css'
import { GifDesk } from '@/components/Gifs/GifDesk'
import Link from 'next/link'

export default function Home() {

  const handleDownloadCVH = () => {
    const link = document.createElement('a')
    link.href = '/pdfs/MNP_cv.pdf'
    link.download = 'MNP_Curriculum_Vitae.pdf'
    link.click()
  };

  return (
    <div className={StyleHome.containerGroup}>
      <div className={StyleHome.containerInit1}>
        <p style={{ paddingTop: "10px", textAlign: "left", paddingLeft: "5px", paddingRight: "5px", fontSize: "0.9rem" }}>
          DESDE HACE UN AÑO SOY <span style={{ color: "#764BC4", fontWeight: "bolder" }}>DESARROLLADOR FRONT-END</span> CON ESTUDIOS EN LA DIGITAL SCHOOL <span style={{ color: "#42F5A3", fontWeight: "bolder" }}>CODERHOUSE</span>,
          SUMADO A NUMEROSAS HORAS DE BOOTSCAMP EN <span style={{ color: "#42F5A3", fontWeight: "bolder" }}>OPEN BOOTSCAMP</span>,<span style={{ color: "#42F5A3", fontWeight: "bolder" }}>CÓDIGO FACILITO</span>, ENTRE OTROS.<br /><br />
          ACTUALMENTE, ESTOY EN PLENO AVANCE EN MI FORMACIÓN COMO <span style={{ color: "#764BC4", fontWeight: "bolder" }}>DESARROLLADOR DE APLICACIONES</span>. <br /><br />
          A SU VEZ, TENGO EXPERIENCIA AUTODIDACTA/LABORAL EN EL MANEJO DE <span style={{ color: "#764BC4", fontWeight: "bolder" }}>BASE DE DATOS RELACIONALES</span>, COMO EN EL MANEJO DE HERRAMIENTAS DE <span style={{ color: "#764BC4", fontWeight: "bolder" }}>DISEÑO</span>.<br /><br />
        </p>
      </div>
      <div className={StyleHome.containerInit2}>
        <p style={{ paddingTop: "10px", textAlign: "left", paddingLeft: "5px", paddingRight: "5px", fontSize: "0.9rem", color: "#fff" }}>
          <span style={{ color: "#42F5A3", fontWeight: "bolder", textDecoration: "underline" }}>MIS CINCO FUNDAMENTOS EN LA PROGRAMACIÓN FRONT-END:</span> <br />
          1- DARLE VIDA AL SITIO EN SÍ MISMO. <br />
          2- DISEÑOS MULTITASK. <br />
          3- FACILIDAD E INTUITIVIDAD. <br />
          4- INTERACCIÓN Y RÁPIDEZ. <br />
          5- CONSTANTE FORMACIÓN Y EVOLUCIÓN.
        </p>
      </div>
      <div className={StyleHome.containerInitGif}>
        <GifDesk />
      </div>
      <div className={StyleHome.containerInit3}>
        <LanguagesTools />
      </div>
      <div className={StyleHome.containerInit4}>
        <button type="button" onClick={handleDownloadCVH} className="btn btn-secondary" style={{ display: "flex", alignItems: "center", fontSize: "0.8rem", height: "40px", textAlign: "center" }}>DESCARGAR CV</button>
        <Link type="button" className="btn btn-secondary" style={{ display: "flex", alignItems: "center", fontSize: "0.8rem", height: "40px", textAlign: "center", marginLeft: "10px" }} href="/contacto">CONTACTAME</Link>
      </div>
      <div className={StyleHome.containerInit5}>
        <Link type="button" className="btn btn-secondary" style={{ display: "flex", alignItems: "center", fontSize: "0.8rem", height: "40px", textAlign: "center" }} href="/proyectos">MIS TRABAJOS</Link>
      </div>
    </div>
  )
}