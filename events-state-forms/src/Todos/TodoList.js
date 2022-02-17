import styles from './todos.module.css'
const TodoList = ({ todos,onDeleteTodo }) => (
  <div className={styles.boxList}>
    <ul className={styles.list}>
      {todos.map(({ id,text}) => (
        <li key={id} className={styles.item}>
          <p>{text}</p>
          <button type="button" onClick={() => onDeleteTodo(id)}>Удалить</button>
        </li>
      ))}
    </ul>
  </div>
      
);

export default TodoList;
