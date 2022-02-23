import React, { Component } from "react";
 import s from '../TodosEditor/TodoEditor.module.css'

class TodoEditor extends Component { 

  state = {
    message:''
  }
  
  onHandleMessagState = e => { 
    this.setState({ message: e.currentTarget.value })
  }
  
  onHandleSubmit = e => { 
    e.preventDefault();

    this.props.onSubmit(this.state.message);
    
    this.setState({ message: '' });
  }

  render() { 
    return (
      <form className={s.TodoEditor} onSubmit={this.onHandleSubmit}>
        <textarea className={s.inputTextMessage}
          value={this.state.message}
          onChange={this.onHandleMessagState}
        >

        </textarea>
        <button type="submit">Добавить</button>
      </form>
    )
  }
}

export default TodoEditor;