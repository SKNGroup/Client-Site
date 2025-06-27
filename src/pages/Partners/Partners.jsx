import React,{useEffect} from "react";
import { PartnerHeader } from "../../components/Sections/Partners/PartnerHeader";
import { Partnerbody } from "../../components/Sections/Partners/PartnerBody";




export function Partners(){
useEffect(()=>{
  window.scrollTo({ top: 300, left: 0, behavior: 'smooth' });
},[])
    return(
       <div className="body">
        <PartnerHeader/>
        <Partnerbody/>
       </div>
    )
}