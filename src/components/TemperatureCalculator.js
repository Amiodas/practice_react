import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import { toCelsius, toFahrenheit, convert } from '../lib/converter'

class TemperatureCalculator extends React.Component {
    state = {
        temperature : '',
        scale: 'c'
    }
    temperatureChangeHandler = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        })
    }
    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;
        return (
            <div>
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.temperatureChangeHandler} />
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.temperatureChangeHandler} />
            <BoilingVerdict celsius={parseFloat(temperature)} />
            </div>
        )
    }
}

export default TemperatureCalculator;