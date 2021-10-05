import React, { useState ,useEffect} from "react";
import GetMobile from "./GetMobile"
import { useParams } from "react-router";

function Filter () {
  const  mobile  = useParams();
  
  // render component Getmobile
  const [Price,SetPrice] = useState(mobile.price);
  const [Mobile,SetMobile] = useState(mobile.id);
  console.log(mobile.id);
  console.log(mobile.price)

  // filter button update
  const [Vivo,AddVivo] = useState(false);
  const [Oppo,AddOppo] = useState(false);
  const [Samsung,AddSamsung] = useState(false);
  const [Xiaomi,AddXiaomi] = useState(false);
  const [Oneplus,AddOneplus] = useState(false);
  const [Poco,AddPoco] = useState(false);
  const [Realme,AddRealme] = useState(false);
  const [Below13,SetBelow13] = useState(false);
  const [Below17,SetBelow17] = useState(false);
  const [Below20,SetBelow20] = useState(false);



  useEffect(()=>{
      <GetMobile name={Mobile} cost={Price} />
  },[Mobile,Price])

  


function clickPrice(cost){
  SetPrice(cost);
  if(cost===13000){
    SetBelow13(true);
  }
  else{
    SetBelow13(false);
  }
  if(cost===17000){
    SetBelow17(true);
  }
  else{
    SetBelow17(false)
  }
  if(cost===20000){
    SetBelow20(true);
  }
  else{
    SetBelow20(false)
  }
}

function clickMobile(name){
  SetMobile(name)
  if(name==="Vivo"){
    AddVivo(true);
  }
  else{
    AddVivo(false);
  }
  if(name==="Oppo"){
    AddOppo(true);
  }
  else{
    AddOppo(false);
  }
  if(name==="Samsung"){
    AddSamsung(true);
  }
  else{
    AddSamsung(false);
  }
  if(name==="Xiaomi"){
    AddXiaomi(true);
  }
  else{
    AddXiaomi(false);
  }
  if(name==="Oneplus"){
    AddOneplus(true);
  }
  else{
    AddOneplus(false);
  }
  if(name==="Poco"){
    AddPoco(true);
  }
  else{
    AddPoco(false);
  }
  if(name==="Realme"){
    AddRealme(true);
  }
  else{
    AddRealme(false);
  }
  
}





return(<>
<div className="grid grid-cols-12 overflow-none"> 
<div className="mx-10 my-7 w-full p-2 h-full shadow-xl col-span-2 rounded-xl">
<div className="mb-2">
<h1 className="mr-20 text-left font-bold text-2xl inline-block">Filters</h1>
<img className="inline-block ml-12 " src="https://i.ibb.co/D5cPpW8/filter-removebg-preview.png" width="40" height="40" alt="filter" border="0"></img>
</div>


<h1 className="text-left font-semibold text-lg mt-2">Price List</h1>

<div className="text-center space-y-3 mt-4 mb-4">
<button type="button" onClick={()=>clickPrice(13000)} className={"hover:bg-litegreen transition duration-500 ease-in-out font-semibold py-2 px-5 border border-gray rounded shadow" +(Below13 ? " bg-litegreen text-white" : "text-black")}>Below ₹ 13000</button><br/>
<button type="button" onClick={()=>clickPrice(17000)} className={"hover:bg-litegreen transition duration-500 ease-in-out font-semibold py-2 px-5 border border-gray rounded shadow" +(Below17 ? " bg-litegreen text-white" : "text-black")}>Below ₹ 17000</button><br/>
<button type="button" onClick={()=>clickPrice(20000)} className={"hover:bg-litegreen transition duration-500 ease-in-out font-semibold py-2 px-5 border border-gray rounded shadow" +(Below20 ? " bg-litegreen text-white" : "text-black")}>Below ₹ 20000</button><br/>      
</div>



<h1 className="text-left font-semibold text-lg mt-10">Brand List</h1>

<div className="text-left space-x-3 space-y-3 mt-3 mb-4"> 
<button type="button" onClick={()=>clickMobile("Vivo")}  className={" ml-3 transition duration-500 ease-in-out  hover:bg-vivo hover:text-white transform hover:-translate-y-1 hover:scale-110  font-semibold py-2 px-5 border border-vivo rounded shadow" +(Vivo ? " bg-vivo text-white" : " text-vivo")}>v i v o </button>
<button type="button" onClick={()=>clickMobile("Xiaomi")} className={" ml-3 transition duration-500 ease-in-out  hover:bg-xiaomi hover:text-white transform hover:-translate-y-1 hover:scale-110  font-semibold py-2 px-5 border border-xiaomi rounded shadow" +(Xiaomi ? " bg-xiaomi text-white" : " text-xiaomi")}>X i a o m i</button>
<button type="button" onClick={()=>clickMobile("Oppo")} className={" ml-3 transition duration-500 ease-in-out  hover:bg-oppo hover:text-white transform hover:-translate-y-1 hover:scale-110  font-semibold py-2 px-5 border border-oppo rounded shadow" +(Oppo ? " bg-oppo text-white" : " text-oppo")}>o p p o</button>
<button type="button" onClick={()=>clickMobile("Poco")} className={"ml-3 transition duration-500 ease-in-out  hover:bg-poco hover:text-black transform hover:-translate-y-1 hover:scale-110 font-semibold py-2 px-5 border border-poco rounded shadow" +(Poco ? " bg-poco text-black" : " text-poco")}>P o c o</button>
<button type="button" onClick={()=>clickMobile("Oneplus")} className={"ml-3 transition duration-500 ease-in-out  hover:bg-oneplus hover:text-white transform hover:-translate-y-1 hover:scale-110  font-semibold py-2 px-5 border border-oneplus rounded shadow" +(Oneplus ? " bg-oneplus text-white" : " text-oneplus")}>o n e p l u s</button>
<button type="button" onClick={()=>clickMobile("Realme")} className={"ml-3 transition duration-500 ease-in-out  hover:bg-realme hover:text-grey transform hover:-translate-y-1 hover:scale-110  font-semibold py-2 px-5 border border-realme rounded shadow" +(Realme ? " bg-realme text-grey" : " text-realme")}>R e a l m e</button>
<button type="button" onClick={()=>clickMobile("Samsung")} className={"ml-3 transition duration-500 ease-in-out  hover:bg-samsung hover:text-white transform hover:-translate-y-1 hover:scale-110  font-semibold py-2 px-5 border border-samsung rounded shadow" +(Samsung ? " bg-samsung text-white" : " text-samsung")}>S a m s u n g</button>
</div>



<h1 className="text-left font-semibold text-lg mt-10">Camera</h1>
<div className="text-center space-y-3 mt-3"> 
<button type="button" className="bg-white hover:bg-liteblue text-gray font-semibold py-2 px-5 border border-gray rounded shadow ">12MP and above</button><br/>
<button type="button" className="bg-white hover:bg-liteblue text-gray font-semibold py-2 px-5 border border-gray rounded shadow ">16MP and above</button><br/>
<button type="button" className="bg-white hover:bg-liteblue text-gray font-semibold py-2 px-5 border border-gray rounded shadow ">20MP and above</button><br/>
</div>


<h1 className="text-left font-semibold text-lg mt-10">Battery</h1>
<div className="text-center space-y-3 mt-4"> 
<button type="button" className="bg-white hover:bg-liteblue text-gray font-semibold py-2 px-5 border border-gray rounded shadow ">Above 2000 mAH</button><br/>
<button type="button" className="bg-white hover:bg-liteblue text-gray font-semibold py-2 px-5 border border-gray rounded shadow ">Above 3500 mAH</button><br/>
<button type="button" className="bg-white hover:bg-liteblue text-gray font-semibold py-2 px-5 border border-gray rounded shadow ">Above 5000 mAH</button><br/>
</div>


<h1 className="text-left font-semibold text-lg mt-10">Display</h1>
<div className="ml-8 checkbox-div mt-4">
<label className="block">
  <input type="checkbox"  value="samsung"/>
  <span className="mx-1">above 4 inch</span>
</label>
<label className="block">
  <input type="checkbox"  value="vivo"/>
  <span className="mx-1">above 5 inch</span>
</label>        
<label className="block">
  <input type="checkbox"  value="vivo"/>
  <span className="mx-1">above 6 inch</span>
</label>        
</div>

<h1 className="text-left font-semibold text-lg mt-10">Architecture</h1>
<div className="text-center space-y-3 mt-4"> 
<button type="button" className="bg-white hover:bg-liteblue text-gray font-semibold py-2 px-5 border border-gray rounded shadow ">3GB RAM and 32GB</button><br/>
<button type="button" className="bg-white hover:bg-liteblue text-gray font-semibold py-2 px-5 border border-gray rounded shadow ">4GB RAM and 64GB</button><br/>
<button type="button" className="bg-white hover:bg-liteblue text-gray font-semibold py-2 px-5 border border-gray rounded shadow ">6GB RAM and 64GB</button><br/>
</div>
</div>
<div className="col-span-10">
 <GetMobile name={Mobile} cost={Price} />
</div>
</div>
</>)

}

export default Filter;
