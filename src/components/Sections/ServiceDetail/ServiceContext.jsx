import React ,{ useEffect,useState } from "react";
import { useServiceSpecial } from "../../../hooks/DynamicLang";


export function ServiceContext(){
 const [Data, setData] = useState({});
  const{data}=useServiceSpecial();
    useEffect(()=>{
    if (!data) return 
     
      
  setData({...data})
    
    },[data])


    return(
        <div className="section">
            <div className="section-container">
            <div className="ck-content"  dangerouslySetInnerHTML={{ __html: Data.content }}/>
            </div>
        </div>
    )
}