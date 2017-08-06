import * as style from 'ts-style'
const cardsContainer = () => {
    return style.create({
        textAlign: 'center',
        
    })
}
const darkCard = () =>{
    return style.create({
        display: 'inline-block',
        backgroundColor: '#d9d9d9',
        borderRadius: '6px',
        padding: '2px',
        width: '620px',
        margin: '20px'
    })
}

const lightCard = () => {
    return style.create({
        backgroundColor: 'white',
        margin: '2px',
        borderRadius: '6px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2
    })
}

export {
    darkCard,
    lightCard,
    cardsContainer
}
