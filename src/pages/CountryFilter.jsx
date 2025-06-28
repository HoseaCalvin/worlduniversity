import NoData from '../assets/no-data.png'

import CountryCard from "../components/CountryCard.jsx"
import CountryCardLoading from '../components/CountryCardLoading.jsx'
import Footer from "../components/Footer.jsx"

import { CountryContext } from "../context/CountryContext.jsx"

import { useState, useContext } from 'react'

function CountryFilter() {
    const { countries, loading, error } = useContext(CountryContext)
    const [region, setRegion] = useState('')
    const [language, setLanguage] = useState('')
    const [independent, setIndependent] = useState('')

    const handleRegionChange = (e) => setRegion(e.target.value)
    const handleLanguageChange = (e) => setLanguage(e.target.value)
    const handleIndependentChange = (e) => setIndependent(e.target.value)

    const sortedCountries = [...countries].sort((a, b) => a.name.common.toLowerCase().localeCompare(b.name.common.toLowerCase()))

    const filteredCountries = sortedCountries.filter((country) => {
        const regionMatch = region ? country.region.toLowerCase() === region.toLowerCase() : true

        const countryLanguages = Object.values(country.languages || {}).map((lang) => lang.toLowerCase())
        let languageMatch = true
        if(language === 'english') {
            languageMatch = countryLanguages.includes('english')
        } else if(language === 'nonenglish') {
            languageMatch = !countryLanguages.includes('english')
        }

        let independentMatch = true
        if(independent === 'independent') {
            independentMatch = country.independent === true
        } else if(independent === 'nonindependent') {
            independentMatch = country.independent === false
        }

        return regionMatch && languageMatch && independentMatch
    })

    if(loading) {
        return(
            <CountryCardLoading/>
        )
    }

    if(error) return <p>Error!</p>
    
    return(
        <>
            <div className="bg-slate-700 py-4 shadow-xl sm:px-2 sm:py-5">
                <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row sm:justify-center flex-row overflow-auto items-start gap-1 sm:gap-2">
                    <div className="p-1 mx-1">
                        <select value={region} onChange={handleRegionChange} className="rounded-lg p-1 w-[10rem] text-xs sm:text-sm md:text-md lg:w-[14rem]">
                            <option value="">All Regions</option>
                            <option value="asia">Asia</option>
                            <option value="europe">Europe</option>
                            <option value="africa">Africa</option>
                            <option value="americas">Americas</option>
                            <option value="oceania">Oceania</option>
                            <option value="antarctic">Antartic</option>
                        </select>
                    </div>
                    <div className="p-1 mx-1">
                        <select value={language} onChange={handleLanguageChange} className="rounded-lg p-1 w-[10rem] text-xs sm:text-sm md:text-md lg:w-[14rem]">
                            <option value="">All Languages</option>
                            <option value="english">English-Speaking</option>
                            <option value="nonenglish">Non-English Speaking</option>
                        </select>
                    </div>
                    <div className="p-1 mx-1">
                        <select value={independent} onChange={handleIndependentChange} className="rounded-lg p-1 w-[10rem] text-xs sm:text-sm md:text-md lg:w-[14rem]">
                            <option value="">All Independence Status</option>
                            <option value="independent">Independent</option>
                            <option value="nonindependent">Not Independent</option>
                        </select>
                    </div>
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

export default CountryFilter