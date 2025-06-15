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
            <div className="m-8 p-5">
                <hr className="border-4"/>
                <h1 className="font-bold text-4xl text-center my-5 p-3">Features</h1>
                <div className="grid w-full lg:grid-cols-2 md:grid-cols-1 gap-x-10 gap-y-10 px-4">
                    <div className="flex justify-end">
                        <div className="w-full max-w-[40rem]">
                            <Feature logo={Search} alt="Search" title="Faster Searching" description="Type the country and watch the result pops up instantly!" />
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div className="w-full max-w-[40rem]">
                            <Feature logo={Paper} alt="Paper" title="Get Detailed Facts" description="Explore some countries and find their mind-blowing facts no one knows!" />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="w-full max-w-[40rem]">
                            <Feature logo={Filter} alt="Filter" title="Ease of Filtering" description="Too many countries to explore? Don't worry! Filtering is here to save you!" />
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div className="w-full max-w-[40rem]">
                            <Feature logo={Globe} alt="Globe" title="Geography Made Engaging" description="Did you know your geography knowledge improves as you use WorldUniversity? The more you spend time here, the better!" />
                        </div>
                    </div> 
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home