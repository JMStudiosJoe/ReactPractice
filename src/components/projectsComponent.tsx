import * as React from "react";

import {projectData} from "../models/projects";
import VoteSmartLocallyComponent from "./sampleProject/voteSmartLocallyComponent";
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

const SampleProject = (projectName: string) => {
    const projectItemContainerCSS = {
        padding: "10px",
        margin: "10px",
        fontAize: "16px"
    }


    if(projectName == 'Vote Smart Locally' ) {
        return (
            <VoteSmartLocallyComponent />
        );
    }
    else {
        return (
            <div style={projectItemContainerCSS}>
                No project sample available.
            </div>
        );
    }

}

const projectItemDisplay = (project: Project, index: number) => {
    const projectItemContainerCSS = {
        padding: "10px",
        margin: "10px",
        fontSize: "16px"
        // backgroundImage: "url('public/images/me.jpg')"
    }
    return (
        <div key={index} style={projectItemContainerCSS}>
            <div>{project.name}</div>
            <div>{project.description}</div>
            <br />
            <div>{project.problem}</div>
            <div><a href={project.github.link}>{project.github.link}</a></div>
            <div>
                {SampleProject(project.name)}
            </div>
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
                    return projectItemDisplay(project, index);
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
