const MedalForm = ({
    country,
    gold,
    silver,
    bronze,
    onCountryChange,
    onGoldChange,
    onSilverChange,
    onBronzeChange,
    onAddCountry,
    onUpdateCountry,
  }) => {
    return (
      <form className="container-box">
      <label className="label">
        Country
        <input
          type="text"
          placeholder="국가 입력"
          value={country}
          onChange={onCountryChange}
        />
      </label>
      <label className="label">
        Gold
        <input type="number" value={gold} onChange={onGoldChange} />
      </label>
      <label className="label">
        Silver
        <input type="number" value={silver} onChange={onSilverChange} />
      </label>
      <label className="label">
        Bronze
        <input type="number" value={bronze} onChange={onBronzeChange} />
      </label>
  
      <button className="button" onClick={onAddCountry}>
        Enter
      </button>
      <button className="button" onClick={onUpdateCountry}>
        Update
      </button>
    </form>
    );
  }

  export default MedalForm;