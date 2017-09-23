const autumTrees = require('../images/autum_trees.jpg')
const jmstudios = require('../images/jmstudiosbackground.jpg')
const milkyWay = require('../images/milky-way.jpg')
const bambooForest = require('../images/bamboo-forest-by-rolf-hartbrich.jpg')
const space = require('../images/space-background.jpg')
const waterDrop = require('../images/water-drop-wallpaper-3.jpg')
const earthAtmos = require('../images/space-earth-stratosphere-wallpaper-1.jpg')
const bridgeOverRiver = require('../images/bridge-over-the-river.jpg')
const mountains = require('../images/mountains_landscape.jpg')

import { getParallaxImages } from '../redux/actions/initialActions'

interface Image {
    image_url: string
}
const imageData = {
    'imageData':[]
}
getParallaxImages().then( (response) => {
    const parallaxImages = response.data['parallax_images']
    console.log('im back with images!!!')
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

