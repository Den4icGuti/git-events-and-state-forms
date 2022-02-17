//  import Dropdown from './Components/Dropdown';
//  import Counter from "./Components/Counter";
//  import Drop from './Components/DropdownSecond'
//  import ColorPicker from "./Components/ColorPicker";




// const ColorPickerOptions = [
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'red', color: '#F44336' },
//   { label: 'pink', color: '#E91E63' },
      
// ]

// function App() {
//   return (
//     <>
//       {/* <h2 className="title__page">Состояния события</h2> */}
//       {/* <ColorPicker options={ColorPickerOptions} /> */}
//       {/* <Drop /> */}
//       {/* <Counter /> */}
//       {/* <Dropdown/> */}
//     </>
    
//   );
// }

import React, { Component } from 'react';
import initalTodos from './Todos/todos.json';
import TodoList from './Todos/TodoList';



class App extends Component { 
  state = {
    todos:initalTodos,
  }

  //===Создаем метод удаления элемента по id===//
  deleteElement = (id) => { 
    this.setState(prevState => ({
      //===Через метод фильтр находим id которые не равны друг другу, удаляем элемент===//
      todos: prevState.todos.filter(todo => todo.id !== id)
    }))
  }


  render() { 
    const { todos } = this.state;

    const totalTodos = todos.length;

    const comletedTodo = todos.reduce((acc, todo) => (todo.comleted ? acc + 1 : acc),
     0);
    return (
     
      <>
        <h2>Состояние события</h2>
        <div>
          <p>Общее кол-во элементов: {totalTodos}</p>
          <p>Кол-во выполненых: {comletedTodo}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteElement}/>
      </>
     
    );
   
  }
}

export default App;
