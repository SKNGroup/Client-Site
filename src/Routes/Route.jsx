import React from "react";
import { Routes, Route} from "react-router-dom";
import { Home } from "./../pages/Home/Home";
import { Project } from "./../pages/Project/Project";
import { Services } from "./../pages/Services/Services";
import { Partners } from "./../pages/Partners/Partners";
import { Contact } from "./../pages/Contact/Contact";
import Layout from "../pages/Layout/Layout";
import { NotFound } from "./../components/NotFound/NotFound";
import { FAQs } from "../pages/FAQs/Faqs";
import { Company } from './../pages/About/About';
import { ServiceProtector } from "../components/Sections/Services/ServiceProtector";
import { ServiceDetails } from "../pages/ServiceDetails/ServiceDetails";
import { ProjectProtector } from "../components/Sections/Projectdetails/ProjectProtector";
import { ProjectDetails } from "../pages/ProjectDetails/ProjectDetails";


export function Routers() {
  return (
    <Routes>
      <Route path="/:lang" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="project" element={<Project />}/>
        <Route element={<ServiceProtector/>}>
         <Route path="service/details" element={<ServiceDetails/>}/>
        </Route>
        <Route element={<ProjectProtector/>}>
        <Route path="project/details" element={<ProjectDetails/>}/>
        </Route>
        <Route path="services" element={<Services />} />
        <Route path="partners" element={<Partners />} />
        <Route path="aboutus" element={<Company/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="FAQs" element={<FAQs />} />
      </Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="project" element={<Project />} />
        <Route path="services" element={<Services />} />
        <Route path="partners" element={<Partners />} />
        <Route path="aboutus" element={<Company />} />
        <Route path="contact" element={<Contact />} />
        <Route path="FAQs" element={<FAQs />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
