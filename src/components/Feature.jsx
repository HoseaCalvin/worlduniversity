
function Feature({ logo, alt, title, description }) {
    return(
        <div className="flex flex-col justify-between items-center h-full w-full shadow-xl hover:shadow-2xl rounded-2xl border-2 border-black transition-all duration-500 p-6">            <img src={logo} alt={alt} className="w-[150px] h-auto pt-2 mt-4"/>
            <div className="p-3 m-3 text-center">
                <h1 className="xl:text-2xl lg:text-2xl md:text-lg sm:text-md font-semibold p-2">{title}</h1>
                <p className="text-md text-gray-500 font-normal p-1">{description}</p>
            </div>
        </div>
    )
}

export default Feature