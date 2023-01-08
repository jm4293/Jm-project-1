import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function Weather() {
  const [location, setLocation] = useState('');
  const [result, setResult] = useState({});
  const API_KEY = "6bedce92f708cdeb65b084ee01b825c0"; // 각자 개인의 API KEY를 발급받아 사용



  let date = new Date();
  let now = `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일`

  const searchWeather = async (e) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

    if (location !== '') {
      try {
        const data = await axios({ method: 'get', url: url, })
        setResult(data);
      } catch (err) {
        alert(err);
      }
    }

    setLocation('');
  }

  return (
    <Frame>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Select onChange={(e) => setLocation(e.target.value)}>
            <option value="" selected disabled>도시 선택</option>
            <option value="seoul">서울(대한민국)</option>
            <option value="washington, D.C.">워싱턴(미국)</option>
            <option value="london">런던(영국)</option>
            <option value="tokyo">도쿄(일본)</option>
            <option value="beijing">베이징(중국)</option>
            <option value="hanoi">하노이(베트남)</option>
            <option value="jakarta">자카르타(인도네시아)</option>
            <option value="paris">파리(프랑스)</option>
            <option value="berlin">베를린(독일)</option>
          </Select>
          {
            Object.keys(result).length !== 0 && 
              <Result>
                <div className="city">{result.data.name}</div>
                <div className="temperature">{Math.round((result.data.main.temp - 273.15) * 10) / 10}°C</div>
                <div className="sky">{result.data.weather[0].main}</div>
                <div>{now}</div>
              </Result>
          } 
          <Button onClick={searchWeather}>선택</Button>
          <Button onClick={() => window.location.reload()}>돌아가기</Button>
      </div>
    </Frame>
  )
}

const Frame = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Select = styled.select`  
  width: 200%;
  cursor: pointer;
`;

const Result = styled.div`
  width: 200%;
  height: 100%;
  border: 1px black solid;
  margin-top: 10px;
  padding: 10px;
  border-radius: 20px;

  .city {
    font-size: 24px;
  }

  .temperature {
    font-size: 60px;
    margin-top: 8px;
    text-align: center;
  }

  .sky {
    font-size: 20px;
    margin-top: 8px;
  }
`;

const Button = styled.button`
  width: 200%;
  margin-top: 10px;
  cursor: pointer;
`;

export default Weather;