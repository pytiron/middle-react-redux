import React , { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component{

    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(({main})=>main.temp);
        const press = cityData.list.map(({main})=> main.pressure);
        const humidity = cityData.list.map(({main})=> main.humidity);

        return(
            <tr key={cityData.city.id}>
                <td>
                    {name}
                </td>
                <td>
                    <Chart data={temps} color="orange"/>
                </td>
                <td>
                    <Chart data={press} color="red"/>
                </td>
                <td>
                    <Chart data={humidity} color="blue"/>
                </td>
            </tr>
        )
    }

    render() {
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}){
    return {weather};
}

export default connect(mapStateToProps, null)(WeatherList);