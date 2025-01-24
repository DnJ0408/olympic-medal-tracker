const MedalList = ({countries, onDeletedCountry}) => {

    return (
      <ul className="list-container">
        {countries.length > 0 ? (
          <li className="list">
          <p>국가명</p>
          <p>금메달</p>
          <p>은메달</p>
          <p>동메달</p>
          <p className="delete-title">삭제</p>
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