import React, { Component } from 'react';
import source from './source';
import 'bootstrap/dist/css/bootstrap.css';
import Filter from'./Filters';
import Topnav from './Topnav';
import Itemcard from './Itemcard';
import Pagination from './Pagination';
import {Route,Link,Switch} from 'react-router-dom'
class Home extends Component {
    render() {
        let sortedData = this.props.data
        if(this.props.sortedprice===true || this.props.sortedprice===false)
        { sortedData=this.props.sortMe(sortedData,'price',this.props.sortedprice)}
        return (
            <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <Filter active={this.props.active} sortedprice={this.props.sortedprice} source={this.props.source} filterBy={this.props.filterBy}
                    changePriceSorted={this.props.changePriceSorted}></Filter>
                </div>
                <div className="col-sm-9">
                    <h3>{`Showing ${sortedData.length} items of ${this.props.source.length} results`}</h3>
                    <div className="row">
                        <Itemcard  toggleSelect={this.props.toggleSelect} source={this.props.data.slice(this.props.start,this.props.stop)} selectItem={this.props.selectItem} toggleLike={this.props.toggleLike}></Itemcard>
                    </div>
                </div>
                <Pagination  total={this.props.data.length} pageSize={9} change={this.props.change}></Pagination>
            </div>
            </div>
        );
    }
}
export default Home;