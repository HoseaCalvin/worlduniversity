
function Feature({ logo, alt, title, description }) {
    return(
        <div className="flex flex-col justify-center items-center h-full max-h-[24rem] w-full shadow-xl hover:shadow-2xl rounded-2xl border-2 border-black transition-all duration-500 lg:p-6 p-3">            
            <img src={logo} alt={alt} className="w-[70px] sm:w-[90px] lg:w-[120px] h-auto pt-2 mt-4"/>
            <div className="p-1 m-1 lg:p-3 lg:m-3 text-center">
                <h1 className="xl:text-2xl lg:text-2xl md:text-lg text-md font-semibold p-2">{title}</h1>
                <p className="lg:text-md xl:text-lg text-sm text-gray-500 font-normal p-1">{description}</p>
            </div>
        </div>
    )
}

export default Feature