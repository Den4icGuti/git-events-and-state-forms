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

  // show = () => { 
  //   this.setState({visibility:true})
  // }

  // hide = () => { 
  //   this.setState({visibility:false})
  // }

  render() { 
    return (
      <div className={styles.box__drop}>
        <button type="button"
          className={styles.btn}
          onClick={this.toggle}>
          {/* Перерендериваем состояние кнопки по условию  */}
          {this.state.visibility ? 'Скрыть' : 'Показать'}
        </button>
         {/* Рендерим меню по условию */}
          {this.state.visibility && ( <div className={styles.menu}>Выпадающие меню</div>)}
      </div>
    )
  }
}

export default Drop;