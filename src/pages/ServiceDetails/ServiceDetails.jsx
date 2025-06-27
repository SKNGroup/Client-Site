import react,{useEffect} from "react";

import { SDetailsHeader } from "../../components/Sections/ServiceDetail/ServiceDHeader";
import { ServiceDImage } from "../../components/Sections/ServiceDetail/ServiceDImg";
import ServiceSlider  from "../../components/Sections/ServiceDetail/SdetailSlider";
import { ServiceContext } from "../../components/Sections/ServiceDetail/ServiceContext";




export function ServiceDetails(){

useEffect(()=>{
  window.scrollTo({ top: 300, left: 0, behavior: 'smooth' });
},[])

    return <div className="body">
           <SDetailsHeader/>
           <ServiceDImage/>
           <ServiceContext/>
           <ServiceSlider/>
           </div>
}