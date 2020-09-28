import React, { Component } from 'react';

export default class Fish extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
        }
    }

    toggle =() =>{
        this.setState({isEditing: !this.state.isEditing})
    }
    render(){
        console.log(this.props.fish.image)
        return(
            <div>
                <div className= "thumbnail">
                <div className= 'quantity'>
                    {this.props.fish.quantity}
                </div>
                <img className= 'fish'  src={this.props.fish.image} alt={this.props.fish.name}></img>
                </div>
                <p className='tooltip'> {this.props.fish.name}</p>
                <button onClick={() => this.props.deleteFn(this.props.fish.id)}>Delete</button>
            </div>
        )
    }
}