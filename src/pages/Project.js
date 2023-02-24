import { useParams } from "react-router-dom";
import { projects } from "../helpers/projectList";

import BtngitHub from "../components/btngithub/BtngitHub";



const Project = () => {

    const {id}=useParams();

    const project = projects[id];

    return (
        <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{project.title}</h1>

                <img src={project.imgB} alt="" className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>{project.skills}</p>
                </div>

                {project.gitHubLink && <BtngitHub link="https://github.com/"/>}
                
                
            </div>
        </div>
    </main>
     );
}
 
export default Project;