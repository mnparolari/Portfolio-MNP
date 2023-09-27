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
          I AM A <span style={{ color: "#764BC4", fontWeight: "bolder" }}>FRONT-END DEVELOPER</span> WITH STUDIES AT THE DIGITAL SCHOOL <span style={{ color: "#42F5A3", fontWeight: "bolder" }}>CODERHOUSE</span>,
          IN ADDITION TO NUMEROUS HOURS OF BOOTSCAMP IN <span style={{ color: "#42F5A3", fontWeight: "bolder" }}>OPEN BOOTSCAMP</span>,<span style={{ color: "#42F5A3", fontWeight: "bolder" }}>CÓDIGO FACILITO</span>, AMONG OTHERS.<br /><br />
          CURRENTLY, I AM IN FULL PROGRESS IN MY TRAINING AS AN  <span style={{ color: "#764BC4", fontWeight: "bolder" }}>APPLICATION DEVELOPER</span>. <br /><br />
          AT THE SAME TIME, I WORK EXPERIENCE IN THE MANAGEMENT OF <span style={{ color: "#764BC4", fontWeight: "bolder" }}>RELATIONAL DATABASES</span>, AS WELL AS IN THE MANAGEMENT OF <span style={{ color: "#764BC4", fontWeight: "bolder" }}>DESIGN TOOLS</span>.<br /><br />
        </p>
      </div>
      <div className={StyleHome.containerInitGif}>
        <GifDesk />
      </div>
      <div className={StyleHome.containerInit2}>
        <LanguagesTools />
      </div>
      <div className={StyleHome.containerInit4}>
        <button type="button" onClick={handleDownloadCVH} className="btn btn-secondary" style={{ display: "flex", alignItems: "center", fontSize: "0.8rem", height: "40px", textAlign: "center" }}>DOWNLOAD CV</button>
        <Link type="button" className="btn btn-secondary" style={{ display: "flex", alignItems: "center", fontSize: "0.8rem", height: "40px", textAlign: "center", marginLeft: "10px" }} href="/contact">CONTACT ME</Link>
      </div>
      <div className={StyleHome.containerInit5}>
        <Link type="button" className="btn btn-secondary" style={{ display: "flex", alignItems: "center", fontSize: "0.8rem", height: "40px", textAlign: "center" }} href="/projects">MY JOBS</Link>
      </div>
    </div>
  )
}