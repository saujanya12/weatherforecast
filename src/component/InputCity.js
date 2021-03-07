import React from 'react'
import { Button, FormControl, InputLabel, makeStyles, OutlinedInput } from '@material-ui/core';

const useStyle = makeStyles({

    textField: {
        width: '30ch',
    }
})

export default function InputCity(props) {
    const classes = useStyle(props);

    return (

        <FormControl fullWidth className={classes.textField} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-city">Enter Your City</InputLabel>
            <OutlinedInput
                id="outlined-adornment-city"
                value={props.city}
                onChange={((e) => { props.setCity(e.target.value); })}
                labelWidth={110}
            />
            <Button
                variant="contained"
                style={{ backgroundColor: 'black', color: 'white' }}
                onClick={props.fetchWeatherData}> Send </Button>
        </FormControl>

    )
}
