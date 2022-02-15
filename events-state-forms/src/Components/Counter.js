

// Отделяйте именованные импорты, это повышает читаемость кода
import React, { Component } from "react";

class Counter extends Component {
  /* ... */

  handleIncrement = evt => {
    console.log("Increment button was clicked!", evt); // работает
    console.log("this.props: ", this.props); // работает
  
  };

  handleDecrement = evt => {
    console.log("Decrement button was clicked!", evt); // работает
    console.log("this.props: ", this.props); // работает
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        
        <button type="button" onClick={this.handleIncrement}>
         Increment by {step}
        </button>
          <span>0</span>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}

export default Counter;