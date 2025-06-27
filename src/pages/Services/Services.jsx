import React,{useEffect} from "react";
import { WhyChooseUs } from './../../components/Sections/Home/sectionwhychoose/SectionWhyChoose';
import { Architectur } from "../../components/Sections/Services/Architechtur";
import { ServiceHeader } from "../../components/Sections/Services/ServiceHeader";
import { ServiceData } from "../../components/Sections/Services/SerViceData";





export function Services(){
useEffect(()=>{
  window.scrollTo({ top: 300, left: 0, behavior: 'smooth' });
},[])
    return(
        <>
        <div className="body">
         <ServiceHeader/>
         <ServiceData />
         <WhyChooseUs/>
         <Architectur/>
         </div>
        </>
    )
}