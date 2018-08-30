import React, { Component } from 'react';
import styled from 'styled-components';
import styles from './modal.style';

class Modal extends Component {
    render() {
      if (this.props.isOpen === false)
        return null

      return (
          <div className={` col-sm-12 ${this.props.className}`}>
        <div className='modal-window top-side bigwidth open'>
            <div className="modal-window-overlay "></div>
          
            <div className='modal-window-in comp-product-view' >
<div className="close" onClick={this.props.onClose}>X</div>
                <div className="modal-window-in-content">
                    {this.props.children}
                </div>
            </div>
         </div>
                </div>
        
      )
    }

  }



export default styled(Modal)`${styles}`;