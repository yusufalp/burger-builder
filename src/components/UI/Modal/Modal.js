import React from 'react';
import './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) { 
    return nextProps.show !== this.props.show
  }
  componentWillUpdate(){
    
  }
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className={`Modal ${this.props.show ? '' : 'hidden'}`} >
          {this.props.children}
        </div>
      </Aux>
    )
  }
}

export default Modal