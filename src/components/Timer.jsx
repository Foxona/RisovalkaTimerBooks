import styles from './Timer.module.css'
import { useState } from 'react'

export default function Timer({ onClickButton, buttonColor, waitSeconds, finishText }) {
    const [textValue, setTextValue] = useState(waitSeconds)
    const [started, setStarted] = useState(false)
    const [finished, setFinished] = useState(false)
    const handleTimer = (v) => {
        //  BUG: stop button broken
        // if (!started && v === 0) {return}
        if (v !== 0) {
            console.log("handleTimer: " + v)
            setTextValue(v)
            setTimeout(() => { handleTimer(v - 1) }, 1000)
        } else {
            setStarted(false)
            setTextValue(waitSeconds)
            setFinished(true)
        }
    }
    return (<TimerRender started={started} buttonColor={buttonColor} finish={finished}
        onButtonClicked={() => {
            setStarted(!started)
            if (!started) { handleTimer(textValue) ; setFinished(false) }
            if (started) { setTextValue(waitSeconds) }
            onClickButton(started)

        }}
        onKeyDown={() => { console.log("okd") }}
        onKeyUp={() => { console.log("oku") }}
        onInputChange={(e) => { setTextValue(e.target.value - 0) }}
        text={textValue}
        finishText={finishText}
    />)
}

function TimerRender(props) {
    const { started, buttonColor, finish, onButtonClicked, onInputChange, onKeyUp, onKeyDown, text, finishText } = props;
    return (<>
        <div className={styles.timer}>
            <div className={styles.time}>
                <input type="text" value={text} disabled={started}
                    onChange={onInputChange}
                    onKeyDown={onKeyDown}
                    onKeyUp={onKeyUp} />
            </div>

            <div className={styles.button}
                style={{ backgroundColor: buttonColor }}
                onClick={onButtonClicked}
            ><span>{started ? "STOP" : "START"}</span></div>
        </div>
        <div className={styles.finish}>{finish ? finishText : ""}</div>
    </>)
}

{/* <html>
    <head title="Пельмени от Филиппа"></head>
    <body>
        Готовим пельмени
        Засуньте пельмени в кипящую воду и нажмите старт
        <Timer autoStart="false" waitSeconds="600" finishText="Pelmeny are ready" onFinished="pelmen_ready();" onStarted="pelmen-start();"/>
        ----
    </body>
</html> */}