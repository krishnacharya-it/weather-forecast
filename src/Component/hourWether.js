import React from 'react';
import '../Component/hourWeather.modules.css';

function HourWeather(props) {
    const getListData = props => {
        let tempArray = [];
        let content = [];
        let i = 0;
        for (let item of props.object) {
            var date = (item.dt_txt).split(" ")[0];
            var timeWeather = (item.dt_txt).split(" ")[1];
            if (date === '2020-09-05') {
                tempArray.push(date);
                content.push(
                    <div className="forecast backPanel backgroundConat" key={i}>
                        <div className="forecast-header">
                            <div className="day">{timeWeather}</div>
                        </div>
                        <div className="forecast-content">
                            <div className="forecast-icon">
                                <img src={"images/icons/"+item.weather[0].main+".svg"} alt="" width="48" />
                            </div>
                            <div className="degree">23<sup>o</sup>C</div>
                            <small>18<sup>o</sup></small>
                        </div>
                    </div>
                );
                i++;
            }
        }
        return content;
    }
    return getListData(props);
}



export default HourWeather;