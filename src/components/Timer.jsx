import styles from './Timer.module.css'
import { useState } from 'react'

export default function Timer({ onClickButton, buttonColor }) {
    return (<TimerRender time={600} started={false} buttonColor={buttonColor} finish={true}
        onButtonClicked={onClickButton}
        onKeyDown={() => { console.log("okd") }}
        onKeyUp={() => { console.log("oku") }}
    />)
}

function TimerRender(props) {
    const { started, buttonColor, time, finish, onButtonClicked, onChange, onKeyUp, onKeyDown } = props;

    return (<>
        <div className={styles.timer}>
            <div className={styles.time}>
                <input type="text" value={time} onKeyDown={onKeyDown} onKeyUp={onKeyUp} />
            </div>

            <div className={styles.button}
                style={{ backgroundColor: buttonColor }}
                onClick={onButtonClicked}
            ><span>{started ? "START" : "STOP"}</span></div>
        </div>
        <div className={styles.finish}>{finish ? "FINISH" : ""}</div>
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