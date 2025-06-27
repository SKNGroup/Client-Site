import { Outlet, useParams } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Footer } from './../../components/Footer/Footer';

const Layout = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && ["en-US", "az-AZ", "ru-RU"].includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <>
      <Navbar />
      <main className="layout">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
