import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class Pagination extends Component {
    givePages=()=>{
        const noPages=Math.ceil(this.props.total/this.props.pageSize)
        if(noPages===1)return ;
        let numArr=[]
        for(var i=0;i<noPages;i++){
            numArr.push(i)
        }
    return (numArr.map((a)=><li className="page-item border border-dark"  style={{cursor:'pointer'}} key={a} onClick={()=>{this.props.change(a)}}><a className="page-link pl-5 pr-5">{a+1}</a></li>) )
    }
    render() {
        return (
            <nav className="m-auto pt-5">
                <ul className="pagination ">
                    {this.givePages()}
                </ul>
            </nav>
        );
    }
}

export default Pagination;