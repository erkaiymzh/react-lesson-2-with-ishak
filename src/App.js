import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0) //ТО, ЧТО ВНУТРИ СКОБОК ЭТО НАЧАЛЬНОЕ СОСТОЯНИЕ
  let [value, setValue] = useState("") // SETVALUE ETO NOVOE ZNACHENIE KOTOROE PEREZAPISYVAET VALUE=INITVALUE 
  // let counter = 0
  console.log(value);
  return (
    <div>
      <h2> Сounter: {counter}</h2>
      <button onClick={() => {
        setCounter(counter + 1);
}}>+1</button>
      <button onClick={() => {
        setCounter(counter-1)
      }}>-1</button>
      {
        counter > 5? (
        <input onChange={(event) => setValue(event.target.value)}  id="counter-input" placeholder="Введите число" />
        ) : null
        }
        <button onClick={() => {
          setCounter(counter + +value)
        }}>Добавить число</button>
        <p>Количество знаков: {value.length}</p>
    </div>
    );
}

export default App;
