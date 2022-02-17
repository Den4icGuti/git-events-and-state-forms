import React, { Component } from "react";
import Menu from "./Menu";
import styles from './Dropdown.module.css'

class Dropdown extends Component { 

  state = {
    visible:false
  }

  show = ()  => { 
    this.setState({visible:true})
  }

  hide = () => { 
    this.setState({visible:false})
  }

  render() { 
    return (
      <div className={styles.showMenu}>
        
        <button
          className={styles.btn}
          type="button"
          onClick={this.show}>
          Показать меню
        </button>
        
        {this.state.visible &&  
          <Menu
          hideMenu={this.hide}  
        />
        }
      </div>
    );
  };
  
}

export default Dropdown;