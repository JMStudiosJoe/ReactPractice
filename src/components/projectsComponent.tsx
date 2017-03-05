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
    const projectItemContainerCSS = {
        padding: "10px",
        margin: "10px",
        "font-size": "16px"

    }
    return (
        <div style={projectItemContainerCSS}>
            <div>{project.name}</div>
            <div>{project.description}</div>
            <br />
            <div>{project.problem}</div>
            <div><a href={project.github.link}>{project.github.link}</a></div>
            <hr />
        </div>
    );
}

class ProjectsComponent extends React.Component<ProjectsProps, ProjectsState> {
    constructor(props: ProjectsProps) {
        super(props);
        this.props = props;
    }
    
    render() {

        return (
            <div>
                {projectData.projects.map( function(project: Project, index: number) {
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
