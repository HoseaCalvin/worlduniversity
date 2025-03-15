import CountryCard from '../components/CountryCard.jsx'
import CountryCardSkeleton from '../components/CountryCardSkeleton.jsx'
import Footer from '../components/Footer.jsx'
import { useState, useContext } from 'react'
import { CountryContext } from '../context/CountryContext.jsx'

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
            <div className="grid lg:grid-cols-3 gap-10 m-6 p-3 sm:grid-cols-2 ">
                <CountryCardSkeleton/>
                <CountryCardSkeleton/>
                <CountryCardSkeleton/>
                <CountryCardSkeleton/>
                <CountryCardSkeleton/>
                <CountryCardSkeleton/>
            </div>
        )
    }

    if(error) return <p>{error}</p>

    return(
        <>
            <div className='bg-slate-700 p-4'>
                <div className='flex justify-center items-center'>
                    <input type="text" value={searchResult} onChange={handleResult} className='w-[40%] h-[10%] p-2 rounded-lg' placeholder='Search'/>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-10 m-6 p-3 sm:grid-cols-2'>
                {filteredCountries.map((country) => (
                        <CountryCard 
                            key={country.cca3}
                            name={country.name.common}
                            flag={country.flags.svg}
                            description={country.name.common}
                            region={country.region}
                            capital={country.capital}
                            population={country.population}   
                        />
                    )
                    )
                }
            </div>
            <Footer/>
        </>
    )
}

export default CountrySearch