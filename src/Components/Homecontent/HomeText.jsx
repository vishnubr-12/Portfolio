import React from 'react';
import { makeStyles,Typography,Grid,Button} from '@material-ui/core';
import {NavLink} from "react-router-dom";
import { MdTrendingFlat } from "react-icons/md";
const useStyles = makeStyles((theme) => ({
    text:{height: '100vh',minHeight: '100%',textAlign:'center',paddingTop: '100px !important',[theme.breakpoints.down('xs')]: {textAlign:'center'}},
    navlink:{textDecoration:'none',color: '#100f3a !important'},
    activecss:{fontWeight: "bold",color: "#d5c455 !important"},
    butabout:{backgroundColor: '#d5c455',color:'white !important',border: '1px solid #d5c455 !important',textAlign:'right',width:'100%'},
    col:{color: "#d5c455 !important",textTransform: 'uppercase',fontWeight: 700,fontSize: '14px',letterSpacing: '1px',lineHeight: 1.2,marginBottom:'20px'},
    name:{fontWeight: 700,color: '#222222 !important',fontSize: '80px',lineHeight: 1.2,[theme.breakpoints.down('xs')]: {fontSize:'50px'}},
    buthire:{backgroundColor: 'white !important',color:'#100f3a !important',border: '1px solid #d5c455 !important', '&:hover':{backgroundColor: '#d5c455 !important',color:'white',width:'100%'}},
    butgrid:{ marginTop: 0,marginBottom: '1rem'},
    pad:{padding:'20px 0 !important'}
}))
const HomeText = () => {

    const classes = useStyles();
    return (
        <Grid item md={6} sm={6} xs={12} className={classes.text}>
            <Typography gutterBottom className={classes.name}>Howdy, I'm <br/>Divyarani M</Typography >
            <Typography  gutterBottom className={classes.col}>A Front-end Developer</Typography >
            <Grid container>
                <Grid item md={6} sm={6} xs={12} className={classes.pad}>
                    <NavLink to="/About" activeClassName={classes.activecss} className={classes.navlink}><Button className={classes.butabout}>MORE ABOUT ME <MdTrendingFlat/></Button></NavLink>
                    </Grid>
                <Grid item md={6} sm={6} xs={12} className={classes.pad}>
                <NavLink to="/Contact" activeClassName={classes.activecss} className={classes.navlink}><Button className={classes.buthire}>HIRE ME <MdTrendingFlat/></Button></NavLink>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default HomeText;
