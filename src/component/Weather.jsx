import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";

const Frame = styled.div`
  width: 30%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.div`  
  input {
    border: 1px black solid;
    border-radius: 20px;
    padding: 5px;
    text-align: center;
    font-weight: bold;
  }
`;

const Result = styled.div`
  width: 70%;
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

const ClearButton = styled.button`
  margin-top: 20px;
  width: 50%;
`

function Weather() {
    const [location, setLocation] = useState('');
    const [result, setResult] = useState({});
    const API_KEY = "6bedce92f708cdeb65b084ee01b825c0"; // 각자 개인의 API KEY를 발급받아 사용

    const searchWeather = async (e) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${API_KEY}`;

        if (e.key === 'Enter') {
            try {
                const data = await axios({method: 'get', url: url,})
                setResult(data);
            } catch (err) {
                alert(err);
            }
        }
    }

    const clear = () => {
        window.location.replace('/weather');
    }

    return (
        <Frame>
            <Input>
                <input placeholder="도시를 입력하세요" value={location} onChange={(e) => setLocation(e.target.value)} type="text" onKeyDown={searchWeather}/>
            </Input>
            {Object.keys(result).length !== 0 && (
                <Result>
                    <div className="city">{result.data.name}</div>
                    <div className="temperature">{Math.round((result.data.main.temp - 273.15) * 10) / 10}°C</div>
                    <div className="sky">{result.data.weather[0].main}</div>
                </Result>
            )}
            <ClearButton onClick={clear}>초기화</ClearButton>
        </Frame>
    )
}

export default Weather;