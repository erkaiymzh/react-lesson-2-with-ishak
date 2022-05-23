import React, { useState } from 'react';
//snippets
const Main = () => {
    const [value, setValue] = useState()
    const [isChecking, setIsChecking]  = useState(false)
    const [isNum, setIsNum] = useState(true)
    // if(+value < 21 && isChecking) {
    //     return <div>Приходите, когда вам исполнится 21!</div>
    // }
    // if(+value >= 21 && isChecking){
    //     return <div>Добро пожаловать в наш клуб!</div>
    // }
    // if(isChecking){
    //     return value < 21 ? <div>Приходите, когда вам исполнится 21!</div> : <div>Добро пожаловать в наш клуб!</div>
    // }

    if(isChecking === true){
        if( isNum === true){
            setIsChecking(false)
            alert(+value < 21 ? "Приходите, когда вам исполнится 21!" : "Добро пожаловать в наш клуб!" )
        }else{
            setIsChecking(false)
            alert("Введите число!")
        }
    }

    return (
        <div>
<input onChange={(event) => 
{
    if(!isNaN(+event.target.value)){
        setValue(event.target.value);
        setIsNum(true)
    }
    else{
        setIsNum(false)
    }
}} placeholder='Введите ваш возраст!'/>
<button onClick={() => setIsChecking(true)}>Проверить возраст</button>
<div>
    <h3 
    style={{
        color: value < 21? "red" : "green",
        display: isChecking === true? "block" : "none"
    }}
    >  
    {
        isNum === true? (+value < 21 ? ("Приходите, когда вам исполнится 21!") : ("Добро пожаловать в наш клуб!") ) : ("Введите число")
    }


    </h3>
</div>
   </div>
    );
};

export default Main;