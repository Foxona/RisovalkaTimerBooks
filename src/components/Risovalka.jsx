import styles from './Book.module.css'
import { useState } from 'react'

export default function Risovalka(props) {
    const [coord, setCoord] = useState({ x: 0, y: 0 })
    const [click, setClick] = useState(coord)

    return <div className={styles.risovalkaContainer}
        onMouseMove={(e) => {
            let x = e.clientX;
            let y = e.clientY;
            setCoord({ x, y })
        }}
        onClick={(e) => {
            setClick(coord)
            console.log(coord)
            console.log(click)

        }}>
        <div className={styles.ring} style={{top: click.y, left: click.x}}></div>
            Координаты X: {coord.x} <br />
            Координаты Y: {coord.y}
    </div>
}