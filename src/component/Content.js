import { Box, Grid, makeStyles } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import React from 'react'
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import WavesIcon from '@material-ui/icons/Waves';
import VerticalAlignBottomRoundedIcon from '@material-ui/icons/VerticalAlignBottomRounded';
import CloudCircleRoundedIcon from '@material-ui/icons/CloudCircleRounded';

const usestyle = makeStyles({
    root: {
        flexGrow: 1,
    },
    block: {
        display: 'block',
    },
    flex: {
        display: 'flex'
    }
    , spaceAround: {
        justifyContent: 'space-around'
    },
    border: {
        border: '1px solid black',
        borderRadius: '4px',
        marginTop: '6px'
    }
    , bold: {
        fontWeight: 'bold'
    }
    , aliceblue: {
        backgroundColor: 'aliceblue'
    }
    , cornSilk: {
        backgroundColor: 'cornSilk'
    }
    , center: {
        textAlign: 'center'
    }
    , media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
})

export default function Content(props) {
    const classes = usestyle();
    return (
        <>
            <Box py="2rem" className={classes.aliceblue}>
                <Grid container spacing={2} justify='space-around' className={classes.root}>
                    <Grid item md='auto' >
                        <Grid container spacing={2} >
                            <Grid item >
                                <span className={classes.block}>REGION</span>
                                <span className={classes.block, classes.bold}> {props.weatherData ? props.weatherData.location.region : <Skeleton animation="wave" height={10} style={{ marginTop: 6 }} />}</span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md='auto' >
                        <Grid container justify='space-around' spacing={2} >
                            <Grid item  >
                                <span className={classes.block}>COUNTRY</span>
                                <span className={classes.block, classes.bold}> {props.weatherData ? props.weatherData.location.country : <Skeleton animation="wave" height={10} style={{ marginTop: 6 }} />}</span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md='auto' >
                        <Grid container justify='space-around' spacing={2}>
                            <Grid item>
                                <span className={classes.block}>DATE</span>
                                <span className={classes.block, classes.bold}> {props.weatherData ? props.weatherData.location.localtime.substring(0, 10) : <Skeleton animation="wave" height={10} style={{ marginTop: 6 }} />}</span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md='auto' >
                        <Grid container justify='space-around' spacing={2}>
                            <Grid item>
                                <span className={classes.block}>LAST UPDATED</span>
                                <span className={classes.block, classes.bold}> {props.weatherData ? props.weatherData.current.last_updated : <Skeleton animation="wave" height={10} style={{ marginTop: 6 }} />}</span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md='auto' >
                        <Grid container justify='space-around' spacing={2}>
                            <Grid item>
                                <span className={classes.block}>TEMP</span>
                                <span className={classes.block, classes.bold}> {props.weatherData ? props.weatherData.current.temp_c + "C" : <Skeleton animation="wave" height={10} style={{ marginTop: 6 }} />}</span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs='auto' >
                        <Grid container justify='space-around' spacing={2}>
                            <Grid item>
                                <span className={classes.block}>COUNTRY</span>
                                <span className={classes.block, classes.bold}> {props.weatherData ? props.weatherData.location.country : <Skeleton animation="wave" height={10} style={{ marginTop: 6 }} />}</span>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

            <Box my="2rem">
                <Grid container spacing={2} justify='space-around'>
                    <Grid item md='auto' >
                        <Grid container>
                            <Grid item >
                                <span className={classes.block, classes.center}> {props.weatherData ? props.weatherData.current.condition.text : <Skeleton animation="wave" height={10} width="100px" style={{ marginTop: 6 }} />}</span>
                            </Grid>
                        </Grid>
                        <hr />
                        <Grid container>
                            <Grid item>
                                <span className={classes.block}>
                                    {props.weatherData ? <img src={props.weatherData.current.condition.icon} /> : <Skeleton animation="wave" variant="rect" width='100px' className={classes.media} />}
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md='auto'  >
                        <Grid container>
                            <Grid item className={classes.flex} >
                                <EmojiNatureIcon color='secondary'></EmojiNatureIcon>
                                <span className={classes.block}>Temp</span>
                            </Grid>
                        </Grid>
                        <hr />
                        <Grid container>
                            <Grid item>
                                <span className={classes.bold}> {props.weatherData ? props.weatherData.current.temp_c + ' Celsius' : <Skeleton animation="wave" height={10} width="100px" style={{ marginTop: 6 }} />}</span>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item >
                                <span className={classes.bold}> {props.weatherData ? props.weatherData.current.temp_f + ' Fahrenheit' : <Skeleton animation="wave" height={10} width="100px" style={{ marginTop: 6 }} />}</span>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item md='auto'  >
                        <Grid container>
                            <Grid item className={classes.flex}>
                                <CloudCircleRoundedIcon color='secondary'></CloudCircleRoundedIcon>
                                <span className={classes.block}>Humidity</span>
                            </Grid>
                        </Grid>
                        <hr />
                        <Grid container>
                            <Grid item>
                                <span className={classes.bold}> {props.weatherData ? props.weatherData.current.humidity + ' %' : <Skeleton animation="wave" height={10} width="100px" style={{ marginTop: 6 }} />}</span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md='auto'  >
                        <Grid container>
                            <Grid item className={classes.flex} >
                                <WavesIcon color='secondary'></WavesIcon>
                                <span className={classes.block}>Wind</span>
                            </Grid>
                        </Grid>
                        <hr />
                        <Grid container>
                            <Grid item>
                                <span className={classes.bold}> {props.weatherData ? props.weatherData.current.wind_kph + ' kph' : <Skeleton animation="wave" height={10} width="100px" style={{ marginTop: 6 }} />}</span>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item >
                                <span className={classes.bold}> {props.weatherData ? props.weatherData.current.wind_mph + ' mph' : <Skeleton animation="wave" height={10} width="100px" style={{ marginTop: 6 }} />}</span>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item md='auto'  >
                        <Grid container>
                            <Grid item className={classes.flex} >
                                <VerticalAlignBottomRoundedIcon color='secondary'></VerticalAlignBottomRoundedIcon>
                                <span className={classes.block}>Pressure</span>
                            </Grid>
                        </Grid>
                        <hr />
                        <Grid container>
                            <Grid item>
                                <span className={classes.bold}> {props.weatherData ? props.weatherData.current.pressure_in + ' in' : <Skeleton animation="wave" height={10} width="100px" style={{ marginTop: 6 }} />}</span>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item >
                                <span className={classes.bold}> {props.weatherData ? props.weatherData.current.pressure_mb + ' mb' : <Skeleton animation="wave" height={10} width="100px" style={{ marginTop: 6 }} />}</span>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

            <Box py="2rem" className={classes.cornSilk}>
                <Grid container justify='space-around' spacing={2}>
                    <Grid item md='auto'>
                        <Grid container>
                            <Grid item  >
                                <span className={classes.block}> co</span>
                            </Grid>
                        </Grid>
                        <hr />
                        <Grid container>
                            <Grid item>
                                <span className={classes.block, classes.bold}> {props.weatherData ? props.weatherData.current.air_quality.co.toFixed(4) : <Skeleton animation="wave" height={10} width="100px" style={{ marginTop: 6 }} />} </span>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item md='auto'>
                        <Grid container>
                            <Grid item  >
                                <span className={classes.block}> no2</span>
                            </Grid>
                        </Grid>
                        <hr />
                        <Grid container>
                            <Grid item>
                                <span className={classes.block, classes.bold}> {props.weatherData ? props.weatherData.current.air_quality.no2.toFixed(4) : <Skeleton animation="wave" height={10} width="100px" style={{ marginTop: 6 }} />} </span>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item md='auto'>
                        <Grid container>
                            <Grid item  >
                                <span className={classes.block}> o3 </span>
                            </Grid>
                        </Grid>
                        <hr />
                        <Grid container>
                            <Grid item>
                                <span className={classes.block, classes.bold}> {props.weatherData ? props.weatherData.current.air_quality.o3 : <Skeleton animation="wave" height={10} width="100px" style={{ marginTop: 6 }} />} </span>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item md='auto'>
                        <Grid container>
                            <Grid item  >
                                <span className={classes.block}> so2</span>
                            </Grid>
                        </Grid>
                        <hr />
                        <Grid container>
                            <Grid item>
                                <span className={classes.block, classes.bold}> {props.weatherData ? props.weatherData.current.air_quality.so2.toFixed(4) : <Skeleton animation="wave" height={10} width="100px" style={{ marginTop: 6 }} />} </span>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
