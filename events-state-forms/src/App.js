// import Dropdown from './Components/Dropdown/Dropdown';
// import Counter from "./Components/Counter/Counter";
// import Drop from './Components/DropdownSecond/Dropdown-box'
import styles from './Components/ColorPicker/colorPeacker.module.css'

const options = [
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'green', color: '#4CAF50' },
  { label: 'red', color: '#F44336' },
  { label: 'pink', color: '#2196F3' },
      
]

function App() {
  return (
    <>
      <h2>Состояние событие</h2>
      <ul className={styles.list}>
        {options.map(option => <li className={styles.item}>{option.color}</li>)}
      </ul>
    
      {/* <Dropdown />
      <Counter /> */}
      {/* <Drop/> */}
    </>
 
  );
}


export default App;
