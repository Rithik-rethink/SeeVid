import React,{useState} from 'react';
import './Dashboard.css';
import ReactPlayer from 'react-player'

function Dashboard(){
    const [Vid, setVid] = useState('#');

    return(
        <div className = 'dashboard'>
            <input type = 'text' onChange = {(e)=>{
                if(e.target.value.length === 0){
                    setVid('#');
                }
                else
                    setVid(e.target.value)}} placeholder = 'Enter URL'/>
            <ReactPlayer url = {Vid} controls playing/>
        </div>
    );
}

export default Dashboard;
