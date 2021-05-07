import React from 'react';
import { makeStyles,AppBar,Toolbar,Typography,Button,IconButton ,Hidden,Menu,MenuItem,Grid} from '@material-ui/core';
import {NavLink} from "react-router-dom";
import { MdMenu } from "react-icons/md";
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navcss:{backgroundColor: 'transparent !important',},
  logo:{padding: '5px 20px',textTransform: 'uppercase',letterSpacing: '.2em',fontSize: '24px',fontWeight: 800,transition: 'all 200ms ease'},
  navlink:{textDecoration:'none',color: '#100f3a !important'},
  navcont:{display: `flex`,justifyContent: `space-evenly`,paddingTop:'15px !important',fontSize:'16px'},
  navmenu:{marginLeft: '180px!important'},
  activecss:{fontWeight: "bold",color: "#d5c455 !important"}
}));

export default function Navbar () {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };
    const classes = useStyles();

    return (
    <div className={classes.root} >
    <AppBar position="static" className={classes.navcss}>
        <Toolbar>
        <Grid container spacing={3}>
        <Grid item md={3} xs={3} className={classes.logo}>
        <NavLink to="/Home" className={classes.navlink}>Divya.</NavLink>
        </Grid>
        <Grid item md={9} xs={9} className={classes.navcont} >
        <Hidden xsDown >
                <NavLink to="/Home" activeClassName={classes.activecss} className={classes.navlink}>Home</NavLink>
                <NavLink to="/About" activeClassName={classes.activecss} className={classes.navlink}>About</NavLink>
                <NavLink to="/Skills"activeClassName={classes.activecss} className={classes.navlink}>Skills</NavLink>
                <NavLink to="/Experience"activeClassName={classes.activecss} className={classes.navlink}>Experience</NavLink>
                <NavLink to="/Contact"activeClassName={classes.activecss} className={classes.navlink}>Contact</NavLink>
        </Hidden>
        <Hidden smUp >
            <IconButton edge="start" className={classes.menuButton} color="black" aria-label="menu" className={classes.navmenu}>
                <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
            </IconButton>
        </Hidden>
        </Grid> </Grid>
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        > 
            <NavLink to="/Home" activeClassName={classes.activecss} className={classes.navlink}>
            <MenuItem onClick={handleClose}>Home</MenuItem></NavLink>
            <NavLink to="/About" className={classes.navlink} activeClassName={classes.activecss}>
            <MenuItem onClick={handleClose}>About</MenuItem></NavLink>
            <NavLink to="/Skills" activeClassName={classes.activecss} className={classes.navlink}>
            <MenuItem onClick={handleClose}>Skills</MenuItem></NavLink>
            <NavLink to="/Experience" activeClassName={classes.activecss} className={classes.navlink}>
            <MenuItem onClick={handleClose}>Experience</MenuItem></NavLink>
            <NavLink to="/Contact" activeClassName={classes.activecss} className={classes.navlink}>
            <MenuItem onClick={handleClose}>Contact</MenuItem></NavLink>
        </Menu>
        </Toolbar>
    </AppBar>
    </div>
);
}
