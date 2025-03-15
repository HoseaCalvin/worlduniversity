import CountryCard from "../components/CountryCard"
import CountryCardSkeleton from "../components/CountryCardSkeleton"
import Footer from "../components/Footer"
import { useState, useContext } from 'react'
import { CountryContext } from "../context/CountryContext"

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

    if(error) return <p>Error!</p>
    
    return(
        <>
            <div className="bg-slate-700 p-4">
                <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col items-start gap-2">
                    <div className="p-1">
                        <select value={region} onChange={handleRegionChange} className="rounded-sm p-1">
                            <option value="">All Regions</option>
                            <option value="asia">Asia</option>
                            <option value="europe">Europe</option>
                            <option value="africa">Africa</option>
                            <option value="americas">Americas</option>
                            <option value="oceania">Oceania</option>
                            <option value="antarctic">Antartic</option>
                        </select>
                    </div>
                    <div className="p-1">
                        <select value={language} onChange={handleLanguageChange} className="rounded-sm p-1">
                            <option value="">All Languages</option>
                            <option value="english">English-Speaking</option>
                            <option value="nonenglish">Non-English Speaking</option>
                        </select>
                    </div>
                    <div className="p-1">
                        <select value={independent} onChange={handleIndependentChange} className="rounded-sm p-1">
                            <option value="">All Independence Status</option>
                            <option value="independent">Independent</option>
                            <option value="nonindependent">Not Independent</option>
                        </select>
                    </div>
                </div>
            </div>
                {filteredCountries.length > 0 ? (
                    <div className="grid lg:grid-cols-3 gap-10 m-6 p-3 sm:grid-cols-2">
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
                    ) : (
                            <div className="flex flex-col justify-center items-center h-screen w-full">
                                <img src="/src/assets/no-data.png" alt="No Countries" className="h-36 w-auto m-5"/>
                                <p className="text-3xl font-bold">No Countries Found!</p>
                            </div>
                        )
                }
            <Footer/>
        </>

    )
}

export default CountryFilter