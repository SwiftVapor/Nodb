import React from 'react'
import Fish from './Fish'


export default function Bag (props){
    const mappedFish = props.caughtFish.map((fish, i) => (
        <Fish
            key = {i}
            fish = {fish}
            // countFn = {props.editCount}
            deleteFn = {props.deleteFn}
        />
    ))
    return(
        <div className='bag'>
            <h1>Bag</h1>
            <div className = 'fish-flex'>
                {mappedFish}
            </div>
        </div>
    )

}