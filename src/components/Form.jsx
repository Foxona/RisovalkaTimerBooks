// import styles from './Form.module.css'
import { useState } from 'react'

const scaleNames = {
    c: 'CELSIUS',
    f: 'FAHRENHEIT'
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>Кипит</p>
    }
    return <p>Не кипит</p>
}

function TemperatureInput({ scale, temperature, onTemperatureChange }) {

    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input value={temperature} onChange={(e) => onTemperatureChange(e.target.value, scale )} />
        </fieldset>
    )
}

export default function Calculator(props) {
    const [scale, setScale] = useState("c")
    const [celsius, setCelsius] = useState(0)
    const [fahrenheit, setFahrenheit] = useState(0)
    
    const handleTemperatureChange = (newTemp, newScale) => {
        const fahrenheitConvert = (newScale === 'c') ? tryConvert(newTemp, toFahrenheit) : newTemp
        const celsiusConvert = (newScale === 'f') ? tryConvert(newTemp, toCelsius) : newTemp

        setScale(newScale)
        setCelsius(celsiusConvert)
        setFahrenheit(fahrenheitConvert)
    }

    return (
        <div>
            <TemperatureInput scale={"c"} temperature={celsius} onTemperatureChange={handleTemperatureChange} />
            <TemperatureInput scale={"f"} temperature={fahrenheit} onTemperatureChange={handleTemperatureChange} />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    )
}

