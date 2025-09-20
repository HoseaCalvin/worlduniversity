import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

export const CountryContext = createContext();

function CountryProvider({ children }) {
    const [countries, setCountries] = useState([]);
    const [latestCountry, setLatestCountry] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,capital,languages,flags,currencies,population,area,independent,region");
                setCountries(response.data);
            } catch (error) {
                console.error("Error fetching countries", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCountries();
    }, []);

    const updateLatestCountry = (country) => {
        setLatestCountry(country);
    };

    return (
        <CountryContext.Provider value={{ countries, latestCountry, updateLatestCountry, loading }}>
            {children}
        </CountryContext.Provider>
    );
};

export function useCountries() {
    return useContext(CountryContext);
}

export default CountryProvider