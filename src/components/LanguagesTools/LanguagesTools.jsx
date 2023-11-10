'use client'
import Image from 'next/image'
import Javascript from '../../../public/img/javascript.png'
import Typescript from '../../../public/img/typescript.png'
import Reactjs from '../../../public/img/react.png'
import Angular from '../../../public/img/angular.png'
import Nextjs from '../../../public/img/nextjs.png'
import Nodejs from '../../../public/img/nodejs.png'
import Sass from '../../../public/img/sass.png'
import Html5 from '../../../public/img/html5.png'
import Ccs3 from '../../../public/img/ccs3.png'
import Npm from '../../../public/img/npm.png'
import Firebase from '../../../public/img/firebase.png'
import Git from '../../../public/img/git.png'
import Postgresql from '../../../public/img/postgresql.png'
import Photoshop from '../../../public/img/photoshop.png'


export function LanguagesTools() {

    const handleDownloadDW = () => {
        const link = document.createElement('a')
        link.href = '/pdfs/MNP_desarrolloweb.pdf'
        link.download = 'MNP_CODER_desarrollo_web.pdf'
        link.click()
    };

    const handleDownloadJS = () => {
        const link = document.createElement('a')
        link.href = '/pdfs/MNP_javascript.pdf'
        link.download = 'MNP_CODER_javascript.pdf'
        link.click()
    };

    const handleDownloadRJS = () => {
        const link = document.createElement('a')
        link.href = '/pdfs/MNP_reactjs.pdf'
        link.download = 'MNP_CORDER_react_js.pdf'
        link.click()
    };

    const handleDownloadAngular = () => {
        const link = document.createElement('a')
        link.href = '/pdfs/MNP_FrontendAngular.pdf'
        link.download = 'MNP_CORDER_angular.pdf'
        link.click()
    };

    const handleDownloadDWB = () => {
        const link = document.createElement('a')
        link.href = '/pdfs/MNP_backend.pdf'
        link.download = 'MNP_CF_backend.pdf'
        link.click()
    };

    return (
        <>
            <div>
                <p style={{ paddingTop: "5px", textAlign: "left", paddingLeft: "5px", paddingRight: "5px", fontSize: "0.9rem", color: "#42F5A3", fontWeight: "bolder", textDecoration: "underline" }}>
                    LANGUAGES AND TOOLS: </p>
                <div style={{ paddingTop: "5px", textAlign: "left", paddingLeft: "5px", paddingRight: "5px" }}>
                    <code onClick={handleDownloadJS}><Image height="50" style={{ marginRight: "10px", marginTop: "5px", marginBottom: "5px", cursor: "pointer" }} src={Javascript} alt="Javascript" /></code>
                    <code onClick={handleDownloadJS}><Image height="50" style={{ backgroundColor: "#000", marginRight: "10px", marginTop: "5px", marginBottom: "5px", cursor: "pointer" }} src={Typescript} alt="Typescript" /></code>
                    <code onClick={handleDownloadRJS}><Image height="50" style={{ marginRight: "10px", marginTop: "5px", marginBottom: "5px", cursor: "pointer" }} src={Reactjs} alt="React JS" /></code>
                    <code onClick={handleDownloadAngular}><Image height="60" style={{ marginRight: "10px", marginTop: "5px", marginBottom: "5px", cursor: "pointer" }} src={Angular} alt="Angular" /></code>
                    <code><Image height="50" style={{ marginRight: "10px", marginTop: "5px", marginBottom: "5px" }} src={Nextjs} alt="Next JS" /></code>
                    <code><Image height="50" style={{ marginRight: "10px", marginTop: "5px", marginBottom: "5px" }} src={Nodejs} alt="Node JS" /></code>
                    <code><Image height="50" style={{ marginRight: "10px", marginTop: "5px", marginBottom: "5px" }} src={Sass} alt="SASS" /></code>
                    <code onClick={handleDownloadDW}><Image height="50" style={{ marginRight: "10px", cursor: "pointer", marginTop: "5px", marginBottom: "5px" }} src={Html5} alt="HTML5" /></code>
                    <code onClick={handleDownloadDW}><Image height="50" style={{ marginRight: "10px", cursor: "pointer", marginTop: "5px", marginBottom: "5px" }} src={Ccs3} alt="CCS3" /></code>
                    <code><Image height="50" style={{ marginRight: "10px", marginTop: "5px", marginBottom: "5px" }} src={Npm} alt="Node Package Manager" /></code>
                    <code><Image height="50" style={{ marginRight: "10px", marginTop: "5px", marginBottom: "5px" }} src={Firebase} alt="Firebase" /></code>
                    <code><Image height="50" src={Git} style={{ marginTop: "5px", marginBottom: "5px" }} alt="GIT" /></code>
                    <code onClick={handleDownloadDWB}><Image height="50" src={Postgresql} alt="PostgreSQL" style={{ cursor: "pointer", marginTop: "5px", marginBottom: "5px" }} /></code>
                    <code><Image height="50" src={Photoshop} alt="Photoshop" style={{ marginTop: "5px", marginBottom: "5px" }} /></code>
                </div>
            </div>
        </>
    )
}