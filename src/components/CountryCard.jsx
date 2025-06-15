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
            <div className='border-neutral-800 border-2 bg-gray-100 rounded-2xl p-5 shadow-lg max-w-[27rem] xl:w-[24rem] h-[25rem] cursor-pointer hover:bg-gray-300 transition-colors duration-500'>
                <div className="flex flex-col justify-between h-full">
                    <h1 className='text-[1.2rem] font-bold text-center'>{props.name}</h1>
                    <div className='flex justify-center'>
                        <img src={props.flag} alt={props.description} className='h-36 py-5 px-3'/>
                    </div>
                    <hr className='border-2 my-2'/>
                    <div className="items-baseline">
                        <div className='flex justify-between p-1'>
                            <div className='text-left'>
                                <p className='py-1'>Continent: </p>
                                <p className='py-1'>Capital City: </p>
                                <p className='py-1'>Population:</p>
                            </div>
                            <div className='text-right'>
                                <p className='py-1 font-semibold'>{props.region}</p>
                                <p className='py-1 font-semibold truncate'>{props.capital?.[0] || `N/A`}</p>
                                <p className='py-1 font-semibold'>{props.population}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CountryCard