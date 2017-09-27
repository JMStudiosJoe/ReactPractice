
import { getTeam } from '../redux/actions/initialActions'

interface TeamMemberLink {
    name: string,
    url: string,
    position: number
}

interface TeamMember {
    name: string,
    title: string,
    description: string,
    references: Array<string>,
    links:Array<TeamMemberLink>,
    image: {
        image_url: string
    }
    alterEgoImageURL: string
}

const teamData = {
    "teamMembers":[]
}

getTeam().then( (response) => {
    const members = response.data['team']
    console.log(members)
    teamData['teamMembers'] = members
})

export {
    teamData,
    TeamMember,
    TeamMemberLink
}
