import { Box, createMuiTheme, Grid, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';
import Content from './component/Content';
import InputCity from './component/InputCity';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Fantasy"', 'Papyrus'].join(',')
  },
});

const usestyle = makeStyles({
  font: {
    fontWeight: 'bold',
    fontSize: 'x-large'
  }
  , whitesmoke: {
    backgroundColor: 'whitesmoke'
  }
})

function App() {

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState('');
  const [error, setError] = useState(false);
  const classes = usestyle();

  // fetch weather data of city entered by user.
  const fetchWeatherData = () => {
    let api = city ? `http://api.weatherapi.com/v1/current.json?key=YOUR KEY&q=${city}&aqi=yes` : ''
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        if (data.error != undefined) {
          setError(true);
          setWeatherData(null);
        }
        else {
          setWeatherData(data);
          setError(false)
        }
      })
      .catch((error) => {
        setError(true)
        setWeatherData(null);
        console.log('Error' + error)
      })
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Box pt='1rem' >
            <ThemeProvider theme={theme}>
              <Typography variant='h6' align="center" className={classes.font}> WEATHER FORECAST </Typography>
            </ThemeProvider>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box align="center" pt='8px' className={classes.whitesmoke} >
            <InputCity city={city} setCity={setCity} fetchWeatherData={fetchWeatherData} error={error} />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Content weatherData={weatherData} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;

