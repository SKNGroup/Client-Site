import React, { useEffect, useState} from "react";
import { SliderTop } from "../../components/Sections/Home/Slider/Slider";
import { SectionBuilding } from "../../components/Sections/Home/SectionAbout/SectionAbout";
import { OurSection } from "../../components/Sections/Home/SectionOur/OurSection";
import {  useProjectSlider } from "./../../hooks/DynamicLang";
import ProjectSlider from "../../components/Sections/Home/ProjectSlider/ProjectSlider";
import { WhyChooseUs } from "./../../components/Sections/Home/sectionwhychoose/SectionWhyChoose";
import {PartnerSlider} from "../../components/Sections/Home/PartnerSlider/PartnerSlider";


export function Home() {
const [slider, setSlider] = useState();
const{data}=useProjectSlider();

useEffect(()=>{
  if (data) {
     const projectData=data?.$values?.filter((el)=>el.isSelected===true)
     setSlider(projectData)

  }
},[data])



  return (
    <div className="body">
      <SliderTop />
      <SectionBuilding />
      <OurSection />
      <WhyChooseUs />
      <ProjectSlider projectsData={slider} autoplaySpeed={4000} />
      <PartnerSlider />
    </div>
  );
}
