import * as React from "react"
import * as style from "ts-style"
import ParallaxComponent from "./customReactParallax"
import * as FA from 'react-icons/lib/fa'
import { darkCard, lightCard, cardsContainer, fontWeightTypes } from './scss/common'
import {projectData} from "../models/projects"
import LocalVoteMattersComponent from './sampleProject/localVoteMatters/localVoteMattersComponent'
interface Project {
    name: string,
    description: string,
    problem: string,
    references: Array<string>,
    solutions: string,
    link:string,
    logo: string,
    position: number,
    github: string
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
                Coming soon...
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
        height: '60px',
        display: 'inline-block'
    }
    const projectHeader = () => {
        return style.create({
            fontSize: '26px',
            fontWeight: 'bold' as fontWeightTypes
        })
    }
    
    return (
        <div key={index}>
            <div style={darkCard()}>
                <div style={lightCard()}>
                    <div style={projectItemContainerCSS}>
                        <div style={projectHeader()}>{project.name} <a style={githubIconLink} href={project.github} ><FA.FaGithub /></a></div>
                        <div><h4>Summary</h4>{project.description}</div>
                        <br />
                        <div><h4>Problem</h4>{project.problem}</div>
                        <br />
                        <div><h4>Possible Solutions</h4>{project.solutions}</div>
                        <div>
                            <h4>Sample</h4>
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
