import React,{  Suspense} from "react";
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";
import Navbar from "./Navbar";
import {About,Skills ,Experience,Home,contact } from './Components';

function App() {
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
    </>
  );
}

export default App;
