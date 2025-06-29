import ImageSlider from '../components/ImageSlider.jsx'
import Feature from '../components/Feature.jsx'
import Footer from '../components/Footer.jsx'

import Search from '../assets/features/search.png'
import Paper from '../assets/features/paper.png'
import Filter from '../assets/features/filter.png'
import Globe from '../assets/features/globe.png'

function Home() {
    return(
        <>
            <ImageSlider></ImageSlider>
            <div className="m-5 p-3 lg:m-8 lg:p-5">
                <hr className="border-4"/>
                <h1 className="font-bold text-xl text-center mt-3 mb-8 mx-5 p-3 lg:text-2xl xl:text-4xl">Features</h1>
                <div className="grid w-full lg:grid-cols-2 gap-x-10 gap-y-10 px-4">
                    <div className="flex sm:justify-center lg:justify-end">
                        <div className="w-full max-w-[40rem] sm:w-[20rem] md:w-[30rem]">
                            <Feature logo={Search} alt="Search" title="Faster Searching" description="Type the country name and watch the result pop up instantly!" />
                        </div>
                    </div>
                    <div className="flex sm:justify-center lg:justify-start">
                        <div className="w-full max-w-[40rem] sm:w-[20rem] md:w-[30rem]">
                            <Feature logo={Paper} alt="Paper" title="Get Detailed Facts" description="Learn in-depth facts about each stunning country!" />
                        </div>
                    </div>
                    <div className="flex sm:justify-center lg:justify-end">
                        <div className="w-full max-w-[40rem] sm:w-[20rem] md:w-[30rem]">
                            <Feature logo={Filter} alt="Filter" title="Ease of Filtering" description="Narrow down your search by applying filters!" />
                        </div>
                    </div>
                    <div className="flex sm:justify-center lg:justify-start">
                        <div className="w-full max-w-[40rem] sm:w-[20rem] md:w-[30rem]">
                            <Feature logo={Globe} alt="Globe" title="Geography Made Engaging" description="Learn geography in a new, revolutionized way!" />
                        </div>
                    </div> 
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home