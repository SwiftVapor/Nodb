import React, { Component } from 'react'

export default class Catch extends Component{
    handleCatch = () =>{
        const {fish} = this.props;
        let newFish = {
            name: fish.name,
            image: fish.img,
            quantity: 1
        }
        this.props.catchFn(newFish);
        this.props.refreshFn();
    }
    render(){
        return(
            <div onClick= {this.handleCatch}>
                <img className= 'fish' src={this.props.fish.img} alt= {this.props.fish.name}/>
                <p className= 'tooltip'>{this.props.fish.name}</p>
            </div>
        )
    }
}
