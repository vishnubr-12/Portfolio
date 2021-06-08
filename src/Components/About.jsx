import React from 'react';
import { makeStyles,Typography,Grid,Button,Card,CardContent } from '@material-ui/core';
import CountUp from 'react-countup';
import { IoIosPeople } from "react-icons/io";
import { AiOutlineFileDone } from "react-icons/ai";
import { FaCoffee,FaUserClock} from "react-icons/fa";
import resume from './DivyaraniResume.pdf';
const useStyles = makeStyles((theme) => ({
    title:{ color:'#222222',fontSize: '20px',},
    about:{fontWeight:'600',color: '#222222',fontSize: '40px',textAlign:'center',padding:10,marginTop: '30px',marginBottom: '40px',[theme.breakpoints.down('xs')]: {marginBottom: '10px'}},
    root:{margin:'12px',textAlign:'center',padding:'40px 5px',zIndex: 0},
    leftpad:{paddingLeft:'40px !important',[theme.breakpoints.down('xs')]: {paddingLeft:'12px !important'},transition:' var(--transition)',},
      "@global": {
        "@keyframes fadeIn": {
          "0%": {
            opacity: 0,
            transform: "translateY(10rem)"
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)"
          }
        }
      },
      selector: {
        animation: "fadeIn 2s ease-in-out" // --> this works
      },
      number:{fontSize: '20px',fontWeight: 700,color: '#d5c455',lineWeight: 1,display: 'block',},
      aboutme:{fontSize:' 13px',display: 'block',marginBottom: '5px',color: '#d5c455',textTransform: 'uppercase',fontWeight: 700,letterSpacing: '2px',padding:20},
      city:{padding:'10px 20px',fontSize: '40px',fontWeight: 600,lineHeight: 1.4,color: 'rgba(0, 0, 0, 0.8) !important'},
      abouttext:{padding:'0px 20px'},
      aboutinfo:{fontSize: 16,paddingLeft: 20},
      dFlex:{display:"flex !important",},
      col1:{fontWeight: 600,padding:10,color: 'rgba(0, 0, 0, 0.8) !important'},
      col2:{fontWeight: 600,color: '#d5c455 !important',padding:10},
      padL:{paddingLeft:'24px !important'},
      Downloadcss:{backgroundColor: '#d5c455',color:'white !important',border: '1px solid #d5c455 !important',marginLeft:20,'&:hover':{color:'rgba(0, 0, 0, 0.8) !important',backgroundColor:'white'}},
      bottom:{marginBottom:20 }
      

}));
const download=()=>{
    const link = document.createElement('a');
    link.href = resume;
    link.target='_blank'
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
const About = () => {
    const classes = useStyles();
    return (
        <>
            <Typography gutterBottom className={classes.about}>About Me</Typography >
            <Grid container spacing={3} className={classes.bottom}>
                <Grid item md={6} sm={6} xs={12}  >
                <Grid container  className={classes.leftpad+" "+classes.selector}>
                <Grid item md={6} sm={6} xs={12} >
                    <Card className={classes.root}>
                        <CardContent>
                            <IoIosPeople/>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Happy Client
                            </Typography>
                            <div className={classes.number}>
                            <CountUp end={10} duration={4} separator=',' /> +</div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6} sm={6} xs={12} >
                    <Card className={classes.root}>
                        <CardContent>
                            <AiOutlineFileDone/>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Projects Done
                            </Typography>
                            <div className={classes.number}>
                            <CountUp end={15} duration={4}/> +</div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6} sm={6} xs={12} >
                    <Card className={classes.root}>
                        <CardContent>
                            <FaCoffee/>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Cup Of Coffee
                            </Typography>
                            <div className={classes.number}>
                            <CountUp end={2000} duration={4} separator=','/> +</div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                    <Card className={classes.root}>
                        <CardContent>
                            <FaUserClock/>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Working Hours
                            </Typography>
                            <div className={classes.number}>
                            <CountUp end={5000} duration={4} separator=','/> +</div>
                        </CardContent>
                    </Card>
                </Grid>
                </Grid>
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                    <Typography className={classes.aboutme}>About me</Typography>
                    <Typography variant="h2" component="h2" gutterBottom className={classes.city}>A Web Developer Based in Bangalore</Typography >
                    <Typography className={classes.abouttext}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Typography>
                    <Grid container>
                        <Grid item md={6} sm={6} xs={12} >
                            <ul className={classes.aboutinfo}>
                                    <li className={classes.dFlex}><span className={classes.col1}>Name:</span> <span className={classes.col2+" "+classes.padL}>Divyarani M</span></li>
                                    <li className={classes.dFlex}><span className={classes.col1}>Address:</span> <span className={classes.col2}>RR Nagar Bangalore Karnataka</span></li>
                            </ul>
                        </Grid>
                        <Grid item md={6} sm={6} xs={12} >
                        <ul className={classes.aboutinfo}>
                            <li className={classes.dFlex}><span className={classes.col1}>Email:</span> <span className={classes.col2}>divyarajanikanth.m@gmail.com</span></li>
                            <li className={classes.dFlex}><span className={classes.col1}>Phone: </span> <span className={classes.col2}>+91 9620570998</span></li>
                        </ul>
                        </Grid>
                    </Grid>
                    <Button onClick={download} className={classes.Downloadcss}>Download Resume</Button>
                </Grid>
            </Grid>
        </>
    );
}

export default About;
