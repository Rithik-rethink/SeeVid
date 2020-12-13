import React, { useState , useEffect} from 'react';
import './Dashboard.css';
import Header from './Header.js';
import CloseIcon from '@material-ui/icons/Close';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {FormControlLabel,Checkbox} from '@material-ui/core';
import Axios from 'axios';
import {Redirect} from 'react-router-dom';


function Upload() {
    const [Check , setCheck] = useState(false);
    const [Url , setUrl] = useState('');
    const [Name , setName] = useState('');
    const [Log , setLog] = useState(false);
    const [Err , setErr] = useState('');
    const [Error , setError] = useState(false);
    const [Upload , setUpload] = useState(false);
    const [Query , setQuery] = useState('');
      useEffect(()=>{
          Axios.get('http://localhost:8080/api/user/dashboard',{withCredentials : true}).then((res)=>{
              setLog(false);
            }).catch((err)=>{
                setLog(true);
            })
        },[]);
    
    const handleClick = ()=>{
        if(Url === '' || Name === '' || Query === ''){
            setErr('Please Enter all the fields');
            setError(true);
        }
        else{
            setError(false);
            var payload = {
                "url" : Url,
                "VideoName" : Name,
                "Query" : Query
            };
            const url = 'http://localhost:8080/api/user/upload';
            Axios.post(url , payload , {
                "headers":{
                            "Accept": 'application/json',
                            "content-type":"application/json",
                        },
                        withCredentials : true
            }).then((res)=>{
                setUpload(true);
            }).catch((err)=>{
                setError(true);
                setErr(err.response.data.message);
            })
        }
        
    }
    return(
        <div>
            <Header/>
            {Upload? <Redirect to ='/player'/>:<div/>}
            {Log?<Redirect to = '/login'/>:<div/>}

            <div className = 'upload'>
                <div className = 'container'>
                    <div className = 'mediaup mt-5'>
                        <h2>Upload your media file</h2>
                        <a href = '/in'><CloseIcon fontSize = 'large' className = 'cross'/></a>
                    </div>
                </div>
                <div className = 'up-area'>
                    <form className = 'form' noValidate autoComplete="off">
                        <TextField id="outlined-basic" className = 'col-12 col-sm-12 ' label="Enter URL" type = 'url' variant="outlined" onChange = {(e)=>{setUrl(e.target.value);}}/>
                        <TextField id="outlined-basic" className = 'mt-5 col-12 col-sm-12' label="Video name" variant="outlined" onChange = {(e)=>{setName(e.target.value);}}/>
                        <TextField id="outlined-basic" className = 'mt-5 col-12 col-sm-12' label="What do you want to search for?" variant="outlined" onChange = {(e)=>{setQuery(e.target.value);}}/>
                        
                        <FormControlLabel 
                            className = 'mt-5 mb-5'
                            onChange = {()=>{setCheck(!Check)}}
                            control = {<Checkbox color = 'secondary'/>}
                            label = "By checking this box, I certify that use of any facial recognition functionality in this service is not by or for a police department in the United States, and I represent that I have all rights (and individuals’ consents, where applicable) to use and store the file/data, and agree that it will be handled per the Online Services Terms and the Privacy Statement."
                            labelPlacement = 'end'
                        />
                        {Error ? <p className = 'error'><b>{Err}</b></p>:<p></p>}
                        {Check?<Button variant = 'contained'  className = 'mt-3' color = 'primary' style = {{width : '30%'}} onClick = {handleClick}>Upload</Button>:<Button variant = 'contained'  className = 'mt-3' color = 'primary' disabled style = {{width : '30%'}} onClick = {handleClick}>Upload</Button>}
                    </form>
                </div>
            </div>
        </div>
    );

}

export default Upload;