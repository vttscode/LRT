import React from 'react';
import './App.css';
import LRTLive from "./components/Live";
import HD from "./components/Live/Icons/images/LTVHD.png";
import HDplius from "./components/Live/Icons/images/LRTHDPlius.png";
import HDklasika from "./components/Live/Icons/images/LRTKlasika.png";
import Lithuanica from "./components/Live/Icons/images/LRTLithuanica.png";
import OPUS from "./components/Live/Icons/images/LRTOpus.png";
import Radijas from "./components/Live/Icons/images/LRTRadijas.png";
import LRT from "./components/Live/Icons/images/LRT.jpg";


function App() {
    return (
        <div className="App">
            <div className="base-container">
                <a href="https://www.lrt.lt/programa" target="_blank"><img className="Lrt" src={LRT}/></a>
                <div className="container show-list">
                    <div className="row justify-content-md-center">
                        <div className="col-lg rounded channel">
                            <div><a href="https://www.lrt.lt/mediateka/tiesiogiai/lrt-televizija" target="_blank"><img
                                src={HD}/></a></div>
                        </div>
                        <div className="col-lg rounded channel">
                            <div><a href="https://www.lrt.lt/mediateka/tiesiogiai/lrt-plius" target="_blank"><img
                                src={HDplius}/></a></div>
                        </div>
                        <div className="col-lg rounded channel">
                            <div><a href="https://www.lrt.lt/mediateka/tiesiogiai/lrt-lituanica" target="_blank"><img
                                src={Lithuanica}/></a></div>
                        </div>
                        <div className="col-lg rounded channel">
                            <div><a href="https://www.lrt.lt/mediateka/tiesiogiai/lrt-radijas" target="_blank"><img
                                src={Radijas}/></a></div>
                        </div>
                        <div className="col-lg rounded channel">
                            <div><a href="https://www.lrt.lt/mediateka/tiesiogiai/lrt-klasika" target="_blank"><img
                                src={HDklasika}/></a></div>
                        </div>
                        <div className="col-lg rounded channel">
                            <div><a href="https://www.lrt.lt/mediateka/tiesiogiai/lrt-opus" target="_blank"><img
                                src={OPUS}/> </a></div>
                        </div>
                    </div>
                </div>


                <LRTLive/>

            </div>
        </div>
    );
}

export default App;
