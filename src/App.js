import styles from './App.module.css';
import RenderBooks from './components/RenderBooks'
import { useState, useEffect } from "react"
import Risovalka from './components/Risovalka';
import Timer from './components/Timer';

function App() {
  const [state, setState] = useState("3")
  const [btnClr, setBtnClr] = useState("blue")
  let max = (state) - 0;
  const objects = [];
  if (max > 12) { max = 12 }
  for (let i = 0; i < max; i++) {
    objects.push({
      text: "123",
      link: "https://google.com",
      image: "https://dictionary.cambridge.org/ru/images/thumb/cross_noun_002_09265.jpg?version=5.0.147"
    })
  }

  return (
    <div className="App">
      <Timer onClickButton={(s) => {
        console.log("Timer is currently: " + (s ? "started" : "stopped"))
        setBtnClr(s ? "blue" : "red")
      }}
        waitSeconds={9}
        finishText="TIME OUT"
        buttonColor={btnClr} />
      <input type="text" value={state} onChange={(e) => { setState(e.target.value) }}></input>
      <div className={styles.container}>
        <RenderBooks books={objects}></RenderBooks>
      </div>
      <Risovalka></Risovalka>
    </div>
  );
}

export default App;
