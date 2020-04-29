import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Filter extends Component {
    giveBorderSort=(type)=>{
        if(this.props.sortedprice===true && type==='LOW'){
            return 'active'
        }
        if(this.props.sortedprice===false && type==='HIGH'){
            return 'active'
        }
    }
    giveBorderFilter=(type)=>{
        if(this.props.active===type) {
            return "active"
        }
        else {};
    }
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
            <ul className="list-group">
               <li className={`list-group-item ${this.giveBorderFilter(null)}`} onClick={()=>{this.props.filterBy(null)}}>No Filters</li>
               <li className={`list-group-item ${this.giveBorderFilter('shoe')}`} onClick={()=>{this.props.filterBy('shoe')}}>Shoe</li>
               <li className={`list-group-item ${this.giveBorderFilter('slipper')}`} onClick={()=>{this.props.filterBy('slipper')}}>Slipper</li>
               <li className={`list-group-item ${this.giveBorderFilter('chappal')}`} onClick={()=>{this.props.filterBy('chappal')}}>Chappal</li>
               <li className={`list-group-item ${this.giveBorderSort('LOW')}`} onClick={()=>{this.props.changePriceSorted(true)}}>Price LOW to HIGH</li>
               <li className={`list-group-item ${this.giveBorderSort('HIGH')}`} onClick={()=>{this.props.changePriceSorted(false);this.giveBorderSort('HIGH')}}>Price HIGH to LOW</li>

            </ul>
          </React.Fragment>
        );
    }
}

export default Filter;