import { getProjects } from '../redux/actions/initialActions'

const projectData = {
    "projects":[]
}

getProjects().then( (response) => {
    const projects = response.data['projects']
    console.log(projects)
    projectData['projects'] = projects
})

export {
    projectData
}
