
function Feature(props) {
    return(
        <div className="m-5 p-2 flex flex-col justify-center items-center shadow-xl rounded-md 
                    border-2 border-black transition-all hover:shadow-2xl duration-500">
            <img src={props.logo} alt={props.alt} className="w-[150px] h-auto pt-2 mt-4"/>
            <div className="p-3 m-3 text-center">
                <h1 className="xl:text-2xl lg:text-2xl md:text-lg sm:text-md font-semibold p-2">{props.title}</h1>
                <p className="text-md text-gray-500 font-normal p-1">{props.description}</p>
            </div>
        </div>
    )
}

export default Feature