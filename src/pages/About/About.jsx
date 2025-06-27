import React,{useEffect} from "react";
import { SectionDescription } from "../../components/Sections/About/AboutDestricption/SectionDestricption";
import { SectionHeader } from "../../components/Sections/About/AboutHeader/AboutHeader";
import { SectionBuilding } from './../../components/Sections/Home/SectionAbout/SectionAbout';
import { WhyChooseUs } from "../../components/Sections/Home/sectionwhychoose/SectionWhyChoose";





export function Company(){
useEffect(()=>{
  window.scrollTo({ top: 300, left: 0, behavior: 'smooth' });
},[])
    return(
        <div className="body">
            <SectionHeader/>
            <SectionBuilding/>
            <SectionDescription/>
            <WhyChooseUs/>
        </div>
    )
}