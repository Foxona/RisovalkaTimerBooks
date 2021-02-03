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
            <input value={temperature} onChange={(e) => onTemperatureChange({newTemp: e.target.value, newScale: scale})} />
        </fieldset>
    )
}

export default function Calculator(props) {
    const [scale, setScale] = useState("c")
    const [temperature, setTemperature] = useState("")
    const fahrenheitConvert = (scale === 'c') ? tryConvert(temperature, toFahrenheit) : temperature
    const celsiusConvert = (scale === 'f') ? tryConvert(temperature, toCelsius) : temperature
    
    const handleTemperatureChange = (e) => {
        // const {newTemp, newScale} = e
        const newTemp = e.newTemp
        const newScale = e.newScale

        setScale(newScale)
        setTemperature(newTemp)
    }

    return (
        <div>
            <TemperatureInput scale={"c"} temperature={celsiusConvert} onTemperatureChange={handleTemperatureChange} />
            <TemperatureInput scale={"f"} temperature={fahrenheitConvert} onTemperatureChange={handleTemperatureChange} />
            <BoilingVerdict celsius={parseFloat(celsiusConvert)} />
        </div>
    )
}

