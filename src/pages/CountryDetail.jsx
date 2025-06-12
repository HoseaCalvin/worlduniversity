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
                    <table className='text-left w-[100%] border-4 mt-5 border-neutral-400'>
                        <tbody>
                            <tr className='border-2 border-neutral-400'>
                                <th className='table-header'>Capital City</th>
                                <td className='table-data'>{capital?.[0] || 'N/A'}</td>
                            </tr>
                            <tr className='border-2 border-neutral-400'>
                                <th className='table-header'>Official Languages</th>
                                <td className='table-data'>
                                    <ul>
                                        {Object.values(languages || {}).map((language, index) => (
                                            <li key={index}>{language}</li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                            <tr className='border-2 border-neutral-400'>
                                <th className='table-header'>Currency</th>
                                <td className='table-data'> 
                                    <ul>
                                        {Object.values(currencies || {}).map((currency, index) => (
                                            <li key={index}>{currency.name} ({currency.symbol})</li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                            <tr className='border-2 border-neutral-400'>
                                <th className='table-header'>Population</th>
                                <td className='table-data'>{population}</td>
                            </tr>
                            <tr className='border-2 border-neutral-400'>
                                <th className='table-header'>Land Area</th>
                                <td className='table-data'>{area} km²</td>
                            </tr>
                            <tr className='border-2 border-neutral-400'>
                                <th className='table-header'>Independence Status</th>
                                <td className='table-data'>{independent ? 'Yes' : 'No'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer/>
        </>
        
    )
}

export default CountryDetail