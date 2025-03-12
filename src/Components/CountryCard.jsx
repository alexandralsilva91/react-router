function CountryCard({ pais, children }) {
    return (
        <div className="card" style={{ color: 'black' }} >
            <img className="flag" src={pais.flags.png} />
            <h2>{pais.name.common}</h2>
            <p><strong>Capital:</strong> {pais.capital?.[0]}</p>
            <p><strong>Região:</strong> {pais.region}</p>
            <p><strong>População:</strong> {pais.population}</p>
            {/* <p><strong>Idioma:</strong> {Object.values(pais?.languages)?.map((languages) => ())}</p> */}
            <p>{pais.numberOfHabitants}</p>
            {/* <button >Criar alerta</button> */}
            {children}
        </div>
    )
}

export default CountryCard