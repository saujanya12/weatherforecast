import React from 'react'
import { Box, Button, FormControl, InputLabel, makeStyles, OutlinedInput, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const useStyle = makeStyles({

    textField: {

        alignItems: 'center'
    }
})

export default function InputCity(props) {
    const classes = useStyle(props);

    return (

        <FormControl variant="outlined">
            <TextField 
            id="filled-search" 
            label="Enter a city" 
            type="search" 
            variant="filled"
            
            onChange={((e) => { props.setCity(e.target.value); })}
             />
            {/* <OutlinedInput
                className={classes.textField, classes.center}
                id="outlined-adornment-city"
               
                labelWidth={110}
                placeholder="Enter city"
            /> */}
            <Button
                variant="contained"
                style={{ backgroundColor: 'black', color: 'white' }}
                onClick={props.fetchWeatherData}> Send </Button>
            {
                props.error ? <Box>
                    <Alert severity="error">No matching location found.</Alert>
                </Box> : ''
            }

        </FormControl>

    )
}
