import NoData from '../assets/no-data.png'

import CountryCard from '../components/CountryCard.jsx'
import CountryCardLoading from '../components/CountryCardLoading.jsx'
import Footer from '../components/Footer.jsx'

import { CountryContext } from '../context/CountryContext.jsx'

import { useState, useContext } from 'react'

function CountrySearch() {
    const {countries, loading, error} = useContext(CountryContext)
    const [searchResult, setSearchResult] = useState('')

    const sortedCountries = [...countries].sort((a, b) => a.name.common.toLowerCase().localeCompare(b.name.common.toLowerCase()))

    const filteredCountries = sortedCountries.filter((country) => (
        country.name.common.toLowerCase().includes(searchResult.toLowerCase())
    ))

    const handleResult = (e) => {
        setSearchResult(e.target.value)
    }

    if(loading) {
        return(
            <CountryCardLoading/>
        )
    }

    if(error) return <p>{error}</p>

    return(
        <>
            <div className="bg-slate-700 p-4 shadow-xl">
                <div className="flex justify-center items-center">
                    <input type="text" value={searchResult} onChange={handleResult} className='px-2 py-1 rounded-lg text-[0.8rem] w-[50%] max-w-[50rem] sm:text-md md:py-2 md:w-[40%] md:text-md lg:w-[45%] lg:text-lg xl:w-[50%]' placeholder='Search'/>
                </div>
            </div>
            {filteredCountries.length > 0 ? (
                <div className="flex justify-center w-full">
                    <div className="country-card-grid">
                        {filteredCountries.map((country) => (
                            <CountryCard
                                key={country.cca3}
                                name={country.name.common}
                                flag={country.flags.svg}
                                region={country.region}
                                capital={country.capital}
                                population={country.population}
                                description={country.name.common}
                            />
                        ))} 
                    </div> 
                </div>
                ) : (
                        <div className="flex flex-col justify-center items-center h-screen w-full">
                            <img src={NoData} alt="No Countries" className="h-24 w-auto m-5 md:h-36"/>
                            <p className="text-xl font-bold md:text-2xl lg:text-3xl">No Countries Found!</p>
                        </div>
                    )
            }
            <Footer/>
        </>
    )
}

export default CountrySearch