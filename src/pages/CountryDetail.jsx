import CountryDetailSkeleton from '../components/CountryDetailSkeleton'
import Footer from '../components/Footer'

import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'

import { CountryContext } from '../context/CountryContext'

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
    if (!country) return <p className="flex justify-center items-center h-[100vh] text-4xl font-bold">Country not found.</p>;

    const { flags, name: countryName, capital, population, area, currencies, languages, independent } = country

    const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(countryName.common)}&output=embed`;
    
    return(
        <>
            <div className='bg-slate-100'>
                <div className='p-14'>
                    <h1 className="text-center xl:text-5xl lg:text-5xl md:text-3xl sm:text-2xl text-2xl font-bold p-1 m-1">{countryName?.official}</h1>
                    <h2 className='text-center xl:text-xl lg:text-xl md:text-md sm:text-sm p-1 m-1'>({countryName?.common})</h2>
                    <div className="flex justify-center mx-4">
                        <img src={flags?.svg} alt="" className='h-[18rem] mx-5 my-10'/>
                    </div>
                    <iframe 
                        src={googleMapsEmbedUrl} 
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                        className="w-full h-[30vh] sm:h-[40vh] lg:h-[60vh] mt-3 mb-10 rounded-lg"
                    ></iframe>
                    <div className="divide-y divide-gray-300 mx-6 sm:mx-14 mt-10">
                        <div className="py-4">
                            <h3 className="text-header">🏛️ Capital</h3>
                            <ul>
                                {Object.values(capital || {}).map((cap, index) => (
                                    <li key={index} className="text-data">{cap}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="py-4">
                            <h3 className="text-header">🗣️ Languages</h3>
                            <ul>
                                {Object.values(languages || {}).map((language, index) => (
                                    <li key={index} className="text-data">{language}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="py-4">
                            <h3 className="text-header">💱 Currency</h3>
                            <ul>
                                {Object.values(currencies || {}).map((currency, index) => (
                                    <li key={index} className="text-data">{currency.name} ({currency.symbol})</li>
                                ))}                        
                            </ul>
                        </div>
                        <div className="py-4">
                            <h3 className="text-header">👥 Population</h3>
                            <p className="text-data">{population?.toLocaleString() || 'N/A'}</p>
                        </div>
                        <div className="py-4">
                            <h3 className="text-header">🗺️ Land Area</h3>
                            <p className="text-data">{area?.toLocaleString()} km²</p>
                        </div>
                        <div className="py-4">
                            <h3 className="text-header">🎌 Independent</h3>
                            <p className={`text-data font-semibold ${independent ? 'text-green-600' : 'text-red-500'}`}>{independent ? 'Yes' : 'No'}</p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
        
    )
}

export default CountryDetail