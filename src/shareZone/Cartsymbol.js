import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom'
class Cartsymbol extends Component {
    giveCount(){
        if(this.props.selected.length) return this.props.selected.length
    }
    render() {
        return (
            <div style={{position:'absolute',right:"80px"}}>
            <Link to={{
                pathname:'/billing'
            }}><FontAwesomeIcon icon={faShoppingCart} style={{color:'white',fontSize:"25px"}}></FontAwesomeIcon></Link>
            <p className="bg-danger position-absolute text-light rounded-pill pl-2 pr-2" style={{right:'-10px',top:"-12px"}}>{this.giveCount()}</p>
            </div>
        );
    }
}

export default Cartsymbol;