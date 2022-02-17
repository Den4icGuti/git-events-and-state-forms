import React, {Component} from "react";
import styles from './dropSecond.module.css'
class Drop extends Component { 
  state = {
    visibility:false
  }

  toggle = () => {
    this.setState(prevState => ({
      visibility: !prevState.visibility,
    }));
  };


  render() { 
    const { visibility } = this.state;
    return (
      <div className={styles.box__drop}>
        <button type="button"
          className={styles.btn}
          onClick={this.toggle}>
          {/* Перерендериваем состояние кнопки по условию  */}
          {visibility ? 'Скрыть' : 'Показать'}
        </button>
         {/* Рендерим меню по условию */}
          {visibility && ( <div className={styles.menu}>Выпадающие меню</div>)}
      </div>
    )
  }
}

export default Drop;