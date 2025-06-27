import React ,{useEffect} from "react";
import { ContactHeader } from "../../components/Sections/Contact/SectionContactHeader/ContactHeader";
import { ContactMap } from "../../components/Sections/Contact/SectionContactMap/ContactMap";
import { ContactNeedInfo } from "../../components/Sections/Contact/SectionContactNeed/ContactNeed";




export function Contact(){
useEffect(()=>{
  window.scrollTo({ top: 300, left: 0, behavior: 'smooth' });
},[])
    return(
       <div className="body">
        <ContactHeader/>
        <ContactMap/>
        <ContactNeedInfo/>
       </div>
    )
}