import React, { useEffect } from 'react'
import Box from '@material-ui/core/Box'
import { Card, Grid } from '@material-ui/core';
import CardA from './CardA'

export default function Cards() {

    const getCardsdata = async () => {
        const response = await fetch("https://reqres.in/api/users?page=2");
        const cardData = await response.json()
        const Data = cardData.data
       
        console.log(Data);
    }

    useEffect(() => {
        getCardsdata()
    },[])

    return (
        <div>
             
             <h1>Cards</h1>
              {/* { cardData.map((data) => (
                  <CardA />
              ))} */}
                
           
        </div>
    )
}
