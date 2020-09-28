import React, { Component } from 'react'

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
        return(
            <div>
                <img className= 'fish' src={this.props.fish.img} alt= {this.props.fish.name}/>
                <p className='tooltip'>{this.props.fish.name}</p>
                <button onClick={() => this.props.deleteFn(this.props.fish.id)}>Delete</button>
            </div>
        )
    }
}