import React from "react";
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";
import Navbar from "./Navbar";
import {About,Skills ,Experience,Home,contact } from './Components';
import { makeStyles,Typography} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  footer :{
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    color: 'black !important',
    textAlign: 'center'
}
}))
function App() {
  const classes = useStyles();
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route path='/About' component={About}/>
      <Route path='/Skills' component={Skills}/>
      <Route path='/Experience' component={Experience}/>
      <Route path='/Home' component={Home}/>
      <Route path='/contact' component={contact}/>
      <Redirect to='/Home'/>
    </Switch>
    </BrowserRouter>
    <div className={classes.footer}>
            <Typography>Copyright ©2021 All rights reserved </Typography>
        </div>
    </>
  );
}

export default App;
