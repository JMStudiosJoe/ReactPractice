import { Action } from 'redux'
import store from '../store/store'
import { imageData } from '../../models/imageData'
import { getFromBackend } from '../../api/api'
import { HANDLE_PARALLAX_DATA } from '../actions/actionTypes'

const getProjects = () => {
    const projects = '/projects/get_all'
    return getFromBackend(projects)

}

const getTeam = () => {
    const teamURL = '/team_members/get_team'
    return getFromBackend(teamURL)
}

const getParallaxImages = () => {
    const parallaxImagesURL = '/images/get_all_parallax'
    return getFromBackend(parallaxImagesURL)
}

export {
    getParallaxImages, getTeam, getProjects
}
