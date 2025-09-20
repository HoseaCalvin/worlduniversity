import { useContext } from "react";
import { CountryContext } from "../context/CountryContext";
import { Link } from "react-router-dom"

function CountryCard(props) {
    const { updateLatestCountry } = useContext(CountryContext);

    const handleClick = () => {
        updateLatestCountry(props);
    };

    return(
        <Link to={`/search/${encodeURIComponent(props.name)}`} onClick={handleClick}>
            <div className="border-neutral-800 border-2 bg-gray-100 rounded-2xl p-2 shadow-lg max-w-[27rem] w-[9rem] h-[13.5rem] cursor-pointer hover:bg-gray-300 transition-colors duration-500 sm:p-4 sm:w-[13rem] sm:h-[15rem] md:w-[15rem] md:h-[17rem] lg:p-5 lg:w-[20rem] lg:h-[21rem] xl:w-[22rem] xl:h-[23rem]">
                <div className="flex flex-col justify-center h-full sm:justify-between">
                    <h1 className="text-xs font-bold text-center overflow-hidden text-ellipsis whitespace-nowrap h-auto sm:text-base md:text-lg xl:text-xl">{props.name}</h1>
                    <div className="flex justify-center items-center">
                        <img src={props.flag} alt={props.description} className="w-auto h-[6rem] max-w-full p-4 sm:p-5 md:p-5 lg:h-36"/>
                    </div>
                    <div className="block">
                        <hr className="border-2 my-0.5 md:my-2"/>
                        <div className="items-baseline">
                            <div className='flex justify-between p-1'>
                                <div className='text-left'>
                                    <p className='text-[0.5rem] py-1 sm:text-xs md:text-sm xl:text-base'>Continent </p>
                                    <p className='text-[0.5rem] py-1 overflow-hidden text-ellipsis whitespace-nowrap max-w-[6rem] sm:text-xs sm:max-w-[7rem] md:max-w-[7rem] md:text-sm xl:text-base'>Capital City </p>
                                    <p className='text-[0.5rem] py-1 sm:text-xs md:text-sm xl:text-base'>Population</p>
                                </div>
                                <div className='text-right'>
                                    <p className='text-[0.5rem] py-1 font-semibold sm:text-xs md:text-sm xl:text-base'>{props.region}</p>
                                    <p className='text-[0.5rem] py-1 font-semibold overflow-hidden text-ellipsis whitespace-nowrap max-w-[4rem] sm:text-xs sm:max-w-[5rem] md:max-w-[5rem] lg:max-w-[9rem] md:text-sm xl:text-base'>{props.capital?.[0] || `N/A`}</p>
                                    <p className='text-[0.5rem] py-1 font-semibold sm:text-xs md:text-sm xl:text-base'>{props.population}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export function CountryCardSkeleton() {
    return(
        <div className="animate-pulse">
            <div className="bg-gray-200 border-2 rounded-2xl p-2 shadow-lg max-w-[27rem] w-[9rem] h-[13.5rem] sm:p-4 sm:w-[13rem] sm:h-[15rem] md:w-[15rem] md:h-[16rem] lg:p-5 lg:w-[20rem] lg:h-[21rem] xl:w-[22rem] xl:h-[23rem]">
                <div className="flex flex-col justify-center sm:justify-between">
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-gray-300 h-5 w-[60%] my-2 p-1 lg:h-8"></div>
                        <div className="bg-gray-300 h-12 w-[80%] mt-3 mb-4 p-1 sm:h-12 md:h-16 lg:h-24"></div>
                    </div>
                    <div className="block">
                        <div className="bg-gray-300 h-[10px] w-[90%] mx-auto md:mt-2 lg:mt-3"></div>
                        <div className="mt-4 lg:mt-6">
                            <div className="bg-gray-300 h-3 w-[80%] my-1 mx-auto sm:h-[17px] md:h-[18px] lg:my-2 lg:h-[22px]"></div>
                            <div className="bg-gray-300 h-3 w-[80%] my-1 mx-auto sm:h-[17px] md:h-[18px] lg:my-2 lg:h-[22px]"></div>
                            <div className="bg-gray-300 h-3 w-[80%] my-1 mx-auto sm:h-[17px] md:h-[18px] lg:my-2 lg:h-[22px]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryCard