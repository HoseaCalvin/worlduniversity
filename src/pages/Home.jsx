import ImageSlider from '../components/ImageSlider.jsx'
import Feature from '../components/Feature.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
    return(
        <>
            <ImageSlider></ImageSlider>
            <div className='m-8 p-5'>
                <hr className='border-4'/>
                <h1 className='font-bold text-4xl text-center my-5 p-3'>Features</h1>
                <div className='grid lg:grid-cols-2 md:cols-1 grid-rows-2 gap-x-20 gap-y-11'>
                    <Feature logo="src/assets/features/search.png" alt="Search" title="Faster Searching" description="Type the country and watch the result pops up instantly!"/>
                    <Feature logo="src/assets/features/paper.png" alt="Paper" title="Get Detailed Facts" description="Explore some countries and find their mind-blowing facts no one knows!"/>
                    <Feature logo="src/assets/features/filter.png" alt="Filter" title="Ease of Filtering" description="Too many countries to explore? Don't worry! Filtering is here to save you!"/>
                    <Feature logo="src/assets/features/globe.png" alt="Globe" title="Geography Made Engaging" description="Did you know your geography knowledge improves as you use WorldUniversity? The more you spend time here, the better!"/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home