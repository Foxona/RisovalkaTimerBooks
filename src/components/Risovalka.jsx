import styles from './Book.module.css'
import { useState } from 'react'

export default function Risovalka(props) {
    const [coord, setCoord] = useState({ x: 0, y: 0 })
    const [click, setClick] = useState(coord)

    const coordinates = [{ x: 50, y: 50 }, { x: 150, y: 150 }]
    coordinates.push({x: 250, y: 250})

    return <div className={styles.risovalkaContainer}
        onMouseMove={(e) => {
            let x = e.clientX;
            let y = e.clientY;
            setCoord({ x, y })
        }}
        onClick={(e) => {
            setClick(coord)
        }}>
        {coordinates.map((coord) => (<div className={styles.ring} style={{top: coord.x, left: coord.y}}></div>))}
            Координаты X: {coord.x} <br />
            Координаты Y: {coord.y}
    </div>
}