import React from 'react';
import { makeStyles,Typography,Grid} from '@material-ui/core';
import Progressbar from './Progressbar'
const useStyles = makeStyles((theme) => ({
    skillheader:{fontWeight:'800',color:'#d5c455',fontSize: '50px',textAlign:'center',marginBottom: '40px',paddingLeft:'80px',[theme.breakpoints.down('xs')]: {marginBottom: '10px',paddingLeft:'10px'}},
    aboutSkill:{fontSize:' 18px',display: 'block',marginTop: '30px',color: '#222222',textTransform: 'uppercase',fontWeight: 500,textAlign:'center',lineHeight: 0.75,paddingTop:'10px'},
    pad:{padding:'40px',[theme.breakpoints.down('xs')]: {padding:'20px',}}
}))

export default function Skills (){
    const classes = useStyles();
    return(

        <>
            <Typography className={classes.aboutSkill}>What I am good at</Typography>
            <Typography gutterBottom className={classes.skillheader}>My Skills</Typography >
            <Grid container spacing={4} className={classes.pad}>
                <Grid item md={4} sm={4} xs={12}  >
                    <Progressbar name={"reactjs"} value={75} />
                    <Progressbar name={"HTML 5"} value={75} />
                    <Progressbar name={"Node js"} value={60} />
                </Grid>
                <Grid item md={4} sm={4} xs={12} >
                    <Progressbar name={"Javascript"} value={75} />
                    <Progressbar name={"CSS 3"} value={70} />
                    <Progressbar name={"Other"} value={50} />
                </Grid>
                <Grid item md={4} sm={4} xs={12} >
                    <Progressbar name={"SQL"} value={50} />
                    <Progressbar name={"express"} value={50} />
                </Grid>
            </Grid>
        </>

    )

}