import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  
  export default function DayWeather(props) {
    const getListData = props => {
        let tempArray = [];
        let content = [];
        let i = 0;
        for (let item of props.object) {
            var date = (item.dt_txt).split(" ")[0];
            if (tempArray.indexOf(date) === -1 && props.title.day[i]!=="0") {
                tempArray.push(date);
                content.push(
                    <Link to={"/"+props.title.day[i]} className="forecast" key={i} data-date={date} onClick={() => (window.myVar =date)}>
                        <div className="forecast-header" data-date={date}>
                        <div className="day">{props.title.day[i]}day</div>
                        </div>
                        <div className="forecast-content" data-date={date}>
                            <div className="forecast-icon" data-date={date}>
                             <img src={"images/icons/"+item.weather[0].main+".svg"} alt="" width="48" />
                            </div>
                            <div className="degree" data-date={date}>{item.main.temp_max}<sup>o</sup>C</div>
                            <small>{item.main.temp_min}<sup>o</sup></small>
                        </div>
                    </Link>
                );
                i++;
            }
        }
        return content;
    }
    return getListData(props);
}
