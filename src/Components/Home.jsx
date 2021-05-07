import React from 'react';
import {Grid,Hidden} from '@material-ui/core';
import {Text,Image} from "./Homecontent";

const Home = () => {
    return (
        <>
        <Grid container spacing={3}>
        <Hidden xsDown >
            <Text/>  
        </Hidden>
        <Grid item md={6} sm={6} xs={12}>
            <Image/>
        </Grid>
        </Grid>
        </>
    );
}

export default Home;
