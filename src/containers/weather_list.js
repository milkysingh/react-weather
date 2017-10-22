import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import _ from 'lodash';
class WeatherList extends Component {
  renderWeather(cityData) {
      const temps = _.map(cityData.list.map((weather => weather.main.temp)), (temp) => temp - 273);
      const pressures = cityData.list.map(weather => weather.main.pressure);
      const humidities = cityData.list.map(weather => weather.main.humidity);
      console.log(temps);
      return (
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
        <td>
       <Chart data={temps} color="orange" units="°c"/>
        </td>
        <td>
        <Chart data={pressures} color="red" units="hPA"/>
         </td>
         <td>
         <Chart data={humidities} color="green"units="%"/>
          </td>
      </tr>
    );
  }
  render() {
    console.log(this.props.weather);
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature(C)</th>
              <th>Pressure(hPA)</th>
              <th>Humidity(%)</th>
            </tr>
          </thead>
          <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = ({ weather }) => {
  return { weather };
};
export default connect(mapStateToProps)(WeatherList);
