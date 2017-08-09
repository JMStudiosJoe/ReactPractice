import * as React from "react"
import * as style from "ts-style"
import ParallaxComponent from "./customReactParallax"
import * as FA from 'react-icons/lib/fa'
import { darkCard, lightCard, cardsContainer } from './scss/common'
import {projectData} from "../models/projects"
import LocalVoteMattersComponent from './sampleProject/localVoteMattersComponent'
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
    name: string
}

interface ProjectsState {
    currentProjects: Array<Project>
}

const SampleProject = (projectName: string) => {

    if(projectName === 'Local Vote Matters' ) {
        return (
            <LocalVoteMattersComponent />
        )
    }
    else {
        return (
            <div >
                No project sample available.
            </div>
        )
    }

}

const projectItemDisplay = (project: Project, index: number) => {
    const projectItemContainerCSS = {
        padding: "10px",
        fontSize: "16px",
        textAlign: "left"
    }

    const githubIconLink = {
        width: '60px',
        height: '60px'
    }
    
    return (
        <div key={index}>
            <div style={darkCard()}>
                <div style={lightCard()}>
                    <div style={projectItemContainerCSS}>
                        <div>{project.name}</div>
                        <div>{project.description}</div>
                        <div style={githubIconLink}>
                            <a href={project.github.link} ><FA.FaGithub /></a>
                        </div>
                        <br />
                        <div>{project.problem}</div>
                        <div>
                            {SampleProject(project.name)}
                        </div>
                    </div>
                </div>
            </div>
            <ParallaxComponent />
        </div>
    )
}

class ProjectsComponent extends React.Component<ProjectsProps, ProjectsState> {
    constructor(props: ProjectsProps) {
        super(props)
        this.props = props
    }

    render() {

        return (
            <div style={cardsContainer()}>
                {projectData.projects.map( function(project: Project, index: number) {
                    return projectItemDisplay(project, index);
                })}
            </div>
        )
    }
    componentDidMount() {
        this.setState({
            currentProjects: projectData.projects
        })
    }
}

export default ProjectsComponent
