import * as React from "react";

import {projectData} from "../models/projects";

interface TeamMember {
    name: string,
    
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
                {projectData.projects.map( function(member: TeamMember, index: number) {
                    return teamMemberDisplay(member);
                })}
            </div>
        );
    }
    componentDidMount() {
        this.setState({
            currentTeamMebmers: projectData.projects 
        });
    }
}

export default TeamComponent;
