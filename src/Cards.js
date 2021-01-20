import React, { useEffect,useState } from 'react'
import Box from '@material-ui/core/Box'
import { Card, CircularProgress, Grid ,InputBase } from '@material-ui/core';
 
import CardA from './CardA'

export default function Cards() {
    const [ contents, setContent ] = useState();
    const [ result, setResult ] = useState();
    const [ search, setSearch ] = useState();
    const [ Name, setName ] = useState()

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

    
    const submit = (e) => {
        e.preventDefault();
        setSearch(Name)
        let array = contents.filter((ans) => (
            ans.first_name  == search
        ))
        console.log(array)
          setResult(array)
    }
    return (
        <div>
             <Box p={2} m={2} display="flex" justify="center"
              alignItems="center">
           <h1>  Cards </h1>
            <form className="searchform"   >
                <input className="searchbar" value={Name} onChange={(e)=> setName(e.target.value)}  type="text"/>
                <button  onClick={submit} className="search-btn" type="submit" >search</button>
            </form>
             </Box>
             
             <Grid
              container
              direction="row"
              display="flex"
              alignItems="center"
              spacing={1}
              m={3}
              p={2}> 

              {  contents ? 
              contents.map((content) => (
                  <Grid item p={3} mb={3} xs={3} >
                    <CardA 
                    key={content.id}
                    content={content}/>
                  </Grid>
              )) : <CircularProgress /> }

            </Grid>
                
            <Grid container 
            container
            direction="column"
            display="flex"
            justify="center"
            alignItems="center"
            spacing={1}
            m={3}
            p={2}>
             <h1>Search results</h1>

             {  search ? 
              result.map((res) => (
                  <Grid item p={3} mb={3} xs={3} >
                    <CardA 
                    key={res.id}
                    res={res}/>
                  </Grid>
              )) : <CircularProgress /> }
             
            </Grid>
           
        </div>
    )
}
