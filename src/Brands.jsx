import React from "react";
import "./index.css"
import {  BrowserRouter as Router,  Route,  Link,  Switch } from 'react-router-dom';
function Brand(){
return (
<>
<Router>
<div className="px-12 text-center lg:px-32 py-10 filter drop-shadow-lg ">
<div><h1 className="py-1 lg:px-0 mx-auto text-center lg:text-left font-semibold pb-5">Search By Brand</h1></div>  
        <div className="lg:space-x-14">
            <div className="inline-block lg:transform lg:h-30  transition duration-500 lg:hover:scale-125">
            <Link className="transform h-64  transition duration-500 hover:scale-125" to="/getSamsung">
            <img className=" py-1 px-1.5 lg:px-0 inline-block" src="https://i.ibb.co/j6RQ0Kq/samsung.png" width="85px" height="85px" alt="xoami"/>
            </Link>
            </div>
            <div className="inline-block lg:transform lg:h-30  transition duration-500 lg:hover:scale-125">
            <a href="https://google.com" id="vivo">
            <img className="  py-1 px-1.5 lg:px-0 inline-block" src="https://i.ibb.co/LZMLHrP/vivo.png" width="85px" height="85px" alt="xoami"/>
            </a>
            </div>
            <div className="inline-block lg:transform lg:h-30  transition duration-500 lg:hover:scale-125">
            <a href="https://google.com" id="samsung">
            <img className="  py-1 px-1.5 lg:px-0 inline-block" src="https://i.ibb.co/KWjhwf4/xiaomi.png" width="85px" height="85px" alt="xoami"/>
            </a>
            </div>
            <div className="inline-block lg:transform lg:h-30  transition duration-500 lg:hover:scale-125">
            <a href="https://google.com" id="realme">
            <img className="  py-1 px-1.5 lg:px-0 inline-block" src="https://i.ibb.co/fSBYbGd/RealMe.png" width="85px" height="85px" alt="xoami"/>
            </a>
            </div>
            <div className="inline-block lg:transform lg:h-30  transition duration-500 lg:hover:scale-125">
            <a href="https://google.com" id="oppo">
            <img className="  py-1 px-1.5 lg:px-0 inline-block" src="https://i.ibb.co/6Y7FBkF/oppo.png" width="85px" height="85px" alt="xoami"/>
            </a>
            </div>
            <div className="inline-block lg:transform lg:h-30  transition duration-500 lg:hover:scale-125">
            <a href="https://google.com" id="oneplus">
            <img className="  py-1 px-1.5 lg:px-0 inline-block" src="https://i.ibb.co/KFM7KQJ/oneplus.png" width="85px" height="85px" alt="xoami"/>
            </a>
            </div>
            <div className="inline-block lg:transform lg:h-30  transition duration-500 lg:hover:scale-125">
            <a href="https://google.com" id="intex">
            <img className="  py-1 px-1.5 lg:px-0 inline-block" src="https://i.ibb.co/F3M6RHK/intex.png" width="85px" height="85px" alt="xoami"/>
            </a>
            </div>
            <div className="inline-block lg:transform lg:h-30  transition duration-500 lg:hover:scale-125">
            <a href="https://google.com" id="poco">
            <img className="  py-1 px-1.5 lg:px-0 inline-block" src="https://i.ibb.co/xJytR21/poco.png" width="85px" height="85px" alt="xoami"/>
            </a>
            </div>
            <div className="inline-block lg:transform lg:h-30  transition duration-500 lg:hover:scale-125">
            <a href="https://google.com" id="moto">
            <img className="  py-1 px-1.5 lg:px-0 inline-block" src="https://i.ibb.co/1m8rGqW/moto.png" width="85px" height="85px" alt="xoami"/>
            </a>
            </div>
        </div>
    </div>

</Router>
</>

);
}

export default Brand;