import { useParams } from "react-router";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Button from "./Button/Button";
import CountriesByCurrency from "./CountriesByCurrency";
import CoinOfTheCard from "./CoinOfTheCard";

function CountryPage() {
    let params = useParams()
    let { countryName } = useParams()

    console.log('name:', countryName);
    console.log('params:', params);

    const [country, setCountry] = useState();
    const [loading, setLoading] = useState(true);

    const fetchCountry = async () => {
        try {
            const response = await fetch(
                `https://restcountries.com/v3.1/name/${countryName}`
            );
            const country = await response.json();
            setCountry(country[0]);
        }
        catch (error) {
            console.error('Erro ao buscar pais:', error)
        }
        finally {
            setLoading(false);
        }
    }

    // https://restcountries.com/v3.1/name/{name}
    // https://restcountries.com/v3.1/name/portugal


    useEffect(() => {
        fetchCountry()
    }, [])               /* Este useEffect tem dependência vazia por isso só vai correr uma vez, após renderização do que vem no return */

    return (
        country ?
            (<>
                <CountryCard pais={country}>
                    <Button>Sou um botão children deste Card</Button>
                    <Button>Outro botão children (teste) Voltar!</Button>
                    <CoinOfTheCard size="medium">
                        {Object.keys(country.currencies)[0]}
                    </CoinOfTheCard>
                </CountryCard>
                <CountriesByCurrency currency={Object.keys(country.currencies)[0]} />
            </>)
            : 'sem dados'
    )
}

export default CountryPage

