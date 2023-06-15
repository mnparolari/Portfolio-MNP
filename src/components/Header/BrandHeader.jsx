import StyleHeader from './header.module.css'


export function BrandHeader() {
    return (
        <div className={StyleHeader.logo}>
            <a type='button' href="/">
                <img className={StyleHeader.imgLogo} src="https://firebasestorage.googleapis.com/v0/b/portfolio-efcfe.appspot.com/o/MNP-2circular.png?alt=media&token=44f1b82a-c00f-49e7-8ba5-8338a67206d1&_gl=1*l5b1eg*_ga*MTczMTk5NTc2MC4xNjg0OTcyNTUw*_ga_CW55HF8NVT*MTY4NjA5NTE0Ni4xOS4xLjE2ODYwOTY5MDguMC4wLjA." alt="Github" />
            </a>
        </div>
    )
}