const MedalList = ({countries, onDeletedCountry}) => {

    return (
      <ul className="list-container">
        {countries.length > 0 ? (
          <li className="list">
          <p>Country Name</p>
          <p>Gold</p>
          <p>Silver</p>
          <p>Bronze</p>
          <p className="delete-title">Action</p>
        </li>
        ) : null}
        {countries.map((country) => (
          <li key={country.id} className="list">
            <p>{country.country}</p>
            <p>{country.gold}</p>
            <p>{country.silver}</p>
            <p>{country.bronze}</p>
            <button
              className="button"
              onClick={() => onDeletedCountry(country.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    );
  }

  export default MedalList;