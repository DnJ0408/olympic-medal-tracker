import { useState } from "react";
import "./App.css";

const App = function () {
  //*--- state 생성 ---*//
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [countries, setCountries] = useState([]);

  //*--- 메달 개수를 상태변화함수에 전달하는 핸들러 ---*//
  const enterCountryHandler = function (e) {
    setCountry(e.target.value);
  };
  const goldCounterHandler = function (e) {
    setGold(e.target.value);
  };
  const silverCounterHandler = function (e) {
    setSilver(e.target.value);
  };
  const bronzeCounterHandler = function (e) {
    setBronze(e.target.value);
  };

  //*--- 국가 & 메달 추가하는 핸들러 ---*//
  const addCountryHandler = function (e) {
    // 새로고침 방지
    e.preventDefault();
    // 기존 국가들에 새롭게 추가할 국가 객체
    const newCountry = {
      id: crypto.randomUUID(),
      country: country,
      gold: gold,
      silver: silver,
      bronze: bronze,
    };
    
    // 금메달 갯수로 내림차순 하고 변수에 담아두기
    const goldRank = [...countries, newCountry]
    .sort(function (a, b) {
      return b.gold - a.gold;
    })
    
    // setCountries 상태변화함수 실행
    setCountries(goldRank);
    // 입력된 값을 초기화
    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  //*--- 국가 메달 리스트 삭제하는 핸들러 --*//
  const deleteCountryHandler = function (id) {
    const deletedCountry = countries.filter(function (country) {
      return id !== country.id;
    });
    setCountries(deletedCountry);
  };

  //*--- 국가 업데이트 핸들러 ---*//
  const updateCountryHandler = function (e) {
    e.preventDefault();
    const updatedCountry = countries.map(function (newCountry) {
      if (newCountry.country === country) {
        return { country, gold, silver, bronze };
      } else {
        return newCountry;
      }
    });
    setCountries(updatedCountry);
  };

  return (
    <div className="container">
      <h1>2024 Paris Olympics</h1>
      <form className="container-box">
        <label className="label">
          Country
          <input
            type="text"
            placeholder="국가 입력"
            value={country}
            onChange={enterCountryHandler}
          />
        </label>
        <label className="label">
          Gold
          <input type="number" value={gold} onChange={goldCounterHandler} />
        </label>
        <label className="label">
          Silver
          <input type="number" value={silver} onChange={silverCounterHandler} />
        </label>
        <label className="label">
          Bronze
          <input type="number" value={bronze} onChange={bronzeCounterHandler} />
        </label>

        <button className="button" onClick={addCountryHandler}>
          Enter
        </button>
        <button className="button" onClick={updateCountryHandler}>
          Update
        </button>
      </form>

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
              onClick={() => deleteCountryHandler(country.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
