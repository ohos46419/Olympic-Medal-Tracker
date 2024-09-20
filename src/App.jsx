import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="main-container">
      <h1>2024 파리 올림픽 메달 대시보드</h1>
      <form className="input-form">
        <div>
          <label>국가명</label>
          <input />
        </div>

        <div>
          <label>금메달</label>
          <input />
        </div>

        <div>
          <label>은메달</label>
          <input />
        </div>

        <div>
          <label>동메달</label>
          <input />
        </div>
      </form>
    </div>
  );
};

export default App;
