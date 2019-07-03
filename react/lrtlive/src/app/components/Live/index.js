import React from 'react';
import {useFetch} from '../../utils/fetch-hook';
import './bootstrap/css/bootstrap.min.css';
import './index.css';


function Item(data){
  return (
    <div className="col-lg rounded channel">
      <span>{data.time}</span>
      <h6>{data.showTitle}</h6>
    </div>
  )
}

function LRTLive () {
  const {loading, data} = useFetch();
  return (
      <div className="container show-list">
        <div className="row justify-content-md-center">
          {loading ?
            <div>Loading...</div>
            :
            data.map(Item)
          }
        </div>
      </div>
    );
}

export default LRTLive;
