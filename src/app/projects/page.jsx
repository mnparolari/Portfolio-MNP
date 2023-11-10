import StyleProyects from './projects.module.css'
import LikeAtHome from './LikeAtHome'
import Presente from './Presente'
import Rpm from './Rpm'
import EnrollmentManager from './EnrollmentManager'
import MagiCreations from './MagiCreations'
import RpmMobile from './RpmMobile'

export default function Projectos() {
  return (
    <div className={StyleProyects.container}>
      <h2 style={{textAlign: "center", color: "#fff", opacity: "0.7"}}>WEB</h2>
      <div className={StyleProyects.containerWebGroup} >
        <Rpm />
        <EnrollmentManager />
        <MagiCreations />
        <LikeAtHome />
        <Presente />
      </div>
      <h2 style={{textAlign: "center", color: "#fff", opacity: "0.7"}}>MOBILE</h2>
      <div className={StyleProyects.containerMobileGroup} >
        <RpmMobile />
      </div>
    </div>
  )
}