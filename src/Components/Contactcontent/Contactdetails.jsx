import emailjs from 'emailjs-com';
import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles,Grid,Button,withStyles,Typography,} from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import Textfield from './TextField';
import {object,string,} from 'yup';
const useStyles = makeStyles((theme) => ({
submitbtn:{backgroundColor: '#d5c455',color:'white !important',border: '1px solid #d5c455 !important',marginLeft:20,'&:hover':{color:'rgba(0, 0, 0, 0.8) !important',backgroundColor:'white'}},
widthip:{width:'100%','& label':{color: '#d5c455 !important'}},
//notchedOutline: {borderWidth: "1px",borderColor: "#d5c455 !important"}
}))
const YellowTextField = withStyles({
    root: {
      '& .MuiInputBase-input': {
        color: 'black', // Text color
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: '#d5c455', // Semi-transparent underline
      },
      '& .MuiInput-underline:hover:before': {
        borderBottomColor: '#d5c455', // Solid underline on hover
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#d5c455', // Solid underline on focus
      },
    },
  })(Textfield);
  
const Contactdetails = () => {
    let history = useHistory();
    const classes = useStyles();
    const [details,setDetails]=useState({Fname:'',Lname:'',email:'',subject:'',message:''});
    const [error, setError] = useState(false);
    let ValidationSchema=object().shape({
        Fname:string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').required('This Field is required'),
        Lname:string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').required('This Field is required'),
        email:string().email('Please enter valid email').required('This Field is required'),
        subject:string().required('This Field is required'),
        message:string().max(200 ,'Max 200 charaters').required('This Field is required')
    });
    return (
        <div>
            <Formik initialValues={details} enableReinitialize={true} validationSchema={ValidationSchema} onSubmit={()=>{
              emailjs.sendForm('gmail','sendemail','#email','user_nYoj4uux8QahCxqIOLypd')
              .then((result) => {
                    if(result.text==='OK'){
                        history.push("/Home");
                    }
                    else{
                        setError(true);
                    }
                  console.log(result.text);
              }, (error) => {
                    setError(true);
                  console.log(error.text);
              });
        
        }}>
            {props => (
                <Form id='email'>
                    <Grid container spacing={3} >
                        <Grid item md={6} sm={6} xs={12} >
                            <Field name={'Fname'} component={YellowTextField} label="First Name *" className={classes.widthip} />
                        </Grid>
                        <Grid item md={6} sm={6} xs={12} >
                            <Field name={'Lname'} component={YellowTextField}  label="Last Name *"className={classes.widthip} />
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <Field name={'email'} component={YellowTextField}  label="Email *"className={classes.widthip} />
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <Field name={'subject'} component={YellowTextField} label="Subject *"className={classes.widthip} />
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <Field name={'message'} label="Message *" component={YellowTextField} multiline rowsMax={6} className={classes.widthip} />
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <Button className={classes.submitbtn} type='submit' > SEND MESSAGE</Button>
                            {error&&<Typography gutterBottom style={{color:'red',padding:10}}>Please Submit your message again!</Typography >}
                        </Grid>
                    </Grid>
                </Form>
            )}
            </Formik>
        </div>
    );
}

export default Contactdetails;
