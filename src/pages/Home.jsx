import MapExploration from "../assets/home/map-exploration.jpg";
import Globe from "../assets/globe.png";
import { ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";

import { useCountries } from '../context/CountryContext.jsx';

import CountryCard from "../components/CountryCard.jsx";
import { CountryCardSkeleton } from "../components/CountryCard.jsx";
import ImageSlider from '../components/ImageSlider.jsx';
import Footer from '../components/Footer.jsx';

function Home() {
    const { countries, loading } = useCountries();

    const topCountries = ['Iceland', 'United Kingdom', 'Indonesia', 'Netherlands', 'Italy', 'United States'];

    return(
        <>
            <div className="relative flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${MapExploration})`}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="z-10 *:text-white *:text-center w-full p-5">
                    <h1 className="font-bold text-2xl py-3 sm:text-3xl md:text-4xl lg:py-5 lg:text-6xl">Explore the corners of the world!</h1>
                    <p className="text-xs p-1 text-justify md:text-sm lg:text-lg">Get to know what every nation across the world has to offer, from its gracious landmarks to its adored cuisine, by simply clicking country cards!</p>
                    <div className="p-6">
                        <Link to='/search' className="inline-flex items-center mx-auto gap-x-3 px-4 py-2 rounded-full w-fit text-black border-2 border-black bg-white text-xs hover:border-white hover:bg-gray-600 hover:text-white md:text-base lg:text-lg">
                            Explore 
                            <ArrowRight className="w-5 my-auto md:w-8"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full p-1 mt-[3.5rem] md:mt-[6rem]">
                <h1 className="text-center font-bold text-lg md:text-xl lg:text-3xl">Highlighted Countries</h1>
            </div>
            <ImageSlider/>

            { loading ? (
                <div className="flex justify-center items-center h-full mb-14">
                    <div className="grid grid-rows-2 grid-cols-2 place-items-center gap-x-5 gap-y-10 w-fit px-4 md:grid-cols-3">
                        <CountryCardSkeleton/>
                        <CountryCardSkeleton/>
                        <CountryCardSkeleton/>
                        <CountryCardSkeleton/>
                        <CountryCardSkeleton/>
                        <CountryCardSkeleton/>
                    </div>
                </div>
                ) : countries.length > 0 ? (
                    <div className="flex justify-center items-center h-full mb-14">
                        <div className="grid grid-rows-2 grid-cols-2 place-items-center gap-x-5 gap-y-10 w-fit px-4 md:grid-cols-3">
                            { countries.map((country, index) =>
                                topCountries.includes(country.name.common) && (
                                    <CountryCard
                                        key={country.cca3}
                                        name={country.name.common}
                                        flag={country.flags.svg}
                                        region={country.region}
                                        capital={country.capital}
                                        population={country.population}
                                    />
                                )
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col justify-center items-center h-screen w-full">
                        <img src={Globe} alt="No Countries" className="h-24 w-auto m-5 md:h-36"/>
                        <p className="text-xl font-bold md:text-2xl lg:text-3xl">No Countries Found!</p>
                    </div>
                )
            }
            <Footer/>
        </>
    )
}

export default Home