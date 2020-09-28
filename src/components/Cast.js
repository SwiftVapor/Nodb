import React, { Component } from 'react'
import axios from 'axios';
import Catch from "./Catch";

export default class Cast extends Component{
    constructor(props) {
        super(props)
        this.state={
            hookedFish: []
        }
    }
    componentDidMount(){
        this.getHookedFish();
    }
    getHookedFish =()=> {
        axios.get('/api/catch')
        .then(res => {
            this.setState({hookedFish: res.data})
        })
        .catch(err => console.log(err))
    }
    render(){
        const mappedFish = this.state.hookedFish.map((fish, i) => (
            <Catch
                key={i}
                fish={fish}
                catchFn={this.props.catchFn}
                refreshFn={this.getHookedFish}
                />
        ))
        return(
            <div className='fish-flex'>
                {mappedFish}  
            </div>
        )

    }
}
