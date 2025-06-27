import React from "react";
import { ProjectHeader } from "../../components/Sections/Project/ProjectHeader";
import { ProjectFilter } from "../../components/Sections/Project/ProjectFilter";





export function Project(){
 
    return(
       <div className="body">
        <ProjectHeader/>
        <ProjectFilter/>
       </div>
    )
}