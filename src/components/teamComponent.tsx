import * as React from "react"
import * as style from "ts-style"
import ParallaxComponent from "./customReactParallax"
import { Glyph, Spinner } from 'elemental'
import {teamData} from "../models/teamModel"
import VoteSmartLocallyComponent from "./sampleProject/voteSmartLocallyComponent"
interface TeamMemberLink {
    name: string,
    icon: string,
    url: string
}

interface TeamMember {
    name: string,
    title: string,
    description: string,
    references: Array<string>,
    links:Array<TeamMemberLink>,
    imageURL: string,
    alterEgoImageURL: string
}
interface TeamProps {
    name: string;
}

interface TeamState {
    team: Array<TeamMember>;
}

const teamMemberDisplay = (teamMember: TeamMember, index: number) => {
    console.log(teamMember.imageURL)
    const teamMemberContainerCSS = {
        padding: "10px",
        fontSize: "20px",
        textAlign: "left",
    }

    const githubIconLink = {
        width: '60px',
        height: '60px'
    }
    
    const darkCard = {
        backgroundColor: "#d9d9d9",
        borderRadius: "6px",
        padding: "2px",
        width: "320px",
        margin: "20px"
    }
    const lightCard = {
        backgroundColor: "white",
        margin: "2px",
        borderRadius: "6px"
    }
    const teamMemberProfileImage = style.create({
        backgroundImage: `url(${teamMember.imageURL})`,
        height: "120px",
        width: "100px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        zIndex: 6
    })
    const alterEgoProfileImage = style.create({
        backgroundImage: `url(${teamMember.alterEgoImageURL})`,
        height: "120px",
        width: "100px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        zIndex: 0,
        bottom: "80px",
        right: "30px"
    })

    return (
        <div>
            <div style={darkCard}>
                <div style={lightCard}>
                    <div key={index} style={teamMemberContainerCSS}>
                        <div>{teamMember.name}</div>
                        <div>{teamMember.title}</div>
                        <div style={teamMemberProfileImage}></div>
                        <div style={alterEgoProfileImage}></div>

                        <br />
                        <div style={githubIconLink}>
                            <Glyph style={githubIconLink} icon='mark-github' />
                        </div>
                        <div><a href={teamMember.links[0].url}>{teamMember.links[0].url}</a></div>
                        <hr />
                    </div>
                </div>
            </div>
            <ParallaxComponent />
        </div>
    );
}

class TeamComponent extends React.Component<TeamProps, TeamState> {
    constructor(props: TeamProps) {
        super(props)
        this.props = props
    }

    render() {

        return (
            <div>
                {teamData.teamMembers.map( function(teamMember: TeamMember, index: number) {
                    return teamMemberDisplay(teamMember, index);
                })}
            </div>
        )
    }
    componentDidMount() {
        this.setState({
            team: teamData.teamMembers
        })
    }
}

export default TeamComponent
