import React from "react";import react from "react";
import { Navigate,Outlet } from "react-router-dom";
import { useTranslation } from 'react-i18next';




export function ProjectProtector(){
 const { t,i18n } = useTranslation(); 
 const token=sessionStorage.getItem('projectid');
return token?<Outlet/>:Navigate(`/${i18n.language}/project`);

}