import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Cast from './components/Cast'
import axios from 'axios';
import Bag from './components/Bag'

class App extends Component {
constructor(props){
  super(props);
  this.state={
    caughtFish:[]
  }
}
componentDidMount(){
  axios.get('/api/caught-fish')
  .then(res=>{
    this.setState({caughtFish: res.data})
  })
  .catch(err =>console.log(err));
}

catchFish(fish){
  axios.post('/api/caught-fish', {fish: fish})
  .then(res => {
    this.setState({caughtFish: res.data})
  })
  .catch(err => console.log(err));
}
// editCount = (id, quantity){

// }
deleteFish = (id,quantity) => {
  axios.delete('/api/caught-fish/${id}')
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
        deleteFn={this.deleteFish}      />
    </div>
    );
  }
}

export default App;
