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
import initialTodos from './Todos/todos.json';
import TodoList from './Todos/TodoList';
import TodoEditor from './Components/TodosEditor/TodosEditor';
import Filter from './Components/Filter/Filter';
import shortId from 'shortid';
import './index.css'



class App extends Component {
  state = {
    todos: initialTodos,
    filter: ''
  }


  //===Метод добавления в TodoList новый Todo===//
  addTodo = text => { 
    console.log(text)
    const todo = {
      id: shortId.generate(),
      text,
      comleted: true
    };
    this.setState(({ todos }) => ({
      todos: [todo,...todos],
    }))
  }
  //===Создаем метод удаления элемента по id===//
  deleteElement = (id) => {
    this.setState(prevState => ({
      //===Через метод фильтр находим id которые не равны друг другу, удаляем элемент===//
      todos: prevState.todos.filter(todo => todo.id !== id)
    }))
  }


  //===Фильтр уникальных элементов===//

  toggleComleted = todoId => { 
    console.log(todoId);
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) { 
    //       return {
    //         ...todo,
    //         comleted: !todo.comleted,
    //       }
    //     }
    //     return todo;
    //   })
    // }))
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todoId === todo.id ? {...todo,comleted: !todo.comleted} : todo)
    }))
  }
  
   //=== Метод фильтра изменяющий состояние свойства фильтр ==//
  
  onChangeFilter = e => { 
    this.setState({ filter: e.currentTarget.value })
  }

  //===Метод поиска через фильтр===//
  getVisibleTodo = () => { 
    const { filter, todos } = this.state;
    const normaLize = filter.toLowerCase();

      return todos.filter(todo =>
      todo.text.toLocaleLowerCase().includes(normaLize))
  }

  //===Метод который подсчитывает кол-во елемнтов===//
  
  calcCompleteTodo = () => { 
    const { todos } = this.state;
    
    return todos.reduce((acc, todos) => (todos.comleted ? acc + 1 : acc),0);
  }

  render() {
    
    const { filter } = this.state;
    const comletedTodo = this.calcCompleteTodo();
    const visibleTodos = this.getVisibleTodo();
    return (
     
      <>
        <h2>Состояние события</h2>
        <div>
          <p>Общее кол-во элементов: {comletedTodo}</p>
          <p>Кол-во выполненых: {comletedTodo}</p>
        </div>

        <Filter
          value={filter}
          onChange={this.onChangeFilter}
        />

        <TodoEditor onSubmit={this.addTodo}/>
        <TodoList
          todos={visibleTodos}
        
          onDeleteTodo={this.deleteElement}
          onToggleComlited={this.toggleComleted}
        />
        
        
      </>
   
    )
  }
}

export default App;
