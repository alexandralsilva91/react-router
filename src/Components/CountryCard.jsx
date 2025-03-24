function CountryCard({ pais, children }) {
    return (
        <div className="card" style={{ color: 'black' }} >
            <div className="flag-container">
                <img className="flag" src={pais.flags.png} />
            </div>
            <h2>{pais.name.common}</h2>
            <p><strong>Capital:</strong> {pais.capital?.[0]}</p>
            <p><strong>Continent:</strong> {pais.region}</p>
            <p><strong>Population:</strong> {pais.population}</p>
            {/* <p><strong>Idioma:</strong> {Object.values(pais?.languages)?.map((languages) => ())}</p> */}
            <p>{pais.numberOfHabitants}</p>
            {/* <button >Criar alerta</button> */}
            {children}
        </div>
    )
}

export default CountryCard