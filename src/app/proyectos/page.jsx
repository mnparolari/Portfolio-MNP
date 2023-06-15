import LikeAtHome from './LikeAtHome'
import Presente from './Presente'
import Rpm from './Rpm'

export default function Proyectos() {
  return (
    <div style={{ display: "flex", justifyContent: "center", overflowX: "hidden", overflowY: "hidden" }}>
      <Presente />
      <LikeAtHome />
      <Rpm />
    </div>
  )
}