import React from 'react';
import './Login.css';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {FormControlLabel,Checkbox} from '@material-ui/core';
import Axios from 'axios';
import {Redirect} from 'react-router-dom';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : "",
            error: false,
            code : 1,
            error_message : "",
            dest:"/login"
        }
    }
    
    handleChange(event , element){
        var value = event.currentTarget.value;
        if(element === "email"){
            this.setState({
                email : value
            })
        }
        else if(element === "password"){
            this.setState({
                password : value
            })
        }
    }
    handleClick(){
        console.log('Log In button clicked')
    }
    render(){
        
        return(
            <div className = 'container register'>
                <h1 className = 'logo2'>SeeVid</h1>
                <div className = 'row justify-content-center'>
                    <h1 className = 'col-12 col-sm-6'>Login to start Exploring.</h1>
                </div>            
                <div className = 'row justify-content-center'>
                    <form className = 'form' noValidate autoComplete="off">
                        <TextField id="outlined-basic" className = 'col-12 col-sm-12 ' label="Email address" variant="filled" onChange = {(event)=>this.handleChange(event,"email")}/>
                        <TextField id="outlined-basic" className = 'mt-5 col-12 col-sm-12' label="Password" type = "password" variant="filled" onChange = {(event)=>this.handleChange(event,"password")}/>
                        <p className = 'mt-3 col-12 col-sm-12'><a href = '/'>Forgot your password?</a></p>
                        <FormControlLabel 
                            control = {<Checkbox color = 'secondary' />}
                            label = "Remember me"
                            labelPlacement = 'end'
                        />
                        {this.state.error ? <p className = 'error'><b>{this.state.error_message}</b></p>:<p></p>}
                        <Button variant = 'contained'  className = 'mt-3' color = 'primary' style = {{width : '100%'}} onClick = {this.handleClick.bind(this)}>Log In</Button>
                        <p className = 'login_redirect mt-2'>Don't have an account?<b><a href = '/register'> Sign Up.</a></b></p>
                    </form>

                </div>
            </div>
        );
    }
}

export default Login;