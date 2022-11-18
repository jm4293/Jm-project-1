import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";

const AppWrap = styled.div`
  input {
    width: 100%;
    padding: 10px;
    border: 2px black solid;
    border-radius: 16px;
  }
`;

const ResultWrap = styled.div`
  width: 100%;
  border: 1px black solid;
  padding: 10px;
  border-radius: 8px;

  .city {
    font-size: 24px;
  }
  
  .temperature {
    font-size: 60px;
    margin-top: 8px;
  }
  
  .sky {
    font-size: 20px;
    margin-top: 8px;
  }
`;

function Weather() {
    const [location, setLocation] = useState('');
    const [result, setResult] = useState({});
    const API_KEY = "6bedce92f708cdeb65b084ee01b825c0"; // 각자 개인의 API KEY를 발급받아 사용
    const url = `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${API_KEY}`;

    const searchWeather = async (e) => {
        if (e.key === 'Enter') {
            try {
                const data = await axios({method: 'get', url: url,})
                setResult(data);
                console.log(data);
            } catch (err) {
                alert(err);
            }
        }
    }

    return (
        <AppWrap>
            <div className="appContentWrap">
                <input placeholder="도시를 입력하세요" value={location} onChange={(e) => setLocation(e.target.value)} type="text" onKeyDown={searchWeather}/>
                {Object.keys(result).length !== 0 && (
                    <ResultWrap>
                        <div className="city">{result.data.name}</div>
                        <div className="temperature">{Math.round((result.data.main.temp - 273.15) * 10) / 10}°C</div>
                        <div className="sky">{result.data.weather[0].main}</div>
                    </ResultWrap>
                )}
            </div>
        </AppWrap>
    )
}

export default Weather;