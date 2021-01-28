import styles from './Book.module.css'

export default function Book(props) {

    return <div className={styles.book}>
        <a href={props.link} className="link">
            <img src={props.image} alt={props.text} className={styles.image}></img>
            {props.text}
        </a>
    </div>
}