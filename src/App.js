import React, { Component } from 'react';
import source from './shareZone/source'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './shareZone/Home';
import Billing from './shareZone/Billing';
import {Route,Link,Switch} from 'react-router-dom';
import Topnav from './shareZone/Topnav'
import 'bootstrap/dist/css/bootstrap.css'
class App extends Component {
    state={
        data:source,
        cartCount:0,
        start:0,
        stop:9,
        selected:[],
        sortedprice:null,
        active:null
    }
    selectItem=(item)=>{
        let newSelected=[...this.state.selected]
        if(newSelected.includes(item)){
            newSelected=newSelected.filter((stateitem)=>stateitem!==item)
        }
        else{
            newSelected.push(item)        
        }
        this.setState({
            cartCount:this.state.cartCount+1,
            selected:newSelected
        })
    }
    toggleLike=(item)=>{
        let newData=[...this.state.data]
        let index = newData.indexOf(item)
        newData[index].liked = !newData[index].liked
        this.setState({
            data:newData
        })
    }
    filterBy=(footwear_type)=>{
        let newSelected=[]
        let sortedprice=this.state.sortedprice
        if(footwear_type===null) {
            newSelected = source;
            sortedprice = null
        }
        else newSelected = source.filter((each)=>each.footwear_type==footwear_type)
        this.setState({
            data:newSelected,
            start:0,
            stop:newSelected.length< 9 ? newSelected.length : 9,
            active:footwear_type,
            sortedprice:sortedprice
        })
    }
    change = (pageNum)=>{
        this.setState({
            start:pageNum*9,
            stop:this.state.data.length<(pageNum+1)*9 ? this.state.data.length : (pageNum+1)*9,
        })
        window.scrollTo(0,0)
    }
    toggleSelect=(item)=>{
        let newData=[...this.state.data]
        let index = newData.indexOf(item)
        newData[index].selected = ! newData[index].selected
        this.setState({
            data:newData
        })

    }
    removeSelect=(item)=>{
        let newSelected=[...this.state.selected]
        newSelected = newSelected.filter((each)=>each!=item)
        this.setState({
            selected:newSelected
        })
        console.log(newSelected)
    }
    sortMe=(arr,parameter,order)=>{
        for(let i=0;i<arr.length;i++){
            let min = arr[i][parameter]
            let index = i
            for(let j=i;j<arr.length;j++){
                if(arr[j][parameter]<min && order===true){
                    min = arr[j][parameter]
                    index = j
                }
                else if(arr[j][parameter]>min && order===false){
                    min = arr[j][parameter]
                    index = j
                }
            }
            let temp=arr[i]
            arr[i]=arr[index]
            arr[index]=temp
        }
        return arr
    }
    changePriceSorted=(state)=>{
        this.setState({
            sortedprice:state,
            start:0,
            stop:9
        })
    }
    render() {
        console.log(this.state.selected)
        return(
            <main className="container">
                <div className="bg-dark sticky-top"><Topnav selected={this.state.selected}></Topnav></div>
                <Switch>
                <Route path='/billing'>
                  <Billing selected={this.state.selected} removeSelect={this.removeSelect}></Billing>
                </Route>
                <Route path='/' render={(props)=>
                <Home 
                active={this.state.active}
                data={this.state.data} 
                sortedprice={this.state.sortedprice} 
                selected={this.state.selected}
                start={this.state.start}
                stop={this.state.stop}
                sortMe={this.sortMe}
                changePriceSorted={this.changePriceSorted}
                toggleSelect={this.toggleSelect}
                change={this.change}
                filterBy={this.filterBy}
                toggleLike={this.toggleLike}
                selectItem={this.selectItem}
                source={source}
                {...props}>
                </Home>} />
                </Switch>
            </main>
        )
    }
}

export default App;