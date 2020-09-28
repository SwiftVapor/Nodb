import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Cast from './components/Cast';
import axios from 'axios';
import Bag from './components/Bag';

class App extends Component {
constructor(props){
  super(props);
  this.state={
    caughtFish:[]
  }
  this.catchFish = this.catchFish.bind(this)
}
componentDidMount(){
  axios.get(`/api/bag`)
  .then(res=>{
    this.setState({caughtFish: res.data})
  })
  .catch(err =>console.log(err));
}

catchFish(fish){
  
  const fishIndex =this.state.caughtFish.findIndex((caughtFish)=>{
    return caughtFish.name === fish.name
  })
  if (fishIndex > -1){
    axios.put(`/api/bag/${fish.name}`)
    .then(res => {
      this.setState({caughtFish: res.data})
    })
    .catch(err => console.log(err));
  }else{
    axios.post(`/api/bag`, {fish: fish})
    .then(res => {
      this.setState({caughtFish: res.data})
    })
    .catch(err => console.log(err));
}
}
deleteFish = (id,quantity) => {
  axios.delete(`/api/bag/${id}`)
  .then(res =>{
    this.setState({caughtFish: res.data})
  })
  .catch(err => console.log(err));
}


  render(){
    return (
    <div className="App">
      <Header />
      <Cast
        catchFn = {this.catchFish}
      />
      <Bag
        caughtFish= {this.state.caughtFish}
        // countFn= {this.editCount}
        deleteFn={this.deleteFish}      
      />
    </div>
    );
  }
}

export default App;
