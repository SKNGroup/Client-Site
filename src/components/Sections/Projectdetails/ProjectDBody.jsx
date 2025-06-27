import React, { useEffect,useState } from "react";
import { baseImgUrl } from "../../../axios_services/BaseUrl";
import { useProjectSpecial } from "../../../hooks/DynamicLang";




export function ProjectDBody(){
const [Data, setData] = useState({});
  const{data}=useProjectSpecial();
    useEffect(()=>{
    if (!data) return 
      
      
  setData({...data})
    
    },[data])


    return(<>
   <section className="section ">
     <div className="section-container">
       <div className="section-content project-des-section">
       <img src={`${baseImgUrl}${Data?.mainImage?.path}${Data?.mainImage?.fileName}`}/>
       </div>
       <div className="project-description">
        <h2>{Data.name}</h2>
        <p>{Data.content}</p>
        
        
      </div>
     </div>
   </section>
    </>)
}