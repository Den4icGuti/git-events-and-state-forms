import React, {Component} from 'react'
import  './ColorPeacker.css'

class ColorPicker extends Component { 

  state = {
    isActiveIdx: 2,
  };

  setIsActiveIdx = index => { 
    this.setState({isActiveIdx:index})
  }

  makeOptionClasses = (index) => {
    const optionClasees = ['ColorPicker__option'];
  
    if (index === this.state.isActiveIdx) {
   optionClasees.push('ColorPicker__option--active');
    };

    return optionClasees.join(' ');
  };

  render() { 
    const { isActiveIdx } = this.state;
    const { options } = this.props;
    
    const {label} = options[isActiveIdx];
    // console.log(activeOption)
    return (
      <div className="box">
        <h2>Color Peacker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
              <button 
              key={label}
              className={this.makeOptionClasses(index)}
              style={{ backgroundColor: color }}
              onClick={() => {this.setIsActiveIdx(index)}}
            >

            </button>
          )
          )}
        </div>
      </div>
    );
  };
};



export default ColorPicker;