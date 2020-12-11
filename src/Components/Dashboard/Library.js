import React from 'react';
import './Dashboard.css';
import ReactPlayer from 'react-player';

function Library (){
    const url = ['https://www.youtube.com/watch?v=NRmSf9VqrUA&list=RDtk36ovCMsU8&index=2&ab_channel=Marshmello','https://www.youtube.com/watch?v=Az-mGR-CehY'];

    const vids = url.map((vid)=>{
        return(
                <div className = 'col-12 col-sm-3 mb-4'>
                    <ReactPlayer url={vid} width = '100%' height = '100%'/>        
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