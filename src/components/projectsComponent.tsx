import * as React from "react";

import {projectData} from "../models/projects";

interface Project {
    name: string,
    description: string,
    problem: string,
    references: Array<string>,
    solutions: Array<string>,
    link:string,
    logo: string,
    position: number,
    github: {
        icon: string,
        link: string
    }
}
interface ProjectsProps {
    name: string;
}

interface ProjectsState {
    currentProjects: Array<Project>;
}
const projectItemDisplay = (project: Project) => {
    console.log("wtf mate?");
    return (
        <div>
            {project.name}
        </div>
    );
}

class ProjectsComponent extends React.Component<ProjectsProps, ProjectsState> {
    constructor(props: ProjectsProps) {
        super(props);
        this.props = props;
        console.log("PROJECTS CONSTRUCTOR LOADING");

    }
    
    render() {

        return (
            <div>
                the projects
                {projectData.projects.length}
                {projectData.projects.map( function(project: Project, index: number) {
                    console.log("uh project?");
                    console.log(index);
                    return projectItemDisplay(project);
                })}
            </div>
        );
    }
    componentDidMount() {
        this.setState({
            currentProjects: projectData.projects 
        });
    }
}

export default ProjectsComponent;
