import Footer from "../components/Footer"

function About() {
    return(
        <>
            <div className="flex justify-around items-center mx-8 my-16">
                <p className="about-description">
                    Are you afraid of not being able to solve random geography quizzes on the street? Don't worry! <br/>
                    <strong>WorldUniversity</strong> brings a new innovation to redefine learning methods to grasp a solid understanding of geography.
                    Search every country in the world, ranging from recognized sovereign states to less-known territories, and delve deeper to learn interesting facts about them.
                    In addition, embedded maps are included to boost memorization of their location on maps, so you won't have to worry about plain maps.
                </p>
                <div className="flex flex-col justify-center items-center">
                    <img src="/src/assets/worlduniversity-logo.png" alt="WorldUniversity Logo" className="h-32 w-auto m-5"/>
                    <h1 className="about-logo-text">About Us</h1>
                </div>
            </div>

            <div className="flex justify-around items-center mx-8 my-16">
                <div className="flex flex-col justify-center items-center">
                    <img src="/src/assets/about/vision.png" alt="Vision Logo" className="h-32 w-auto m-5"/>
                    <h1 className="about-logo-text">Our Vision</h1>
                </div>
                <p className="about-description">
                    To become the leading global education platform that provides comprehensive information about countries worldwide, 
                    empowering students to expand their international knowledge and facilitating easy access to accurate and up-to-date country data.
                </p>
            </div>

            <div className="flex justify-around items-center mx-8 my-16">
                <p className="about-description">
                    Empower students with comprehensive, accurate, and accessible information about every country across the globe. 
                    We strive to create an intuitive and engaging platform that fosters global awareness, supports academic research, and encourages cross-cultural understanding. 
                    Through innovative technology and user-centered design, we aim to bridge the knowledge gap and provide learners with the tools to explore the world—one country at a time.
                </p>
                <div className="flex flex-col justify-center items-center">
                    <img src="/src/assets/about/mission.png" alt="Mission Logo" className="h-32 w-auto m-5"/>
                    <h1 className="about-logo-text">Our Mission</h1>
                </div>
            </div>

            <Footer/>
        </>
        
    )
}

export default About