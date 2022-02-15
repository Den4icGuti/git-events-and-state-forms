// Отделяйте именованные импорты, это повышает читаемость кода
import React, { Component } from "react";

//=== Импортируем Controls подьем состояня===//
import Controls from "./Controls";
import Value from "./Value";
import '../index.css'

class Counter extends Component {

  //===Создаем значение по умолчанию===//
  static defaultProps = {
    initialValue: 0,
  }

  //===Передаем значение по умолчанию в объект еукущего состояния===//
  state = {
    value: this.props.initialValue,
  }

  //===Создаем метод с внутренним методом, setState для обновления состояния===// 
  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  };
  
   //===Создаем метод с внутренним методом, setState для обновления состояния,===// 
  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1
    }));
  };
 
  //===Обязательныйметод render() для рендеринга разметки===// 
  render() { 
    return (
      <div className="box__counter">
        <p className="title">Состояни события</p>
        <Value value={this.state.value}/>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
   </div>
     
    );
  };
 
};

export default Counter;