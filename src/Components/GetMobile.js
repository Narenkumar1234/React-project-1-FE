import React from "react";
import {useEffect, useState} from 'react';
import 'reactjs-popup/dist/index.css';
import Araise from "./Araise";
var Compare=[];

const makeLink = (str,name,store) =>{
  if(str==="null"){
    return "https://www.google.com/search?q="+name+" "+store;
  }
      var mySubString = str.substring(
      str.indexOf("=") + 1,
      str.indexOf("target=blank")
    );
    var link = mySubString;
    link =link.replaceAll("amp;","")
    return "https://www.91mobiles.com"+link;
}

const GetMobile = ( props ) => {
  const [mobile,setMobile] = useState([]);
  const [loading,setLoading] = useState(false);
  const [compare,setCompare] = useState(false);
  var response;
var Search;
const getMobile = async () => {
  try{
    if(isNaN(props.name) && typeof props.batt==='undefined' && typeof props.cam=='undefined' && typeof props.cost==='undefined' && typeof props.disp==='undefined' && typeof props.search==='undefined'){
      response = await fetch("http://localhost:5000/"+props.name+"/search");
    }
    else if(isNaN(props.name)){
      var name    = isNaN(props.name)?props.name:"complete";
      var price   = typeof props.cost   ==='undefined'  ? '90000':props.cost;
      var battery = typeof props.batt   ==='undefined'  ? '1000':props.batt;
      var camera  = typeof props.cam    ==='undefined'  ? '12':props.cam;     
      var display = typeof props.disp   ==='undefined'  ? '1.0':props.disp;  
      Search      = typeof props.search ==='undefined'  ? 'search': props.search;
      setLoading(false);
        response = await fetch("http://localhost:5000/"+name+"/"+price+"/"+battery+"/"+camera+"/"+display+"/"+Search);
    }
    else if(!isNaN(props.name)){
      setLoading(false);
      if(typeof props.cam=='undefined' && typeof props.disp==='undefined' && typeof props.batt==='undefined' && typeof props.search==='undefined')
      response = await fetch("http://localhost:5000/"+(props.name)+"/"+(props.cost)+"/search");
    else {
      setLoading(false);
      var a = isNaN(props.name)?props.name:"complete";
      var b = typeof props.cost    === 'undefined' ? '90000':props.cost;
      var c = typeof props.batt    === 'undefined' ? '1000':props.batt;
      var d = typeof props.cam     === 'undefined' ? '12':props.cam;
      var e = typeof props.disp    === 'undefined' ? '1.0':props.disp;  
      Search = typeof props.search === 'undefined' ? 'search': props.search;
      response = await fetch("http://localhost:5000/"+a+"/"+b+"/"+c+"/"+d+"/"+e+"/"+Search);
  }
}
    console.log(response);
    const jsonData = await response.json();
    setMobile(jsonData);
    setLoading(true); 
  }
  catch (err){
    console.log(err.message);
  }
 }
function AddToCompare(heyMobile){
  Compare.push(heyMobile);

  if(Compare.length===2){
    setCompare(true);
  }
  if(Compare.length>2){
    setCompare(false);
    Compare=[];
    Compare.push(heyMobile);
  }
  if(Compare.length<=1){
    setCompare('null');
  }
}

useEffect(()=> {
  getMobile();  
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[props.name,props.cost,props.batt,props.cam,props.disp,props.search])

return (
<>
<br/>
<br/>
{compare==='null' || compare===true?(
  <center>
<span className="w-2/3 text-white border-black fixed font-semibold text-lg 
  box-border border-2 rounded-lg bg-blue ml-96 bottom-6 mb-5 animate-none 
  cursor-defalut shadow-lg text-left px-10">
  =&gt; Added ({Compare.length})</span></center>):(<div></div>)}
{compare && compare!=='null' ? (<Araise list={Compare}/>):(<div></div>)}
{ loading ? (
  mobile.filter((mobile) => {
      if(props.search === null || props.search === "undefined" || typeof props.search=== 'undefined'){
      return mobile;
      }
      else if (mobile.mobilename.toLowerCase().includes((props.search).toLowerCase())){
      return mobile;
      }
      
    }).map(mobile=>(
<div key={mobile.id} className=" lg:px-24 lg:py-7 ">
    <div  className="rounded-lg border-t-2  border-blue grid grid-rows-6 shadow-md  mx-1 ">
      <div className="row-span-1 grid grid-cols-5 ">
        <h1 id="MName" className="text-center  lg:px-3 lg:py-3 font-semibold col-span-1 text-sm">{mobile.mobilename}</h1>
        <h1 id="MPrice" className="lg:text-right lg:px-5 lg:py-2 font-semibold col-span-4 text-3xl text-green">₹{mobile.price}</h1>
      </div>

      <div className="row-span-4 grid grid-cols-5 space-x-3 px-2 text-center mx-auto">
        <img id="MImage" className="text-center mx-auto w-10/12 " src={mobile.imagesrc}  alt="xoami mobile"/>  
        
        <div id="performance">
          <h1 className="mt-10 font-bold p-3 text-center  h-48 box-border shadow-lg"><img className="inline" src="https://i.ibb.co/3skXMcx/performance-svg.png  " alt="performance-svg" border="0" /> Performance <hr/> <span className="font-normal pt-0">{mobile.performance}</span> </h1>
        </div>
        
        <div id="display">
          <h1 className="mt-10 font-bold p-3 text-center border-3 h-48 box-border shadow-lg"><img className="inline" src="https://i.ibb.co/7Yqqysx/display-svg.png" alt="display-svg" border="0" /> Display <hr /> <span className="font-normal pt-0">{mobile.display}</span> </h1>
        </div>
        
        <div id="camera">
          <h1 className="mt-10 font-bold p-3 text-center border-3 h-48 box-border shadow-lg"><img className="inline" src="https://i.ibb.co/yyCK5LH/camera-svg.png" alt="battery-svg" border="0" /> Camera <hr />  <span className="font-normal pt-0"> {mobile.camera} </span> </h1>
          <br />
        </div>
        
        <div id="battery">
          <h1 className="mt-10 font-bold p-3 text-center border-3 h-48 box-border shadow-lg"> <img className="inline" src="https://i.ibb.co/64wzrpV/battery-svg.png" alt="battery-svg" border="0" /> Battery <hr /> <span className="font-normal pt-0"> {mobile.battery} </span> </h1>
          <br />
        </div>
      </div>

      <div className="row-span-1 grid grid-cols-5 ">
      <button className="text-center text-green lg:px-3 lg:py-3 font-semibold col-span-1 text-lg grid-rows-5" onClick={()=>AddToCompare(mobile)}> + Add to compare  </button>  
        <div className="col-span-4 text-right">   
          <a href={makeLink(mobile.flipkartlink,mobile.mobilename,"flipkart")} ><h1 className="lg:px-5 lg:py-2 font-bold inline-block text-xl"><img className="w-14 inline-block"  src="https://i.ibb.co/BB9ymDL/flipkart.jpg"  alt="flipkart" />flipkart</h1></a>
          <a href={makeLink(mobile.amazonlink,mobile.mobilename,"amazon")} ><h1 className="lg:px-5 lg:py-2 font-bold inline-block text-xl"><img className="w-10 inline-block"  src="https://i.ibb.co/VjKn8y7/amazon.png"  alt="amazon" />amazon</h1></a>
        </div>
      </div>
      </div>
</div>  
))

):(<div className=" lg:px-24 lg:py-7 ">
<div  className="animate-pulse rounded-lg border-t-2  border-blue grid grid-rows-6 shadow-md  mx-1 ">
      <div className="row-span-1 grid grid-cols-5 ">
        <button className="btn btn-lg btn-ghost text-green loading">loading..</button>
      </div>
      <div className="row-span-4 grid grid-cols-5 space-x-3 px-2 text-center mx-auto">
        <img id="MImage" className="text-center mx-auto w-8/12 shadow-md" src="https://wallpaperaccess.com/full/1668898.jpg"  alt="xoami mobile"/>  

        <div id="performance">
          <h1 className="mt-10 font-bold p-3 text-center  h-48 box-border shadow-lg text-black"><img className="inline" src="https://i.ibb.co/3skXMcx/performance-svg.png  " alt="performance-svg" border="0" /> Performance <hr/> <span className="font-normal pt-0"></span> </h1>
        </div>
        
        <div id="display">
          <h1 className="mt-10 font-bold p-3 text-center border-3 h-48 box-border shadow-lg"><img className="inline" src="https://i.ibb.co/7Yqqysx/display-svg.png" alt="display-svg" border="0" /> Display <hr /> <span className="font-normal pt-0"></span> </h1>
        </div>
        
        <div id="camera">
          <h1 className="mt-10 font-bold p-3 text-center border-3 h-48 box-border shadow-lg"><img className="inline" src="https://i.ibb.co/yyCK5LH/camera-svg.png" alt="battery-svg" border="0" /> Camera <hr />  <span className="font-normal pt-0"></span> </h1>
          <br />
        </div>
        
        <div id="battery">
          <h1 className="mt-10 font-bold p-3 text-center border-3 h-48 box-border shadow-lg"> <img className="inline" src="https://i.ibb.co/64wzrpV/battery-svg.png" alt="battery-svg" border="0" /> Battery <hr /> <span className="font-normal pt-0"></span> </h1>
          <br />
        </div>
      </div>

      <div className="row-span-1 grid grid-cols-5 ">
      <button className="text-center text-green lg:px-3 lg:py-3 font-semibold col-span-1 text-lg grid-rows-5" onClick={()=>AddToCompare(mobile)}> + Add to compare  </button>  
        <div className="col-span-4 text-right">   
          <a href="www.google.com" ><h1 className="lg:px-5 lg:py-2 font-bold inline-block text-xl"><img className="w-14 inline-block"  src="https://i.ibb.co/BB9ymDL/flipkart.jpg"  alt="flipkart" />flipkart</h1></a>
          <a href="www.google.com" ><h1 className="lg:px-5 lg:py-2 font-bold inline-block text-xl"><img className="w-10 inline-block"  src="https://i.ibb.co/VjKn8y7/amazon.png"  alt="amazon" />Amazon</h1></a>
        </div>
      </div>
    </div>
</div>
)}
</>
)}
export default GetMobile;