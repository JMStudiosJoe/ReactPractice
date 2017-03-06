import * as React from "react";

import {teamData} from "../models/teamMembers";

interface MemberLinks {
    name: string,
    icon: string,
    url: string
}
interface TeamMember {
    name: string,
    title: string,
    description: string,
    links: Array<MemberLinks>
    
}
interface TeamProps {
    name: string;
}

interface TeamState {
    currentTeamMebmers: Array<TeamMember>;
}
const teamMemberDisplay = (member: TeamMember) => {
    const teamMemberContainerCSS = {
        padding: "10px",
        margin: "10px",
        "font-size": "16px"

    }
    return (
        <div style={teamMemberContainerCSS}>
            <div>{member.name}</div>
            <div>{member.title}</div>
            <div>{member.description}</div>
            
            <hr />
        </div>
    );
}

class TeamComponent extends React.Component<TeamProps, TeamState> {
    constructor(props: TeamProps) {
        super(props);
        this.props = props;
    }
    
    render() {

        return (
            <div>
                {teamData.teamMembers.map( function(member: TeamMember, index: number) {
                    return teamMemberDisplay(member);
                })}
            </div>
        );
    }
    componentDidMount() {
        this.setState({
            currentTeamMebmers: teamData.teamMembers 
        });
    }
}

export default TeamComponent;
