import StyleProyects from './projects.module.css'
import LikeAtHome from './LikeAtHome'
import Presente from './Presente'
import Rpm from './Rpm'
import EnrollmentManager from './EnrollmentManager'

export default function Projectos() {
  return (
    <div className={StyleProyects.containerGroup} >
      <Rpm />
      <LikeAtHome />
      <Presente />
      <EnrollmentManager />
    </div>
  )
}