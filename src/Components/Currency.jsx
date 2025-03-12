import {useState} from "react";

function Currency(country,) {

    const [currency, setCurrency] = useState();

    {JSON.stringify(country.currencies)}

    return (
        <h2>Países com a mesma moeda</h2>
    )
}

export default Currency;