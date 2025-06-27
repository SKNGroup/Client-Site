import react from "react";
import { Navigate,Outlet } from "react-router-dom";
import { useTranslation } from 'react-i18next';




export function ServiceProtector(){
 const { t,i18n } = useTranslation(); 
 const token=sessionStorage.getItem('serviceid');
return token?<Outlet/>:Navigate(`/${i18n.language}/services`);

}