import Popup from "reactjs-popup";
function Araise(props){
return (
  <Popup  trigger={
    <center>
  <span className="w-2/3 text-green border-black fixed font-semibold text-lg 
  box-border border-2 rounded-lg bg-gradientwhite ml-96 bottom-1 animate-bounce 
  cursor-pointer
   shadow-lg text-left px-10">
  =&gt; Go to compare ({props.list.length})</span>
   </center>
 }
    position="right center"
    modal>
     <div className="text-xl text-center text-white pt-2 rows-span-1 bg-green h-10 ">
     <h1>Compare</h1>
     </div>
     <div className="grid grid-cols-2 rows-span-4 text-center mx-auto"> 
       {console.log(props.list.length)}
       {(props.list.length>=2)?(props.list.map(list=>
       <div>
      <h1 id="MName" className="lg:px-3 lg:py-3 font-semibold  text-sm text-center">{list.mobilename}</h1>
      <img className="mx-auto" src={list.imagesrc} width="100" height="100" alt={list.mobilename}/>
      <h1 id="MPrice" className="lg:px-5 lg:py-2 font-semibold text-2xl text-green">₹{list.price}</h1>
      
      <h1 className=" font-bold p-3 "><img className="inline" src="https://i.ibb.co/3skXMcx/performance-svg.png  " alt="performance-svg" /> Performance <hr/> <span className="font-normal pt-0">{list.performance}</span></h1>
      <h1 className=" font-bold p-3 "><img className="inline" src="https://i.ibb.co/7Yqqysx/display-svg.png" alt="display-svg" /> Display <hr /> <span className="font-normal pt-0">{list.display}</span> </h1>
      <h1 className=" font-bold p-3 "><img className="inline" src="https://i.ibb.co/yyCK5LH/camera-svg.png" alt="battery-svg" /> Camera <hr />  <span className="font-normal pt-0"> {list.camera} </span> </h1>
      <h1 className=" font-bold p-3 "> <img className="inline" src="https://i.ibb.co/64wzrpV/battery-svg.png" alt="battery-svg" /> Battery <hr /> <span className="font-normal pt-0"> {list.battery} </span> </h1>
       
      </div>
       
       ))
      
       :(<div>Eh.. olunga vandhuru....</div>)}

      </div> 
    </Popup>
)
}

export default Araise;