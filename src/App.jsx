import { useState } from "react";
import "./App.css";
import MedalForm from "./components/MedalForm";
import MedalList from "./components/MedalList";

const App = () => {
  //*--- state 생성 ---*//
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [countries, setCountries] = useState([]);

  //*--- 메달 개수를 상태변화함수에 전달하는 핸들러 ---*//
  const enterCountryHandler = (e) => { setCountry(e.target.value); };
  const goldCounterHandler = (e) => { setGold(e.target.value); };
  const silverCounterHandler = (e) => { setSilver(e.target.value); };
  const bronzeCounterHandler = (e) => { setBronze(e.target.value); };

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
    const goldRank = [...countries, newCountry].sort((a, b) => { return b.gold - a.gold; })
    // setCountries 상태변화함수 실행
    setCountries(goldRank);
    // 입력된 값을 초기화
    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  //*--- 국가 메달 리스트 삭제하는 핸들러 --*//
  const deleteCountryHandler = (id) => {
    setCountries(countries.filter((country) => id !== country.id ));
  };

  //*--- 국가 업데이트 핸들러 ---*//
  const updateCountryHandler = (e) => {
    e.preventDefault();
    const updatedCountry = countries.map((newCountry) => 
      newCountry.country === country
    ? { ...newCountry, country, gold, silver, bronze }
    : newCountry
    );
    setCountries(updatedCountry);
  };
 
  return (
    <div className="container">
      <h1>2024 Paris Olympics</h1>
      <MedalForm 
      country={country}
      gold={gold}
      silver={silver}
      bronze={bronze}
      onCountryChange={enterCountryHandler}
      onGoldChange={goldCounterHandler}
      onSilverChange={silverCounterHandler}
      onBronzeChange={bronzeCounterHandler}
      onAddCountry={addCountryHandler}
      onUpdateCountry={updateCountryHandler}
      />

     <MedalList
      countries={countries}
      onDeletedCountry={deleteCountryHandler}
     /> 
    </div>
  );
};



export default App;
