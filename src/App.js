import React from 'react';
import './App.css';
import WetherContainer from './Container/WetherContainer';
import DayWeather from './Component/DayWeather';
//import axios from 'axios';
import Loader from './Component/loader';
import {
  BrowserRouter as Router, Link, Switch,
  Route
} from "react-router-dom";
import HourWeather from './Component/hourWether';

class WeatherForecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weekday: {
        day: [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "0",
          "0"]
      },
      forcast: {
        data: null
      }
    };
  }
  componentDidMount() {
    /*axios.get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?zip=670612,in&units=metric&APPID=e50021c7d8f35810565678823b34e56c', {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        this.setState({ forcast: res.data });
      })*/


    const apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=670612,in&units=metric&APPID=e50021c7d8f35810565678823b34e56c';
    fetch(apiUrl).then(response => response.json())
      .then(data => this.setState({ forcast: data }));
  }


  render() {
    
    let result = this.state.forcast.list;
    return (<div className="App">
      {this.state.forcast.data === null ?
        <Loader />
        :
        <Router><WetherContainer>

          <DayWeather object={result} title={this.state.weekday}/>

        </WetherContainer>
            <Route path="/Mon">
            <div className="forecast-table">
                <h3><br />Monday WeatherForecast </h3>
                <div className="container">
                  <div className="forecast-container">
                    <HourWeather object={result}/>
                  </div>
                </div>
              </div>
            </Route>

            <Route path="/Tue">
            <div className="forecast-table">
                <h3><br />Tueday WeatherForecast</h3>
                <div className="container">
                  <div className="forecast-container">
                    <HourWeather object={result} />
                  </div>
                </div>
              </div>
            </Route>

            <Route path="/Wed">
            <div className="forecast-table">
                <h3><br />Wedday WeatherForecast</h3>
                <div className="container">
                  <div className="forecast-container">
                    <HourWeather object={result} />
                  </div>
                </div>
              </div>
            </Route>

            <Route path="/Thu">
            <div className="forecast-table">
                <h3><br />Thuday WeatherForecast</h3>
                <div className="container">
                  <div className="forecast-container">
                    <HourWeather object={result} />
                  </div>
                </div>
              </div>
            </Route>

            <Route path="/Fri">
            <div className="forecast-table">
                <h3><br />Friday WeatherForecast</h3>
                <div className="container">
                  <div className="forecast-container">
                    <HourWeather object={result} />
                  </div>
                </div>
              </div>
            </Route>
        </Router>
      }
    </div>);
  }
}


export default WeatherForecast;
