import { Action } from 'redux'
import store from '../store/store'
import { imageData } from '../../models/imageData'
import { getFromBackend } from '../../api/api'
import { HANDLE_PARALLAX_DATA } from '../actions/actionTypes'

const getProjects = () => {

}

const getTeam = () => {

}

const getParallaxImages = () => {
    const parallaxImagesURL = '/images/get_all_parallax'
    return getFromBackend(parallaxImagesURL)
}

const parallaxImagesSuccess = (initialData: any) => {
    return {
        type: HANDLE_PARALLAX_DATA,
        payload: initialData
    }
}

export {
    getParallaxImages, getTeam, getProjects
}
