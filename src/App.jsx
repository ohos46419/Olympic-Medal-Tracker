import { useState } from "react";
import "./App.css";

const App = () => {
  // function App?
  const [countries, setCountries] = useState([]);
  // country가 아닌 countries이기 때문에 초기값을 배열로
  const [countryInput, setCountryInput] = useState("");
  const [goldInput, setGoldInput] = useState();
  const [silverInput, setSilverInput] = useState();
  const [bronzeInput, setBronzeInput] = useState();

  const checkExistent = () => {
    return countries.find((country) => {
      if (country.name.toLowerCase() === countryInput.toLowerCase()) {
        return true;
      } else {
        return false;
      }
    });
  };

  const addCountry = (event) => {
    event.preventDefault();

    if (checkExistent()) {
      alert("이미 등록된 국가입니다");
    } else {
      const newCountry = {
        name: countryInput,
        gold: goldInput,
        silver: silverInput,
        bronze: bronzeInput,
      };
      setCountries([...countries, newCountry]);
    }
  };

  const updateCountries = (event) => {
    event.preventDefault();

    if (checkExistent()) {
      setCountries(
        countries.map((country) => {
          if (country.name.toLowerCase() === countryInput.toLowerCase()) {
            return {
              name: country.name,
              gold: goldInput,
              silver: silverInput,
              bronze: bronzeInput,
            };
          } else {
            return country;
          }
        })
      );
    } else {
      alert("등록되지 않은 국가입니다.");
    }
  };

  return (
    <div className="main-container" onSubmit={addCountry}>
      <h1>2024 파리 올림픽 메달 대시보드</h1>

      <form className="input-form">
        <div className="input-field">
          <label htmlFor="country">국가명</label>
          <input
            id="country"
            onChange={(e) => {
              setCountryInput(e.target.value);
            }}
          />
        </div>

        <div className="input-field">
          <label htmlFor="gold">금메달</label>
          <input
            id="gold"
            onChange={(e) => {
              setGoldInput(e.target.value);
            }}
          />
        </div>

        <div className="input-field">
          <label htmlFor="silver">은메달</label>
          <input
            id="silver"
            onChange={(e) => {
              setSilverInput(e.target.value);
            }}
          />
        </div>

        <div className="input-field">
          <label htmlFor="bronze">동메달</label>
          <input
            id="bronze"
            onChange={(e) => {
              setBronzeInput(e.target.value);
            }}
          />
        </div>

        <div className="button-group">
          <button type="submit">추가하기</button>
          <button onClick={updateCountries}>업데이트</button>
        </div>
      </form>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => {
              return (
                <tr key={country.name}>
                  <td>{country.name}</td>
                  <td>{country.gold}</td>
                  <td>{country.silver}</td>
                  <td>{country.bronze}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
