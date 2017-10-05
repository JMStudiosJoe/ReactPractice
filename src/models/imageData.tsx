import { getParallaxImages } from '../redux/actions/initialActions'

interface Image {
    image_url: string
}
const imageData = {
    'imageData':[]
}
getParallaxImages().then( (response) => {
    const parallaxImages = response.data['parallax_images']
    parallaxImages.map( (image: Image) => {
        imageData.imageData.push({
            'active': false,
            'image': image.image_url
        })
    })
})

export { 
    imageData
}
