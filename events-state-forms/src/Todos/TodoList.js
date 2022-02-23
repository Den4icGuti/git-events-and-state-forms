import styles from './todos.module.css'
const TodoList = ({ todos,onDeleteTodo,onToggleComlited }) => (
  <div className={styles.boxList}>
    <ul className={styles.list}>
      {todos.map(({ id,text,comlited}) => (
        <li key={id} className={styles.item}>
          <input type='checkbox'
            className={styles.check}
            checked={comlited}
            onChange={() =>onToggleComlited(id)}
          />
          <p>{text}</p>
         
          <button type="button" onClick={() => onDeleteTodo(id)}>Удалить</button>
        </li>
      ))}
    </ul>
  </div>
      
);

export default TodoList;
