import Globe from "../assets/globe.png";

import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { CountryContext } from "../context/CountryContext.jsx";

import Footer from "../components/Footer.jsx";

function CountryDetail() {
    const { countries, latestCountry, loading, updateLatestCountry } = useContext(CountryContext);
    const { name } = useParams();

    const [country, setCountry] = useState(null);
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        const countryName = decodeURIComponent(name);

        if (latestCountry?.name?.common === countryName) {
            setCountry(latestCountry);
            return;
        }

        const foundCountry = countries.find(
            (c) => c.name.common.toLowerCase() === decodeURIComponent(name).toLowerCase()
        );

        if(foundCountry) {
            setCountry(foundCountry);
            updateLatestCountry(foundCountry)
        } else {
            const fetchCountry = async () => {
                try {
                    setIsFetching(true);
                    const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
                    if (response.data.length) {
                        const countryData = response.data[0];
                        setCountry(countryData);
                        updateLatestCountry(countryData);
                    }
                } catch (error) {
                    console.log("Error fetching country data: [" + error + "] (Please refresh!)");
                } finally {
                    setIsFetching(false);
                }
            };
            fetchCountry();
        }
        
    }, [name, countries, latestCountry, updateLatestCountry]);

    if (loading || isFetching) {
        return (
            <CountryDetailSkeleton/>
        )
    }
    
    if (!country) {
        return(
            <div className="flex flex-col justify-center items-center h-screen w-full">
                <img src={Globe} alt="No Countries" className="h-24 w-auto m-5 md:h-36"/>
                <p className="text-xl font-bold md:text-2xl lg:text-3xl">No Country Found!</p>
            </div>              
        )
    }

    const { flags, name: countryName, capital, area, currencies, languages, independent } = country

    const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(countryName.common)}&output=embed`;
    
    return(
        <>
            <div className="px-5 py-7 lg:p-14">
                <div className="mt-3 mb-2 space-y-5">
                    <div>
                        <h1 className="text-sm font-bold sm:text-base lg:text-lg xl:text-2xl">{countryName?.official}</h1>
                        <h2 className="text-xs sm:text-sm md:text-base">{countryName?.common}</h2>
                    </div>
                    <div>
                        { independent ? "" : <span className="py-1 px-5 text-xs bg-white font-semibold border border-red-500 text-red-500 shadow-md rounded-full md:text-sm">Non-sovereign</span> }
                    </div>
                </div>
                <div className="grid gap-4 my-4 grid-rows-[180px_140px_140px] grid-cols-2 md:my-8 md:grid-rows-[220px_150px] md:grid-cols-3 md:gap-5 lg:gap-7">
                    <div className="country-detail-grid row-start-1 col-start-1 col-span-2 place-items-center p-5 md:col-span-1 md:p-7">
                        <img src={flags?.svg} alt={countryName?.common + " flag"} className="h-full w-auto max-h-[17rem] object-contain sm:max-h-[18rem] md:max-h-[20rem]"/>
                    </div>
                    <div onWheel={(e) => e.currentTarget.scrollLeft += e.deltaY} className="country-detail-grid scrollbar-hide row-start-2 col-start-1 p-2 overflow-y-auto md:p-3">
                        <p className="text-header">Capital City</p>
                        {Object.values(capital).length === 1 ? (
                            <div className="flex justify-center items-center h-[75%]">
                                <p className="text-base text-center sm:text-xl md:text-2xl lg:text-3xl">
                                    {Object.values(capital)}
                                </p>
                            </div>
                        ) : (
                            <ul className="mt-2 overflow-x-hidden overflow-y-auto">
                                {Object.values(capital).map((cap, index) => (
                                    <li key={index} className="text-list-data">
                                        {cap}
                                    </li>
                                ))}
                            </ul>
                        )} 
                    </div>
                    <div onWheel={(e) => e.currentTarget.scrollLeft += e.deltaY} className="country-detail-grid scrollbar-hide row-start-3 col-start-2 p-2 overflow-y-auto md:col-start-2 md:row-span-2 md:p-3">
                        <p className="text-header">Language</p>
                        {Object.values(languages).length === 1 ? (
                            <div className="flex justify-center items-center h-[80%]">
                                <p className="text-base text-center sm:text-xl md:text-3xl lg:text-4xl">
                                    {Object.values(languages)}
                                </p>
                            </div>
                        ) : (
                            <ul className="mt-2 overflow-x-hidden overflow-y-auto">
                                {Object.values(languages).map((language, index) => (
                                    <li key={index} className="text-list-data">
                                        {language}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="country-detail-grid row-start-3 col-start-1 p-2 md:row-start-1 md:col-start-3 md:p-3">
                        <p className="text-header">Land Area</p>
                        <div className="flex justify-center items-center h-[75%]">
                            <p className="text-base sm:text-xl md:text-3xl lg:text-4xl">{area?.toLocaleString()} km²</p> 
                        </div>
                    </div>
                    <div className="country-detail-grid row-start-2 col-start-2 p-2 md:col-start-3 md:p-3">
                        <p className="text-header">Currency</p>
                        {Object.values(currencies).length === 1 ? (
                            <div className="flex justify-center items-center h-[75%]">
                                <p className="text-base text-center sm:text-xl md:text-2xl">
                                    {Object.values(currencies)[0].name} ({Object.values(currencies)[0].symbol})
                                </p>
                            </div>
                        ) : (
                            <ul className="mt-2 overflow-x-hidden overflow-y-auto">
                                {Object.values(currencies).map((currency, index) => (
                                    <li key={index} className="text-list-data">
                                        {currency.name} ({currency.symbol})
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className="country-detail-grid w-full max-h-[800px] h-full p-3 md:p-4 lg:p-7">
                    <iframe 
                        src={googleMapsEmbedUrl} 
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                        className="w-full h-[30vh] sm:h-[40vh] lg:h-[60vh] rounded-2xl"
                    ></iframe>
                </div>
            </div>
            <Footer/>
        </>
        
    )
}

function CountryDetailSkeleton() {
    return(
        <div className="animate-pulse px-5 py-7 lg:p-12">
            <div className="space-y-2 lg:space-y-5">
                <div className="bg-gray-300 w-[150px] h-8 rounded-lg md:w-[220px] lg:w-[300px]"></div>
                <div className="bg-gray-300 w-[80px] h-5 rounded-lg md:w-[150px] lg:w-[150px]"></div>
            </div>
            <div className="grid gap-4 my-4 grid-rows-[180px_140px_140px] grid-cols-2 md:my-8 md:grid-rows-[220px_150px] md:grid-cols-3 md:gap-5 lg:gap-7">
                <div className="bg-gray-300 rounded-xl row-start-1 col-start-1 col-span-2 place-items-center p-5 md:col-span-1 md:p-7"></div>
                <div className="bg-gray-300 rounded-xl row-start-2 col-start-1 p-2 md:p-3"></div>
                <div className="bg-gray-300 rounded-xl row-start-3 col-start-2 p-2 md:col-start-2 md:row-span-2 md:p-3"></div>
                <div className="bg-gray-300 rounded-xl row-start-3 col-start-1 p-2 md:row-start-1 md:col-start-3 md:p-3"></div>
                <div className="bg-gray-300 rounded-xl row-start-2 col-start-2 p-2 md:col-start-3 md:p-3"></div>
            </div>
            <div className="bg-gray-300 rounded-xl w-full h-[150px] p-3 md:h-[200px] md:p-4 lg:h-[300px] lg:p-7"></div>
        </div>
    )
}

export default CountryDetail