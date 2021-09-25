import React from "react";
import { withRouter } from "react-router";
function GetSamsung(){
    return (
    <>
{/* shadow  */}
<div className="px-12 lg:px-24 py-10">
{/* divide page */}
    <div className=" grid grid-cols-5">
      {/* filters  */}
      <div className="w-64 shadow-md mx-1 col-span-1">
        <h1 className="text-center font-bold text-2xl">Filters</h1>
      </div>
      {/*name  & price  row */}
      <div className="rounded-lg border-t-2  border-blue grid grid-rows-6 shadow-md  mx-1 col-span-4">
        <div className="row-span-1 grid grid-cols-5 ">
        <h1 id="MName" className="text-center  lg:px-3 lg:py-3 font-semibold col-span-1 text-lg">Xiaomi Redmi Note 10</h1>
        <h1 id="MPrice" className="lg:text-right lg:px-5 lg:py-2 font-semibold col-span-4 text-3xl text-green">$8000</h1>
        </div>
      {/* image performance display camera battery  */}
        <div  className="row-span-4 grid grid-cols-5 space-x-3 px-2 text-center mx-auto">
        <img id="MImage" className="text-center mx-auto w-8/12 " src="https://www.91-img.com/pictures/145995-v4-samsung-galaxy-a22-5g-8gb-ram-mobile-phone-large-1.jpg?tr=q-80"  alt="xoami mobile"/>
        
        <div id="performance">
          <h1 className="mt-10 font-bold p-3 text-center border-3 h-44 box-border shadow-lg"> Performance <hr /> <span className="font-normal pt-0"> Octa core (2.84 GHz, Single Core + 2.42 GHz, Tri core + 1.8 GHz, Quad core) Snapdragon 865 8 GB RAM </span> </h1>
          <br />
        </div>

        <div id="display">
          <h1 className="mt-10 font-bold p-3 text-center border-3 h-44 box-border shadow-lg"> Display <hr /> <span className="font-normal pt-0"> 6.55 inches (16.64 cm) 402 PPI, Fluid AMOLED 120 Hz Refresh Rate </span> </h1>
          <br />
        </div>
        
        <div id="camera">
          <h1 className="mt-10 font-bold p-3 text-center border-3 h-44 box-border shadow-lg"> Camera <hr /> <span className="font-normal pt-0"> Camera 48 + 16 + 5 + 2 MP Quad Primary Cameras Dual LED Flash 16 MP Front Camera </span> </h1>
          <br />
        </div>
        
        <div id="battery">
          <h1 className="mt-10 font-bold p-3 text-center border-3 h-44 box-border shadow-lg"> Battery <hr /> <span className="font-normal pt-0"> Battery 4500 mAh Warp Charging USB Type-C Port</span> </h1>
          <br />
        </div>
      </div>
        
        {/* add to compare */}

        <div className="row-span-1 grid grid-cols-5">
          <h1  className="text-center text-blue lg:px-3 lg:py-3 font-semibold col-span-1 text-lg">+ Add to compare</h1>
          <div className="col-span-4 text-right">          
          <a href="www.google.com" ><h1 className="lg:px-5 lg:py-2 font-bold inline-block text-xl"><img className="w-14 inline-block"  src="https://i.ibb.co/BB9ymDL/flipkart.jpg"  alt="flipkart" />flipkart</h1></a>
          <a href="www.google.com" ><h1 className="lg:px-5 lg:py-2 font-bold inline-block text-xl"><img className="w-10 inline-block"  src="https://i.ibb.co/VjKn8y7/amazon.png"  alt="amazon" />amazon</h1></a>
          
          </div>
        </div>

      </div>
      
    </div>
</div>  

    </>
  );
}
export default withRouter(GetSamsung);