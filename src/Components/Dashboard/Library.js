import React, {useEffect, useState} from 'react';
import './Dashboard.css';
import ReactPlayer from 'react-player';
import Axios from 'axios';
import {Player} from 'video-react';

function Library (){
    const [Videos , setVideos] = useState([]);
    const url = ['https://www.youtube.com/watch?v=NRmSf9VqrUA&list=RDtk36ovCMsU8&index=2&ab_channel=Marshmello','https://www.youtube.com/watch?v=FIN61p7kJx0'];
    useEffect(()=>{
        const url1 = 'http://localhost:8080/api/user/dashboard';
        Axios.get(url1 , {withCredentials : true})
        .then((res)=>{
            setVideos(res.data.values);
        })
        .catch((err)=>{
            console.log(err.message);
        })
    },[])
    const vids = Videos.map((vid)=>{
        let temp = vid.url.split('&')[0];
        return(
                <div className = 'col-12 col-sm-3 mb-4 mt-4'>
                    
                    <ReactPlayer url={temp} width = '100%' height = '100%'/>
                    <h1>{vid.name}</h1>        
                </div>
        );
    })
    return(
        <div className = 'library container mt-5'>
            <div className = 'row'>

                {vids}
            </div>
        </div>
    );
}

export default Library;