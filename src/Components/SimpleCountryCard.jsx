import './CountryList/CountriesList.css';

function SimpleCountryCard({ country }) {
    if (!country) {
        return null;
    }

    return (<div className="simple-country-container">
        <div className="flag-container">
            <img className="flag" src={country.flags.png} />
        </div>
        <h2>{country.name.common}</h2>
    </div>);
}

export default SimpleCountryCard;