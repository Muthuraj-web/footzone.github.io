import React, { Component } from 'react';

class Billing extends Component {
    state={
        selected:this.props.selected,
        quantity:[]
    };
componentWillMount(){
    let arr=[]
    for(var i=0;i<this.state.selected.length;i++){
        let Obj={_id:this.state.selected[i]._id,quantity:1}
        arr.push(Obj)
    }
    this.setState({
        quantity:arr
    })
}
giveQuantity=(_id)=>{
    let item= this.state.quantity.find((each)=>each._id===_id)
    return item.quantity
}
increaseQuantity=(item)=>{
    let newQuantity = [...this.state.quantity]
    let index = newQuantity.findIndex((each)=>each._id===item._id)
    newQuantity[index].quantity+=1
    this.setState({
        quantity:newQuantity
    })
}
decreaseQuantity=(item)=>{
    let newQuantity = [...this.state.quantity]
    let index = newQuantity.findIndex((each)=>each._id===item._id)
    if(newQuantity[index].quantity) newQuantity[index].quantity-=1
    else ;
    this.setState({
        quantity:newQuantity
    })
}
removeItem=(item)=>{
    let newSelected = [...this.state.selected]
    newSelected= newSelected.filter((each)=>each!=item)
    let newQuantity=[...this.state.quantity]
    newQuantity = newQuantity.filter((each)=>each._id!=item._id)
    this.setState({
        selected:newSelected,
        quantity:newQuantity
    })
}
giveTotal=()=>{
    let total=0;
    for(var i=0;i<this.state.selected.length;i++){
        total+=this.state.selected[i].price * this.state.quantity[i].quantity
    }
    return total
}
    render() {
        console.log(this.props)
        if(this.state.selected.length===0) return <h2>No Items have been selected please go back and select some items</h2>
        return (  
            <div className="container">
                <div className="row">
            <div className="col-sm-8">
            <div className="container">{this.state.selected.map((item)=>            
            <div className="row m-2 border rounded" style={{boxShadow:"3px 3px 10px black"}}>
                <div className="col-3">
                <img style={{width:"110px",height:"150px",marginLeft:"auto",marginRight:"auto",objectFit:"cover"}} src={item.image_url}></img>
                </div>
                <div className="col-2"><p><b>{item.brand.toUpperCase()}</b></p><i>{item.footwear_type}</i></div>
                <div className="col-1" style={{position:"relative",top:'20px'}}>{`Qty ${this.giveQuantity(item._id)}`}</div>
                <div className="col-1" style={{position:"relative",top:'20px'}}><button className="btn btn-info" onClick={()=>{this.decreaseQuantity(item);console.log("yes")}}>-</button></div>
                <div className="col-1" style={{position:"relative",top:'20px'}}><button className="btn btn-warning" onClick={()=>{this.increaseQuantity(item)}}>+</button></div>
                <div className="col-2" style={{position:"relative",top:'20px'}}><button className="btn btn-danger" onClick={()=>{this.removeItem(item);this.props.removeSelect(item)}}>Delete</button></div>
                <div className="col-2" style={{position:"relative",top:'20px'}}>{`₹${item.price * this.giveQuantity(item._id)}`}</div>
            </div>               
            )}
            </div> 
           </div>
           <div className="col-sm-4">
               <div className="border rounded m-2 p-2" style={{boxShadow:"3px 3px 10px black"}}>
                  <p>Cost<span style={{float:'right'}}>{`₹ ${this.giveTotal()}`}</span></p>
                  <p>Delivery Charges<span style={{float:'right'}}>{`₹ ${this.giveTotal()>=500?0:500}`}</span></p>
                  <br></br>
            <button onClick={()=>alert('Order Placed')} className="btn btn-success"disabled={!this.giveTotal()}>PLACE YOUR ORDER</button><span style={{float:"right"}}>{`₹ ${this.giveTotal()>=500?this.giveTotal():this.giveTotal()+500}`}</span>
               </div>
           </div>
           </div>
           </div>

        );
    }
}

export default Billing;