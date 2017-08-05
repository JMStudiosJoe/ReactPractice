import * as React from 'react'
import * as style from 'ts-style'
import ParallaxComponent from './customReactParallax'
import * as FA from 'react-icons/lib/fa'
import {teamData} from '../models/teamModel'
import VoteSmartLocallyComponent from './sampleProject/voteSmartLocallyComponent'
interface TeamMemberLink {
    name: string,
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
    name: string
}
interface TeamState {
    team: Array<TeamMember>
}
const teamMemberDisplay = (teamMember: TeamMember, index: number) => {
    const teamMemberContainerCSS = style.create({
        padding: '10px',
        fontSize: '20px',
        textAlign: 'left',
    })

    
    const darkCard = style.create({
        backgroundColor: '#d9d9d9',
        borderRadius: '6px',
        padding: '2px',
        width: '420px',
        margin: '20px'
    })

    const lightCard = style.create({
        backgroundColor: 'white',
        margin: '2px',
        borderRadius: '6px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2
    })

    const teamMemberProfileImage = style.create({
        backgroundImage: `url(${teamMember.imageURL})`,
        height: '160px',
        width: '150px',
        borderRadius: '50px',
        position: 'relative',
        zIndex: 16
    })

    const alterEgoProfileImage = style.create({
        backgroundImage: `url(${teamMember.alterEgoImageURL})`,
        height: '10px',
        width: '80px',
        borderRadius: '50px',
        position: 'relative',
        zIndex: 3,
        top: '40px',
        left: '80px'
    })

    return (
        <div key={index}>
            <div style={darkCard}>
                <div style={lightCard}>
                    <div style={teamMemberContainerCSS}>
                        <div>{teamMember.name}</div>
                        <div>{teamMember.title}</div>
                        <div >
                            <img style={alterEgoProfileImage} src={teamMember.alterEgoImageURL} />
                            <img style={teamMemberProfileImage} src={teamMember.imageURL} />
                        </div>

                        <br />
                        <div>
                            {
                                displayLinksWithIcons(teamMember.links)
                            }
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
            <ParallaxComponent />
        </div>
    );
}
const displayLinksWithIcons = (links: Array<TeamMemberLink>) => {
    const iconLink = style.create({
        width: '60px',
        height: '60px',
        display: 'inline-block'
    })
    return links.map( (link: TeamMemberLink, index: number) => {
        if (link.name === 'github') {
            return (
                <div style={iconLink} key={index}>
                    <a href={link.url} ><FA.FaGithub /></a>
                </div>
            )
        }
        else if (link.name === 'linkedin') {
            return (
                <div style={iconLink} key={index}>
                    <a href={link.url} ><FA.FaLinkedin /></a>
                </div>
            )
        }
    })
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
