import Waterfall from '../assets/slideshow/iceland-waterfall.jpg'
import TowerBridge from '../assets/slideshow/england-towerbridge.jpg'
import Temple from '../assets/slideshow/indonesia-temple.jpg'
import Amsterdam from '../assets/slideshow/netherlands-amsterdam.jpg'
import Colosseum from '../assets/slideshow/italy-colosseum.jpg'
import LosAngeles from '../assets/slideshow/us-losangeles.jpg'

import { useState } from 'react'

const slideImages = [
    {
        url: Waterfall,
        title: 'Magma and Frostbite',
        country: 'Iceland',
        description: 'Wander through the snow-blanketed plains or visit the grand volcanoes.'
    },
    {
        url: TowerBridge,
        title: 'Home of the Victors',
        country: 'United Kingdom',
        description: 'Indulge yourself by exploring the aesthetic English architecture.'
    },
    {
        url: Temple,
        title: 'Paradise Awaits',
        country: 'Indonesia',
        description: 'Witness the resplendent tropical views the nature has in store.'
    },
    {
        url: Amsterdam,
        title: 'Wonders Below The Sea',
        country: 'Netherlands',
        description: 'Cycle through the cities or row a boat through the canals.'
    },
    {
        url: Colosseum,
        title: 'Heritage of the Romans',
        country: 'Italy',
        description: 'Just ensure that you do everything like the Romans did.'
    },
    {
        url: LosAngeles,
        title: 'Land of the Opportunities',
        country: 'United States',
        description: 'Live your life with your \'American Dream\'.'
    }
]

function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const slidePrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slideImages.length - 1 : currentIndex - 1 
        setCurrentIndex(newIndex)
    }

    const slideNext = () => {
        const isLastSlide = currentIndex === slideImages.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return(
        <div className="relative overflow-hidden w-full h-screen">
            <div className="flex transition-transform duration-700 ease-in-out" style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                {slideImages.map((slide, index) => (
                    <div key={index} className="min-w-full min-h-[100vh] bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${slide.url})`}}>
                        <div className="absolute bottom-12 mx-6">
                            <h1 className="text-xl text-white font-bold p-1 md:text-4xl md:p-2 lg:text-2xl xl:text-4xl">{slide.title}</h1>
                            <h2 className="text-sm text-white p-1 font-bold md:p-2 lg:text-xl xl:text-2xl">{slide.country}</h2>
                            <p className="text-sm text-white p-1 md:p-2 lg:text-xl xl:text-2xl">{slide.description}</p>
                        </div> 
                    </div>
                ))}  
            </div>
            <div className='left-4 slideshow-button' onClick={slidePrevious}>&#8592;</div>
            <div className='right-4 slideshow-button' onClick={slideNext}>&#8594;</div>            
        </div>
    )
}


export default ImageSlider