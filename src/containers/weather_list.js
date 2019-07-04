import React , { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component{
    render() {
        const weathers = this.props.weather.map(weather => {
            return (
                <tr key={weather.city.id}>
                    <td>
                        {weather.city.name}
                    </td>
                    <td>
                        a
                    </td>
                    <td>
                        b
                    </td>
                    <td>
                        c
                    </td>
                </tr>
            )
        });
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
                    {weathers}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}){
    return {weather};
}

export default connect(mapStateToProps, null)(WeatherList);