import React from "react";
import '../index.css'

//===Функция подьема состояния===//


// Controls получаеют функцию onIncrement,onDecrement (имена пропов),
// которая вызывается при событии onClick
const Controls = ({onIncrement,onDecrement}) => (
  <div className="counter">
    <button className="btn" type="button" onClick={onIncrement}>Увеличить на 1</button>
    <button className="btn" type="button" onClick={onDecrement}>Уменьшить на 1</button>
  </div>
);

export default Controls;