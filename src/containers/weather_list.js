import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

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
                    <Sparklines
                        data={temps} width={150} height={120}>
                        <SparklinesLine color="red" />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines
                        data={press} width={150} height={120}>
                        <SparklinesLine color="green" />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines
                        data={humidity} width={150} height={120}>
                        <SparklinesLine color="blue" />
                    </Sparklines>
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