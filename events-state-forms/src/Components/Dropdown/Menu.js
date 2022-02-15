import styles from './Dropdown.module.css'
const Menu = ({hideMenu}) => (

  <div className={styles.dropdown}>
    <ul className={styles.listMenu}>
      <li className={styles.item}>Домой</li>
      <li className={styles.item}>О нас</li>
      <li className={styles.item}> Контакты</li>
    </ul>
    <button className={styles.btn} type="button" onClick={hideMenu}>Скрыть меню</button>
  </div>
);  

export default Menu;