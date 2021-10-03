import React, { useState ,useEffect} from "react";
import GetMobile from "./GetMobile";

function Filter () {
  const [Mobile,SetMobile] = useState("mobileSamsung");

  useEffect(()=>{
      {<GetMobile name={SetMobile}/>}
  },[Mobile])

  return(<>
<div className="grid grid-cols-12 overflow-none"> 

<div className="mx-10 my-7 w-full p-2 h-full shadow-xl col-span-2 rounded-xl">
<div className="mb-2">
<h1 className="mr-20 text-left font-bold text-2xl inline-block">Filters</h1>
<img className="inline-block ml-12 " src="https://i.ibb.co/D5cPpW8/filter-removebg-preview.png" width="40" height="40" alt="filter" border="0"></img>
</div>
<h1 className="text-left font-semibold text-lg">Price List</h1>
<div className="text-center space-y-3 mt-3"> 
<button type="button" onClick={()=>SetMobile("mobileVivo")} className="bg-white hover:bg-liteblue text-gray font-semibold py-2 px-5 border border-gray rounded shadow ">Below ₹ 13000</button><br/>
<button type="button" className="bg-white hover:bg-liteblue text-gray font-semibold py-2 px-5 border border-gray rounded shadow ">Below ₹ 17000</button><br/>
<button type="button" className="bg-white hover:bg-liteblue text-gray font-semibold py-2 px-5 border border-gray rounded shadow ">Below ₹ 20000</button><br/>
<h1 className="text-left font-semibold text-lg">Brand List</h1>

<div className="ml-12 checkbox-div">
<label className="block">
  <input type="checkbox"  value="samsung"/>
  <span className="mx-1">Samsung</span>
</label>
<label className="block">
  <input type="checkbox"  value="vivo"/>
  <span className="mx-1">Vivo</span>
</label>        
<label className="block">
  <input type="checkbox"  value="vivo"/>
  <span className="mx-1">Oppo</span>
</label>        
<label className="block">
  <input type="checkbox"  value="vivo"/>
  <span className="mx-1">Poco</span>
</label>        
<label className="block">
  <input type="checkbox"  value="vivo"/>
  <span className="mx-1">Oneplus</span>
</label>        
<label className="block">
  <input type="checkbox"  value="vivo"/>
  <span className="mx-1">Realme</span>
</label>        
<label className="block">
  <input type="checkbox"  value="vivo"/>
  <span className="mx-1">Xiaomi</span>
</label>        
</div>

<h1 className="text-left font-semibold text-lg">Camera</h1>

<div className="text-center space-y-3 mt-3"> 
<button type="button" className="bg-white hover:bg-liteblue text-gray font-semibold py-2 px-5 border border-gray rounded shadow ">12MP and above</button><br/>
<button type="button" className="bg-white hover:bg-liteblue text-gray font-semibold py-2 px-5 border border-gray rounded shadow ">16MP and above</button><br/>
<button type="button" className="bg-white hover:bg-liteblue text-gray font-semibold py-2 px-5 border border-gray rounded shadow ">20MP and above</button><br/>
</div>


<h1 className="text-left font-semibold text-lg">Battery</h1>
<div className="text-center space-y-3 mt-3"> 
<button type="button" className="bg-white hover:bg-liteblue text-gray font-semibold py-2 px-5 border border-gray rounded shadow ">Above 2000 mAH</button><br/>
<button type="button" className="bg-white hover:bg-liteblue text-gray font-semibold py-2 px-5 border border-gray rounded shadow ">Above 3500 mAH</button><br/>
<button type="button" className="bg-white hover:bg-liteblue text-gray font-semibold py-2 px-5 border border-gray rounded shadow ">Above 5000 mAH</button><br/>
</div>
<h1 className="text-left font-semibold text-lg">Display</h1>

<div className="ml-12 checkbox-div">

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

<h1 className="text-left font-semibold text-lg">Architecture</h1>
<div className="text-center space-y-3 mt-3"> 
<button type="button" className="bg-white hover:bg-liteblue text-gray font-semibold py-2 px-5 border border-gray rounded shadow " >3GB RAM and 32GB</button><br/>
<button type="button" className="bg-white hover:bg-liteblue text-gray font-semibold py-2 px-5 border border-gray rounded shadow ">4GB RAM and 64GB</button><br/>
<button type="button" className="bg-white hover:bg-liteblue text-gray font-semibold py-2 px-5 border border-gray rounded shadow ">6GB RAM and 64GB</button><br/>
</div>
</div>
</div>
<div className="col-span-10">
 <GetMobile name={Mobile} />
</div>
</div>
</>)

}

export default Filter;
