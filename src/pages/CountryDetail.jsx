import NoData from '../assets/no-data.png'

import CountryDetailSkeleton from '../components/CountryDetailSkeleton.jsx'
import Footer from '../components/Footer.jsx'

import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'

import { CountryContext } from '../context/CountryContext.jsx'

function CountryDetail() {
    const { name } = useParams();
    const { countries, latestCountry, loading, updateLatestCountry } = useContext(CountryContext);
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
                <img src={NoData} alt="No Countries" className="h-24 w-auto m-5 md:h-36"/>
                <p className="text-xl font-bold md:text-2xl lg:text-3xl">No Country Found!</p>
            </div>              
        )
    }

    const { flags, name: countryName, capital, population, area, currencies, languages, independent } = country

    const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(countryName.common)}&output=embed`;
    
    return(
        <>
            <div className="bg-slate-100">
                <div className="px-4 py-7 lg:p-14">
                    <div className="mt-3 mb-2">
                        <h1 className="text-center text-lg font-bold p-1 mt-1 md:text-xl lg:text-xl xl:text-2xl">{countryName?.official}</h1>
                        <h2 className="text-center text-sm p-1 md:text-lg">({countryName?.common})</h2>
                    </div>
                    <div className="flex justify-center mx-4">
                        <img src={flags?.svg} alt={countryName?.common + " flag"} className="w-auto h-auto max-h-[17rem] mt-3 mb-5 p-5 sm:p-4 sm:h-[18rem] md:h-[20rem] lg:p-6"/>
                    </div>
                    <iframe 
                        src={googleMapsEmbedUrl} 
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                        className="w-full h-[30vh] sm:h-[40vh] lg:h-[60vh] mt-3 mb-10 rounded-2xl"
                    ></iframe>
                    <div className="border-2 px-3 py-2 divide-y divide-gray-300 rounded-xl border-black">
                            <div className="flex justify-between">
                                <h3 className="text-header">Population</h3>
                                <p className="text-data">{population?.toLocaleString() || 'N/A'}</p>
                            </div>
                            <div className="flex justify-between">
                                <h3 className="text-header">Land Area</h3>
                                <p className="text-data">{area?.toLocaleString()} km²</p>
                            </div>
                            <div className="flex justify-between">
                                <h3 className="text-header">Independent</h3>
                                <p className={`text-data font-semibold ${independent ? 'text-green-600' : 'text-red-500'}`}>{independent ? 'Yes' : 'No'}</p>
                            </div>
                    </div>
                    <div className="grid auto-cols-auto auto-rows-auto mt-3 gap-3">
                        <div className="border-2 px-3 py-2 rounded-xl border-black sm:col-start-1">
                            <div className="flex justify-center">
                                <h2 className="text-header">Capital</h2>
                            </div>
                            <ul className="p-3">
                                {Object.values(capital || {}).map((cap, index) => (
                                    <li key={index} className="text-list-data">{cap}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="border-2 px-3 py-2 rounded-xl border-black sm:col-start-2">
                            <div className="flex justify-center">
                                <h2 className="text-header">Currency</h2>
                            </div>
                            <ul className="p-3">
                                {Object.values(currencies || {}).map((currency, index) => (
                                    <li key={index} className="text-list-data">{currency.name} ({currency.symbol})</li>
                                ))}                        
                            </ul>
                        </div>
                        <div className="border-2 px-3 py-2 rounded-xl border-black sm:col-start-3">
                            <div className="flex justify-center">
                                <h2 className="text-header">Language</h2>
                            </div>
                            <ul className="p-3">
                                {Object.values(languages || {}).map((language, index) => (
                                    <li key={index} className="text-list-data">{language}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
               </div>
            </div>
            <Footer/>
        </>
        
    )
}

export default CountryDetail