import React from 'react';
import { makeStyles,Typography,Grid,Card,CardContent } from '@material-ui/core';
import { FcCalendar} from "react-icons/fc";
const useStyles = makeStyles((theme) => ({
    expre:{ fontWeight: 600,color: '#222222',fontSize: '40px',textAlign:'center',paddingTop:10,marginTop: '30px',[theme.breakpoints.down('xs')]: {marginBottom: '10px'}},
    //num:{color:'#d5c455!important'},
    text:{textAlign:'center',fontSize: 25},
    root:{margin:'12px',textAlign:'center',padding:'40px 5px',zIndex: 0,height:'250px',
    '&:hover':{border:'2px solid #d5c455!important',
    '&>:nth-child(2)':{transform:'perspective(2000px) rotateY(0deg)'},
    '& div':{opacity:'2',transform:'translateX(10%)',
    '& Typography':{transition:'2s'}}},
    '&>:nth-child(2)':{position:'relative',top:'-190px',left:'-10px',width:'100%',height:'auto',backgroundColor: '#d5c455',transition:'2s',transformOrigin:'left',transform:'perspective(2000px) rotateY(-90deg)',
    '& div':{textAlign:'left',transform:'translateX(-50%)'},
    },
},
    font:{fontSize: '20px !important',paddingTop: 20,},
    pad:{padding:'30px 5px 30px 40px'},
    pad1:{padding:'30px 40px 30px 5px'},
    padtop:{paddingTop: 40},
    padTop0:{paddingTop:0},
    padBottom0:{paddingBottom:0},
    root1:{margin:'12px',textAlign:'center',padding:'40px 5px',zIndex: 0,overflow: 'scroll','&:hover':{border:'2px solid #d5c455!important',}}
}));
const Experience = () => {
    const classes = useStyles();
    // const onHover=(texts)=>{
    //     var msg = new SpeechSynthesisUtterance();
    //     var voices = window.speechSynthesis.getVoices();
    //     msg.voice = voices[10];
    //     msg.voiceURI = "native";
    //     msg.volume = 1;
    //     msg.rate = 1;
    //     msg.pitch = 0.8;
    //     msg.text = texts
    //     msg.lang = 'en-US';
    //     speechSynthesis.speak(msg);
    // }
    // const onHoverLeave=()=>{
    //     speechSynthesis.cancel();
    // }
    return (
        <>
            <Typography gutterBottom className={classes.expre}>Over  <span className={classes.num}>3</span> of Experience</Typography >
            <Grid container spacing={3} className={classes.bottom}>
                <Grid item md={6} sm={6} xs={12}  >
                <Typography gutterBottom className={classes.num+" "+classes.text}>Experience</Typography >
            <Grid container className={classes.pad+" "+classes.padBottom0}>
                <Grid item md={12} sm={12} xs={12} >
                    <Card className={classes.root1}>
                            
                            {/* <div> */}
                            <CardContent>
                            <Typography   gutterBottom><FcCalendar/> Apr/2012 - May/2014</Typography>
                            <Typography   gutterBottom> Web Developer</Typography>     
                            <Typography   gutterBottom>MagsoftCreatives</Typography>
                            <Typography   gutterBottom>Bangalore</Typography>
                            </CardContent>
                            {/* </div> */}
{/*                             <div >
                                <div className={classes.center} onMouseLeave ={onHoverLeave} onMouseEnter={()=>onHover('Achievements/Tasks     Front end UI Developer (Responsibilities)      RWD, Designing static web pages, design structure for web sites and design web page layout using Html, CSS, Boostrap, Jquery and Javascript        Using dream weaver to update and create new web pages   Website Urls     genousautomotive.com     hventreprises.com    scubeincrop.in and mlcestates.com')}>
                                <div   style={{marginLeft:' -110px',}}>
                                <Typography className={classes.font}  gutterBottom>Achievements/Tasks</Typography> 
                                <Typography  gutterBottom>Front end UI Developer (Responsibilities) </Typography> 
                                    <ul>
                                        <li>RWD, Designing static web pages, design structure for web sites and <br/> design web page layout using Html, CSS, Boostrap, Jquery and Javascript</li>
                                        <li>Using dream weaver to update and create new web pages</li>
                                        <li>Website Urls
                                            <ul>
                                                <li>genousautomotive.com </li>
                                                <li>hventreprises.com </li>
                                                <li>scubeincrop.in </li>
                                                <li> mlcestates.com </li>
                                                <br/>
                                            </ul>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </div>                                                 */}
                    </Card>
                </Grid>
                <Grid item md={12} sm={12} xs={12} >
                    <Card className={classes.root1}>
                        {/* <div> */}
                        <CardContent>
                        <Typography className={classes.num}  gutterBottom><FcCalendar/> Jan/2020 - Present</Typography>
                        <Typography className={classes.num}  gutterBottom> React JS Front End Developer</Typography>     
                        <Typography className={classes.num}  gutterBottom>Alopasoft</Typography>
                        <Typography   gutterBottom>Bangalore</Typography>
                        </CardContent>
                        {/* </div> */}
{/*                             <div >
                                <div className={classes.center} onMouseLeave ={onHoverLeave} onMouseEnter={()=>onHover('Achievements/Tasks .    Front end UI Developer (Responsibilities).      RWD, Designing static web pages, design structure for web sites and design web page layout using Html, CSS, Material UI ,Javascript and Other 3rd party packages .      Using dream weaver to update and create new web pages   Website worked on.     Isage Myhope ,CMT')}>
                                <div   style={{marginLeft:' -110px',overflow: 'scroll'}}>
                                <Typography className={classes.font+" "+classes.padtop}  gutterBottom>Achievements/Tasks</Typography> 
                                <Typography  gutterBottom>React Js Front End Developer (Responsibilities) </Typography> 
                                    <ul>
                                        <li>RWD, Designing static  and dynamic web pages, design structure <br/> for web sites and design web page layout using <br/>Html, CSS, Material UI ,Javascript and Other 3rd party packages</li>
                                        <li>working for Medical based  Client</li>
                                        <li>Website worked on
                                            <ul>
                                                <li>Isage RX/DoseCheck 
                                                    <ul>
                                                        <li>Isage webpage used for diabetic patient from doctor to prescribe <br/>the insuline dose based on the weight and helath condition.</li>
                                                        <li>Worked on new tasks related to isage</li>
                                                        <li>Debugging Bugs</li>
                                                        <li>....</li>
                                                    </ul>
                                                </li>
                                                <li>Myhope</li>
                                                <li>CMT</li>
                                                <br/>
                                                <br/>
                                            </ul>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </div> */}
                    </Card>
                </Grid>
                </Grid>
                <Grid item md={12} sm={12} xs={12} className={classes.pad+" "+classes.padTop0} >
                <Typography gutterBottom className={classes.num+" "+classes.text}>Certificate</Typography >
                    <Card className={classes.root1}>
                        {/* <CardContent> */}
                            <Typography className={classes.title} gutterBottom> React JS</Typography><br/>
                            {/* </CardContent> */}
                                </Card>
                                </Grid>
                </Grid>
                <Grid item md={6} sm={6} xs={12}  >
                <Typography gutterBottom className={classes.num+" "+classes.text}>Education</Typography >
            <Grid container className={classes.pad1}>
                <Grid item md={12} sm={12} xs={12} >
                    <Card className={classes.root1}>
                        <CardContent>
                            <Typography className={classes.title}  gutterBottom>SSLC <span> - BSVP</span></Typography>
                            <Typography className={classes.title}  gutterBottom>PUC <span> - Govt PU College Channapatna</span></Typography>
                            <Typography className={classes.title}  gutterBottom>BE{'(E&C)'} <span> - Ghousia college of Engineering</span></Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={12} sm={12} xs={12} >
                <Typography gutterBottom className={classes.num+" "+classes.text}> Personal Projects</Typography >
                    <Card className={classes.root1}>
                        <CardContent>
                            {/* <Typography className={classes.title} gutterBottom> React JS</Typography><br/> */}
                            <Typography className={classes.title} gutterBottom> Login page  using frontend and backend portal</Typography>
                            <Typography className={classes.title} gutterBottom> Hooks BudgetCalculator</Typography>
                            <Typography className={classes.title} gutterBottom> BudgetCalculator</Typography>
                            <Typography className={classes.title} gutterBottom>  E-Commerce</Typography>
                            <Typography className={classes.title} gutterBottom> Portfolio</Typography>
                            {/* <ul style={{listStyle:'none',color:'#d5c455'}}>
                                        <li style={{marginLeft: '-30px',}}>Portfolio</li>
                                        <li >Video related</li>
                                        <li style={{paddingLeft:'25px'}}> BudgetCalculator</li>
                                        <li style={{paddingLeft:'73px'}}> Hooks BudgetCalculator</li>
                                        <li> E-Commerce </li>
                                        <li style={{paddingLeft:'222px'}}>Login page  using frontend and backend portal</li>
                                        <li>........</li>
                            </ul> */}
                        </CardContent>
                    </Card>
                </Grid>
                </Grid>
                </Grid>
                </Grid>
        </>
    );
}

export default Experience;
