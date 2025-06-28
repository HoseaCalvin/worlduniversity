import { useContext } from "react";
import { CountryContext } from "../context/CountryContext";
import { Link } from "react-router-dom"

function CountryCard(props) {
    const { updateLatestCountry } = useContext(CountryContext);

    const handleClick = () => {
        updateLatestCountry(props);
    };

    return(
        <Link to={`/search/${encodeURIComponent(props.name)}`} className="h-0" onClick={handleClick}>
            <div className="border-neutral-800 border-2 bg-gray-100 rounded-2xl p-2 shadow-lg max-w-[27rem] w-[9rem] h-[9rem] cursor-pointer hover:bg-gray-300 transition-colors duration-500 sm:p-4 sm:w-[13rem] sm:h-[15rem] md:w-[15rem] md:h-[16rem] lg:p-5 lg:w-[20rem] lg:h-[21rem] xl:w-[22rem] xl:h-[23rem]">
                <div className="flex flex-col justify-center h-full sm:justify-between">
                    <h1 className="text-xs font-bold text-center overflow-hidden text-ellipsis whitespace-nowrap h-auto sm:text-md md:text-lg xl:text-2xl">{props.name}</h1>
                    <div className="flex justify-center items-center">
                        <img src={props.flag} alt={props.description} className="w-auto h-[6rem] max-w-full p-4 sm:p-5 md:p-5 lg:h-36"/>
                    </div>
                    <div className="hidden sm:block">
                        <hr className="border-2 my-0.5 md:my-2"/>
                        <div className="items-baseline">
                            <div className='flex justify-between p-1'>
                                <div className='text-left'>
                                    <p className='text-[0.6rem] py-1 sm:text-xs md:text-md xl:text-lg'>Continent: </p>
                                    <p className='text-[0.6rem] py-1 overflow-hidden text-ellipsis whitespace-nowrap max-w-[6rem] sm:text-xs sm:max-w-[7rem] md:max-w-[7rem] md:text-md xl:text-lg'>Capital City: </p>
                                    <p className='text-[0.6rem] py-1 sm:text-xs md:text-md xl:text-lg'>Population:</p>
                                </div>
                                <div className='text-right'>
                                    <p className='text-[0.6rem] py-1 font-semibold sm:text-xs md:text-md xl:text-lg'>{props.region}</p>
                                    <p className='text-[0.6rem] py-1 font-semibold overflow-hidden text-ellipsis whitespace-nowrap max-w-[4rem] sm:text-xs sm:max-w-[5rem] md:max-w-[5rem] lg:max-w-[9rem] md:text-md xl:text-lg'>{props.capital?.[0] || `N/A`}</p>
                                    <p className='text-[0.6rem] py-1 font-semibold sm:text-xs md:text-md xl:text-lg'>{props.population}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CountryCard