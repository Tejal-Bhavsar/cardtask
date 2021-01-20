import React, { useEffect,useState } from 'react'
import Box from '@material-ui/core/Box'
import { Card, CircularProgress, Grid } from '@material-ui/core';
import CardA from './CardA'

export default function Cards() {
    const [ contents, setContent ] = useState()

    const getCardsdata = async () => {
        const response = await fetch("https://reqres.in/api/users?page=2");
        const cardData = await response.json()
        const Data = cardData.data
        setContent(Data)
        console.log(Data);
    }

    useEffect(() => {
        getCardsdata()
    },[])

    return (
        <div>
             <Box p={2} m={2} display="flex" justify="center"
              alignItems="center">
             <h1>Cards</h1>
             </Box>
             
             <Grid container 
              container
              direction="row"
              display="flex"
              alignItems="center"
              spacing={1}
              m={3}
              p={2}> 

              {  contents ? 
              contents.map((content) => (
                  <CardA 
                  key={content.id}
                  content={content}/>
              )) : <CircularProgress /> }
            </Grid>
                
           
        </div>
    )
}
