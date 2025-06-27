import React ,{useEffect} from "react";
import { PDetailsHeader } from "../../components/Sections/Projectdetails/ProjectDHeader";
import { ProjectDBody } from "../../components/Sections/Projectdetails/ProjectDBody";
import { ProjectLocation } from "../../components/Sections/Projectdetails/ProjectLocation";
import ProjectSSlider from "../../components/Sections/Projectdetails/ProjectDSlider";





export function ProjectDetails(){

useEffect(()=>{
  window.scrollTo({ top: 300, left: 0, behavior: 'smooth' });
},[])
    return(
        <div className="body">
            <PDetailsHeader/>
            <ProjectDBody/>
            <ProjectLocation/>
            <ProjectSSlider/>
        </div>
    )
}