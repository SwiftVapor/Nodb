import React, { Component } from 'react'
export class Cast extends Component{
    constructor(props) {
        super(prop)
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
            this.setState(hookedFish: res.data)
        })
    }
}