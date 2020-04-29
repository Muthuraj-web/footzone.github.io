import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../index.css'
class Itemcard extends Component {
    render() {
        return (
            <React.Fragment>              
                {this.props.source.map((item)=>
                                <div className="col-6 col-md-4 p-2 border rounded" style={{boxShadow:'3px 1px 9px  black'}}> 
                                <abbr title={item.brand +"_"+ item.footwear_type}><img style={{cursor:"pointer"}}src={process.env.PUBLIC_URL + item.image_url} className="card-img-top p-3" alt={item._id} onClick={()=>{this.props.selectItem(item);this.props.toggleSelect(item)}}/></abbr>                                <div className="card-body" style={{position:"relative"}}>
                                    <div className="row">
                                        <div className="col-6">
                                            <h5 className="card-title">{item.brand.toUpperCase()}</h5>
                                            <p className="card-text"><i>{item.footwear_type}</i></p>
                                        </div>
                                        <div className="col-6">
                                            <p style={{float:'right'}}><b>{`₹${item.price}`}</b></p>
                                        </div>
                                    </div>
                                </div>
                                <FontAwesomeIcon className={item.liked===true?'text-danger m-3':'bg m-3'} 
                                style={{position:"absolute",right:"0px",top:"0px",fontSize:"25px",cursor:"pointer",zIndex:5}} 
                                icon={faHeart} 
                                onClick={()=>{this.props.toggleLike(item)}}>
                                </FontAwesomeIcon>
                                {item.selected===true?<p style={{position:"absolute",float:'right',top:"0px"}} className="badge badge-success m-3">selected</p>:null}
                              </div>
                                )}
            </React.Fragment>       
 );
    }
}

export default Itemcard;