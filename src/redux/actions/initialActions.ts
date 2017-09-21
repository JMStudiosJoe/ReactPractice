import { Action } from 'redux'
import store from '../store/store'
import { imageData } from '../../models/imageData'
import { getFromBackend } from '../../api/api'
import { HANDLE_PARALLAX_DATA } from '../actions/actionTypes'

const getProjects = () => {

}

const getTeam = () => {

}
interface Image {
    image_url: string
}

const getParallaxImages = () => {
    const parallaxImagesURL = '/images/get_all_parallax'
    getFromBackend(parallaxImagesURL).then( (response) => {
        const parallaxImages = response.data['parallax_images']
        parallaxImages.map( (image: Image) => {
            imageData.imageData.push({
                'active': false,
                'image': image.image_url
            })
        })
    })
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
