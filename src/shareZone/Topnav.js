import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Cartsymbol from './Cartsymbol';
import { Link } from 'react-router-dom';
class Topnav extends Component {
    render() {
        return (
            <nav className=" navbar navbar-dark bg-dark m-2 p-3 w-100">
            <Link className="navbar-brand" to={{pathname:'/'}}><img style={{height:'50px'}} src={process.env.PUBLIC_URL + "nav.png"}></img></Link>
            <Cartsymbol selected={this.props.selected}></Cartsymbol>
            </nav>
        );
    }
}

export default Topnav;