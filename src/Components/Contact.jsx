import React from 'react';
import { makeStyles,Typography,Grid} from '@material-ui/core';
import { FaMapMarkerAlt,FaPhoneAlt, }from "react-icons/fa";
import {MdEmail}  from "react-icons/md"
import { IoEarth } from "react-icons/io5";
import Contactdetails from './Contactcontent/Contactdetails';
import Map from './Contactcontent/Map';
const useStyles = makeStyles((theme) => ({
    contact:{ fontWeight: 600,color: '#222222',fontSize: '40px',textAlign:'center',paddingTop:10,marginTop: '30px',[theme.breakpoints.down('xs')]: {marginBottom: '10px'}},
    message:{fontWeight:'500',color:'#d5c455',fontSize: '18px',textAlign:'center',marginBottom: '40px',paddingLeft:'80px',[theme.breakpoints.down('xs')]: {marginBottom: '10px',paddingLeft:'10px'}},
    pad:{padding:'40px',[theme.breakpoints.down('xs')]: {padding:'20px',}},
    details:{padding:'10px 20px',fontSize: '25px',fontWeight: 200,lineHeight: 1.4,color: 'rgba(0, 0, 0, 0.8) !important'},
    contlist:{fontWeight:'500',color:'#d5c455',fontSize: '18px',padding:'10px 20px'},
    spantext:{padding:'10px'},
    map:{padding:'30px',marginRight:20,marginBottom:500},
}))
const Contact = () => {
    const classes = useStyles();
    return (
        <>
            <Typography gutterBottom className={classes.contact}>Contact Me</Typography >
            <Typography gutterBottom className={classes.message}>We're open for any suggestion or just to have a chat</Typography >
            <Grid container spacing={4} className={classes.pad}>
                <Grid item md={12} sm={12} xs={12}  className={classes.map} >
                    <Map/>
                </Grid>
                <Grid item md={6} sm={6} xs={12}  >
                    <Typography variant="h3" component="h3" gutterBottom className={classes.details}>Get In Touch</Typography >
                    <Contactdetails />
                </Grid>
                <Grid item md={6} sm={6} xs={12} >
                    <Typography variant="h3" component="h3" gutterBottom className={classes.details}>My Contact Details</Typography >
                    <Typography variant="h3" component="h3" gutterBottom className={classes.contlist}><FaMapMarkerAlt/><span className={classes.spantext}># 740 ,4th main,5th stage.2nd phase ,beml layout ,RR Nagar, Bangalore,Karanataka,India.</span></Typography >
                    <Typography variant="h3" component="h3" gutterBottom className={classes.contlist}><FaPhoneAlt/><span className={classes.spantext}>+91 9620570998</span></Typography >
                    <Typography variant="h3" component="h3" gutterBottom className={classes.contlist}><MdEmail/><span className={classes.spantext}>divyarajanikanth.m@gmail.com</span></Typography >
                    <Typography variant="h3" component="h3" gutterBottom className={classes.contlist}><IoEarth/><span className={classes.spantext}>https://divyarani.netlify.app</span></Typography >
                </Grid>
            </Grid>
        </>
    );
}

export default Contact;
