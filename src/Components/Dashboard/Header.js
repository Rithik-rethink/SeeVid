import React from 'react';
import './Dashboard.css';
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
      },
  }));

function Header(){
    const classes = useStyles();
   
    return(
        <div className = 'dashboard'>
            <div className = 'header' style = {{backgroundColor:'black'}}>
                <h1 className = 'logo' style = {{fontSize : '35px' , color:'white' , cursor :'pointer'}}>SeeVid!</h1>
                <HelpOutlineIcon fontSize = 'large' style = {{color : 'white' , cursor:'pointer'}} className = 'mr-3'/>
                <Avatar className = {classes.purple} style = {{cursor : 'pointer'}}>R</Avatar>
            </div>
        </div>
    );
}

export default Header;