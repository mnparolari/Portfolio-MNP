import StyleProyects from './proyects.module.css'
import LikeAtHome from './LikeAtHome'
import Presente from './Presente'
import Rpm from './Rpm'

export default function Proyectos() {
  return (
    <div className={StyleProyects.containerGroup} >
      <Rpm />
      <LikeAtHome />
      <Presente />
    </div>
  )
}