import React from 'react';
import {Grid,Hidden,makeStyles,} from '@material-ui/core';
import {Text,Image} from "./Homecontent";
const useStyles = makeStyles((theme) => ({img:{paddingRight: '25px',[theme.breakpoints.down('xs')]:{paddingRight: '5px'}}}));
const Home = () => {
    const classes = useStyles();
    return (
        <>
        <Grid container spacing={3}>
        <Hidden xsDown >
            <Text/>  
        </Hidden>
        <Grid item md={6} sm={6} xs={12} className={classes.img}>
            <Image/>
        </Grid>
        </Grid>
        </>
    );
}

export default Home;
