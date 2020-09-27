import React, { Component } from 'react'
import Catch from "./Catch";
import axios from 'axios';
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
            <div className='fish'>
                {mappedFish}  
            </div>
        )

    }
}
