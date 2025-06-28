import WorldUniversity from '../assets/worlduniversity-logo.png'
import Vision from '../assets/about/vision.png'
import Mission from '../assets/about/mission.png'
import Warning from '../assets/about/exclamation-mark.png';

import Footer from "../components/Footer.jsx"

function About() {
    return(
        <div>
            <div className="flex flex-col justify-around items-center flex-wrap gap-10 max-w-screen-xl mx-auto px-6 my-14 md:my-20 md:flex-row-reverse">
                <div className="flex flex-col justify-center items-center">
                    <img src={WorldUniversity} alt="WorldUniversity Logo" className="h-24 w-auto m-3 md:m-5 lg:h-32"/>
                    <h1 className="about-logo-text">About Us</h1>
                </div>
                <div className="about-description-box max-w-[800px]">
                    <p className="about-description">
                        <strong>WorldUniversity</strong> brings a new innovation to redefine learning methods to grasp a solid understanding of geography.
                        Search every country in the world, ranging from recognized sovereign states to less-known territories, and delve deeper to learn interesting facts about them.
                        In addition, embedded maps are included to boost memorization of their location on maps, so you won't have to worry about plain maps.
                    </p>
                </div>
            </div>
            <div className="flex justify-around items-center flex-wrap gap-10 max-w-screen-xl mx-auto px-6 my-14 md:my-20">
                <div className="flex flex-col justify-center items-center">
                    <img src={Vision} alt="Vision Logo" className="h-24 w-auto m-3 md:m-5 lg:h-32"/>
                    <h1 className="about-logo-text">Our Vision</h1>
                </div>
                <div className="about-description-box max-w-[800px]">
                    <p className="about-description">
                        To become the leading global education platform that provides comprehensive information about countries worldwide, 
                        empowering students to expand their international knowledge and facilitating easy access to accurate and up-to-date country data.
                    </p>
                </div>
            </div>
            <div className="flex justify-around items-center flex-wrap gap-10 max-w-screen-xl mx-auto px-6 my-14 md:my-20 md:flex-row-reverse">
                <div className="flex flex-col justify-center items-center">
                    <img src={Mission} alt="Mission Logo" className="h-24 w-auto m-3 md:m-5 lg:h-32"/>
                    <h1 className="about-logo-text">Our Mission</h1>
                </div>
                <div className="about-description-box max-w-[800px]">
                    <p className="about-description">
                         Empower students with comprehensive, accurate, and accessible information about every country across the globe. 
                        We strive to create an intuitive and engaging platform that fosters global awareness, supports academic research, and encourages cross-cultural understanding. 
                        Through innovative technology and user-centered design, we aim to bridge the knowledge gap and provide learners with the tools to explore the world—one country at a time.
                    </p>
                </div>
            </div>
            <hr className="border-4 mx-8"/>
            <div className="flex justify-center items-center mt-8 mb-7">
                <img src={Warning} alt="Warning Logo" className="h-12 w-auto my-3 mx-4 sm:h-14 md:mx-10 lg:h-16"/>
                <h1 className="text-lg text-center font-bold p-1 m-1 lg:p-2 md:text-xl lg:text-2xl xl:text-3xl">Important</h1>
                <img src={Warning} alt="Warning Logo" className="h-12 w-auto my-3 mx-4 sm:h-14 md:mx-10 lg:h-16"/>
            </div>
            <div className="border-2 border-black shadow-xl m-6 p-5 rounded-xl max-w-[900px] lg:mx-auto">
                <p className="text-sm text-center md:text-lg lg:text-xl">
                    Some countries may contain outdated or inaccurate data. Please consider double-checking vital information.
                </p>
            </div>
            <div className="mt-14 mb-10 sm:mx-auto">
                <h2 className="text-lg text-center font-bold p-1 sm:text-xl lg:text-2xl">Data Source</h2>
                <p className="text-sm text-center font-semibold p-1 sm:text-lg lg:text-xl">REST Countries v3.1</p>
            </div>
            <Footer/>
        </div>
    )
}

export default About