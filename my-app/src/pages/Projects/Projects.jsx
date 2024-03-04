import Project from './../../components/Project/Project'
import './projects.css'
const Projects = () => {
    return(
        <div>
            <div className="section">
                <h2 classname="title"> Projects </h2>
                <ul className="projects">
                    <Project name = "First project"/>
                </ul>
            </div>
        </div>
    )
}

export default Projects