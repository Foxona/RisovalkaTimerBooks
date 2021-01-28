import styles from './Book.module.css'
import { useState } from 'react'

export default function Risovalka(props) {
    const [coord, setCoord] = useState({x: 0, y: 0})

    return <div className={styles.risovalkaContainer} onMouseMove={(e) => {
        let x = e.clientX;
        let y = e.clientY;
        setCoord({x,y})
    }}>
        Координаты X: {coord.x} <br/>
        Координаты Y: {coord.y}
    </div>
}