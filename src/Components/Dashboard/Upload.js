import React, { useState } from 'react';
import './Dashboard.css';
import Header from './Header.js';
import CloseIcon from '@material-ui/icons/Close';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {FormControlLabel,Checkbox} from '@material-ui/core';

function Upload() {
    const [Check , setCheck] = useState(false);
    const [Url , setUrl] = useState('');
    const [Name , setName] = useState('');

    return(
        <div>
            <Header/>
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
                        <FormControlLabel 
                            className = 'mt-5 mb-5'
                            onChange = {()=>{setCheck(!Check)}}
                            control = {<Checkbox color = 'secondary'/>}
                            label = "By checking this box, I certify that use of any facial recognition functionality in this service is not by or for a police department in the United States, and I represent that I have all rights (and individuals’ consents, where applicable) to use and store the file/data, and agree that it will be handled per the Online Services Terms and the Privacy Statement."
                            labelPlacement = 'end'
                        />
                        {Check?<Button variant = 'contained'  className = 'mt-3' color = 'primary' style = {{width : '30%'}}>Upload</Button>:<Button variant = 'contained'  className = 'mt-3' color = 'primary' disabled style = {{width : '30%'}}>Upload</Button>}
                    </form>
                </div>
            </div>
        </div>
    );

}

export default Upload;