import StyleGif from './gif.module.css'
import Image from 'next/image'
import DeskGif from '../../../public/img/gifdesk.gif'

export function GifDesk() {
    return (
        <>
            <div className={StyleGif.containerGifDesk}>
                <a>
                    <Image className={StyleGif.gif} src={DeskGif} alt="Working" />
                </a>
            </div>
        </>
    )
}