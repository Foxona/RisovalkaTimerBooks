import styles from './Book.module.css'
import { useState } from 'react'

function Circles({onClick, onMove, currentCoord, coordinates, lastClick}) {
    return (
        <div className={styles.risovalkaContainer}
            onMouseMove={onMove}
            onClick={onClick}
        >
            {coordinates.map((coord) => (<div className={styles.ring} style={{ top: coord.y, left: coord.x }}></div>))}
            <div className={styles.ring} style={{ borderColor: "#f00", top: lastClick.y, left: lastClick.x }}></div>
            Координаты X: {currentCoord.x} <br />
            Координаты Y: {currentCoord.y}
        </div>)
}

export default function Risovalka(props) {
    const [currentCoord, setCoord] = useState({ x: 0, y: 0 })
    const [lastClick, setLastClick] = useState(currentCoord)
    const [coordinates, setCoordinates] = useState([])
    // coordinates.push({x: 250, y: 250})
    const handleMove = function (e) {
        let x = e.clientX;
        let y = e.clientY;
        setCoord({ x, y })
    }
    const handleClick = function (e) {
        setLastClick(currentCoord) // lastClick = currentCoord
        setCoordinates([...coordinates, currentCoord]); // coordinates = [...coordinates, currentCoord]
        // console.log(coordinates.length)
    }
    // const logs = function (...rest) {
    //     console.log(rest)
    // }
    return (<Circles lastClick={lastClick} coordinates={coordinates} currentCoord={currentCoord} onClick={handleClick} onMove={handleMove} />)
}

