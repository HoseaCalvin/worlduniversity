import WorldUniversity from "../assets/worlduniversity-logo.png";
import Vision from "../assets/about/vision.png";
import Mission from "../assets/about/mission.png";

import Footer from "../components/Footer.jsx";

function About() {
    return(
        <>
        <div className="divide-y-4 px-8">
            <div className="about-layout">
                <div className="flex flex-col justify-center items-center">
                    <img src={WorldUniversity} alt="WorldUniversity Logo" className="h-24 w-auto m-3 md:m-5 lg:h-32"/>
                    <h1 className="about-logo-text">About Us</h1>
                </div>
                <div className="about-description-box w-full">
                    <p className="about-description">
                        <strong>WorldUniversity</strong> brings a new innovation to redefine learning methods to grasp a solid understanding of geography.
                        Search every country in the world, ranging from recognized sovereign states to less-known territories, and delve deeper to learn interesting facts about them.
                        In addition, embedded maps are included to boost memorization of their location on maps, so you won't have to worry about plain maps.
                    </p>
                </div>
            </div>
            <div className="about-layout">
                <div className="flex flex-col justify-center items-center">
                    <img src={Vision} alt="Vision Logo" className="h-24 w-auto m-3 md:m-5 lg:h-32"/>
                    <h1 className="about-logo-text">Our Vision</h1>
                </div>
                <div className="about-description-box w-full">
                    <p className="about-description">
                        To become the leading global education platform that provides comprehensive information about countries worldwide, 
                        empowering students to expand their international knowledge and facilitating easy access to accurate and up-to-date country data.
                    </p>
                </div>
            </div>
            <div className="about-layout">
                <div className="flex flex-col justify-center items-center">
                    <img src={Mission} alt="Mission Logo" className="h-24 w-auto m-3 md:m-5 lg:h-32"/>
                    <h1 className="about-logo-text">Our Mission</h1>
                </div>
                <div className="about-description-box w-full">
                    <p className="about-description">
                         Empower students with comprehensive, accurate, and accessible information about every country across the globe. 
                        We strive to create an intuitive and engaging platform that fosters global awareness, supports academic research, and encourages cross-cultural understanding. 
                        Through innovative technology and user-centered design, we aim to bridge the knowledge gap and provide learners with the tools to explore the world—one country at a time.
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default About