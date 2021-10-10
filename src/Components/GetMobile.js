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

const getMobile = async () => {
  try{
    if(typeof props.cost === 'undefined'){
      response = await fetch("http://localhost:5000/"+props.name);
    }
    else if(isNaN(props.name)){
     response = await fetch("http://localhost:5000/"+props.name+"/"+props.cost);
    }
    else{
      response = await fetch("http://localhost:5000/"+parseInt(props.name)+"/"+parseInt(props.cost));
    }
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
},[props.name,props.cost,compare])

return (
<>
<br/>
<br/>
{compare==='null' || compare===true?(
  <center>
<span className="w-2/3 text-white border-black fixed font-semibold text-lg 
  box-border border-2 rounded-lg bg-compare ml-96 bottom-6 mb-5 animate-none cursor-defalut
   shadow-lg text-left px-10">
  =&gt; Added ({Compare.length})</span></center>):(<div></div>)}
{compare && compare!=='null' ? (<Araise list={Compare}/>):(<div></div>)}
{ loading ? (
  mobile.map(mobile=>(
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
):(<div className="animate-pulse text-center text-2xl text-bold text-green" key={0}>Loading...</div>) }
  </>
  );
  
}
export default GetMobile;