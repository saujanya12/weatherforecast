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
  const classes = usestyle();

  // fetch weather data of city entered by user.
  const fetchWeatherData = () => {
    let api = city ? `http://api.weatherapi.com/v1/current.json?key=4350d0234eda423896c82350210403&q=${city}&aqi=yes` : ''
    fetch(api)
      .then((res) => res.json())
      .then((data) => { setWeatherData(data) })
      .catch((error) => { console.log('Error' + error) })
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
          <Box align="center" py='1rem' className={classes.whitesmoke} >
            <InputCity city={city} setCity={setCity} fetchWeatherData={fetchWeatherData} />
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

