import React, { Component } from 'react'

export default class Catch extends Component{
    handleCatch = () =>{
        const {fish} = this.props;
        let newFish = {
            name: fish.name,
            image: fish.img
        }
        this.props.catchFn(newFish);
        this.props.refreshFn();
    }
    render(){
        return(
            <div onClick= {this.handleCatch}>
                <img src={this.props.fish.img} alt= {this.props.fish.name}/>
                <p>{this.props.fish.name}</p>
            </div>
        )
    }
}
