import Styles from "../Styling/pages/projects.module.scss"
import HairsalonProject from "../components/global/Projects/HairsalonProject"

function Projects() {
  return (
    <>
    <div className={Styles.container}>
        <div className={Styles.wrapper}>
          <HairsalonProject/>
        </div>
    </div>
    </>
  )
}

export default Projects
