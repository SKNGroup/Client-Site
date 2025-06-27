import { baseImgUrl } from "../../../axios_services/BaseUrl";
import { useServiceSpecial } from "../../../hooks/DynamicLang";
import React, { useEffect,useState } from "react";

export function ServiceDImage() {
 const [Data, setData] = useState({});
  const{data}=useServiceSpecial();
    useEffect(()=>{
    if (!data) return 
     
      
  setData({...data})
    
    },[data])


    return(
<section className="section ">
  <div className="section-container">
    <div className="section-content project-des-section">
    <img src={`${baseImgUrl}${Data?.mainImage?.path}${Data?.mainImage?.fileName}`}/>
     
    </div>
  </div>
</section>
    )
}