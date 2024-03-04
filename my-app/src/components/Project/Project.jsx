import './project.css'
const Project = (props) =>{
    return(
        <li className='project'>
            <img src={props.link} alt="no image" />
            <p>{props.name}</p>
        </li>
    )
}
// default setting for props
Project.defaultProps = {link: "", name: "project 1"}
export default Project