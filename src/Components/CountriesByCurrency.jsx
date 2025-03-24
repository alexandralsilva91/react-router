import { useEffect, useState } from "react";
import './CountryList/CountriesList.css'
import SimpleCountryCard from "./SimpleCountryCard";

function CountriesByCurrency({ currency = 'eur' }) {

    const [countries, setCountries] = useState();

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/currency/${currency}`)
            .then((response) => response.json())
            .then((countriesOfThatCurrency) => {
                setCountries(countriesOfThatCurrency);
            })
    }, []);

    return (
        <>
            <h2 className="countrylist-subtitle">Other countries with the currency {currency}</h2>
            <div className="grid">
                {countries && countries.map((country) => (
                    <SimpleCountryCard key={country.name.common} country={country} />
                ))}
            </div>
        </>
    )
}

export default CountriesByCurrency;