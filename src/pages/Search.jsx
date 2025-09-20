import Globe from '../assets/globe.png';

import { useState } from 'react'

import { useCountries } from '../context/CountryContext.jsx';

import CountryCard from '../components/CountryCard.jsx';
import { CountryCardSkeleton } from '../components/CountryCard.jsx';
import Footer from '../components/Footer.jsx';

function CountrySearch() {
    const { countries, loading, error } = useCountries();

    const [searchResult, setSearchResult] = useState('');
    const [region, setRegion] = useState('');
    const [language, setLanguage] = useState('');
    const [independent, setIndependent] = useState('independent');

    const sortedCountries = [...countries].sort((a, b) => a.name.common.toLowerCase().localeCompare(b.name.common.toLowerCase()))

    const filteredCountries = sortedCountries.filter((country) => {
        const searchMatch = country.name.common.toLowerCase().includes(searchResult.toLowerCase());

        const regionMatch = region ? country.region.toLowerCase() === region.toLowerCase() : true;

        const countryLanguages = Object.values(country.languages || {}).map((lang) => lang.toLowerCase());

        let languageMatch = true;
        if(language === 'english') {
            languageMatch = countryLanguages.includes('english');
        } else if(language === 'nonenglish') {
            languageMatch = !countryLanguages.includes('english');
        }

        let independentMatch = true;
        if(independent === 'independent') {
            independentMatch = country.independent === true;
        } else if(independent === 'nonindependent') {
            independentMatch = country.independent === false;
        }

        return searchMatch && regionMatch && languageMatch && independentMatch
    })

    if(loading) {
        return(
            <div className="flex justify-center w-full">
                <div className="country-card-grid">
                    <CountryCardSkeleton/>
                    <CountryCardSkeleton/>
                    <CountryCardSkeleton/>
                    <CountryCardSkeleton/>
                    <CountryCardSkeleton/>
                    <CountryCardSkeleton/>
                </div>
            </div>
        )
    }

    if(error) {
        return <p>{error}</p>
    }

    return(
        <>
            <div className="bg-slate-700 py-4 px-7 shadow-xl md:py-6 md:px-9">
                <div className="flex flex-col justify-center items-center w-full">
                    <div className="w-full">
                        <input type="text" value={searchResult} onChange={(e) => setSearchResult(e.target.value)} className="px-2 py-1 rounded-lg text-[0.9rem] w-full sm:text-md md:py-2" placeholder='Search'/>
                    </div>
                    <div className="flex flex-col items-start w-full gap-1 mt-6 sm:gap-4 sm:flex-row sm:justify-end md:gap-7 md:mt-5">
                        <div className="w-full md:max-w-[150px]">
                            <select value={region} onChange={(e) => setRegion(e.target.value)} className="rounded-lg p-1 my-1 w-full text-xs sm:text-sm md:text-base">
                                <option value="">All Regions</option>
                                <option value="asia">Asia</option>
                                <option value="europe">Europe</option>
                                <option value="africa">Africa</option>
                                <option value="americas">Americas</option>
                                <option value="oceania">Oceania</option>
                                <option value="antarctic">Antartic</option>
                            </select>
                        </div>
                        <div className="w-full md:max-w-[210px]">
                            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="rounded-lg p-1 my-1 w-full text-xs sm:text-sm md:text-base">
                                <option value="">All Languages</option>
                                <option value="english">English-Speaking</option>
                                <option value="nonenglish">Non-English Speaking</option>
                            </select>
                        </div>
                        <div className="w-full md:max-w-[230px]">
                            <select value={independent} onChange={(e) => setIndependent(e.target.value)} className="rounded-lg p-1 my-1 w-full text-xs sm:text-sm md:text-base">
                                <option value="">All Independence Status</option>
                                <option value="independent">Independent</option>
                                <option value="nonindependent">Not Independent</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            { filteredCountries.length > 0 ? (
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
                            />
                        ))} 
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

export default CountrySearch