import React, { useState, useEffect, useRef, useTransition } from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { baseImgUrl } from "../../../../axios_services/BaseUrl";


// Sadə slayder komponenti
export function ProjectSlider({
  projectsData = [],
  autoplaySpeed = 5000,
  className = "",
}) {
  // STATE
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenType, setScreenType] = useState("desktop");
  const slideRef = useRef(null);
  const timerRef = useRef(null);
  const isDraggingRef = useRef(false); // Mouse sürükləmə statusu
  const isComponentMounted = useRef(true); // Komponent mount olub-olmadığını yoxlayır
  const {t ,i18n}=useTranslation();
 const navigate=useNavigate();

  // KOMPONENT UNMOUNT
  useEffect(() => {
    return () => {
      isComponentMounted.current = false;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // EKRAN ÖLÇÜSÜ
  useEffect(() => {
    // Ekran ölçüsünü yoxla və tənzimlə
    function checkScreen() {
      if (!isComponentMounted.current) return;

      const width = window.innerWidth;
      if (width > 1200) setScreenType("desktop"); // 4 şəkil
      else if (width > 991) setScreenType("laptop"); // 3 şəkil
      else if (width > 767) setScreenType("tablet"); // 3 şəkil
      else setScreenType("mobile"); // 2 şəkil
    }

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // AVTOMATİK SLAYD
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (!projectsData.length) return; // Proyekt data yoxdursa davam etmə

    timerRef.current = setTimeout(() => {
      if (!isComponentMounted.current) return;
      // Növbəti slayda keç
      setActiveIndex((index) => (index + 1) % projectsData.length);
    }, autoplaySpeed);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex, projectsData.length, autoplaySpeed]);

  // EKRAN TİPİNƏ GÖRƏ KONFİQURASİYA
  const config = {
    desktop: { slides: 4, percent: 25 },
    laptop: { slides: 3, percent: 33.333 },
    tablet: { slides: 3, percent: 33.333 },
    mobile: { slides: 2, percent: 50 },
  };

  // Cari ekran üçün konfiqurasiya
  const current = config[screenType];

  // MOUSE SÜRÜŞDÜRMƏ HADİSƏLƏRİ
  const onMouseDown = (e) => {
    if (!slideRef.current) return;

    isDraggingRef.current = true;
    slideRef.current.dataset.startX = e.clientX;
    document.body.style.userSelect = "none"; // Mətn seçimini dayandır

    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const onMouseMove = (e) => {
    if (
      !isDraggingRef.current ||
      !slideRef.current ||
      !isComponentMounted.current
    )
      return;

    const startX = parseInt(slideRef.current.dataset.startX || "0");
    const diff = startX - e.clientX;

    if (Math.abs(diff) > 20) {
      const offset = (diff / window.innerWidth) * 30;
      slideRef.current.style.transform = `translateX(calc(-${
        activeIndex * current.percent
      }% - ${offset}px))`;
    }
  };

  const onMouseUp = (e) => {
    if (
      !isDraggingRef.current ||
      !slideRef.current ||
      !isComponentMounted.current
    )
      return;

    const startX = parseInt(slideRef.current.dataset.startX || "0");
    const diff = startX - e.clientX;

    // Sürüşmə effektini sıfırla
    slideRef.current.style.transform = `translateX(-${
      activeIndex * current.percent
    }%)`;

    // Sürüşmə kifayət qədərdirsə, slaydı dəyiş
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Sola sürüşdürmə - növbəti slayd
        setActiveIndex((index) => (index + 1) % projectsData.length);
      } else {
        // Sağa sürüşdürmə - əvvəlki slayd
        setActiveIndex((index) =>
          index === 0 ? projectsData.length - 1 : index - 1
        );
      }
    }

    isDraggingRef.current = false;
    document.body.style.userSelect = ""; // Mətn seçimini bərpa et

    // Avtomatik slayd dəyişməni yenidən başlat
    if (isComponentMounted.current) {
      timerRef.current = setTimeout(() => {
        if (!isComponentMounted.current) return;
        setActiveIndex((index) => (index + 1) % projectsData.length);
      }, autoplaySpeed);
    }
  };

  // SLİDER TOUCH HADİSƏLƏRİ
  const onTouchStart = (e) => {
    if (!slideRef.current) return;

    const touch = e.touches[0];
    slideRef.current.dataset.startX = touch.clientX;
    slideRef.current.dataset.touching = "true";

    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const onTouchMove = (e) => {
    if (
      !slideRef.current ||
      slideRef.current.dataset.touching !== "true" ||
      !isComponentMounted.current
    )
      return;

    const touch = e.touches[0];
    const startX = parseInt(slideRef.current.dataset.startX || "0");
    const diff = startX - touch.clientX;

    if (Math.abs(diff) > 20) {
      const offset = (diff / window.innerWidth) * 30;
      slideRef.current.style.transform = `translateX(calc(-${
        activeIndex * current.percent
      }% - ${offset}px))`;
    }
  };

  const onTouchEnd = (e) => {
    if (
      !slideRef.current ||
      slideRef.current.dataset.touching !== "true" ||
      !isComponentMounted.current
    )
      return;

    const touch = e.changedTouches[0];
    const startX = parseInt(slideRef.current.dataset.startX || "0");
    const diff = startX - touch.clientX;

    // Sürüşmə effektini sıfırla
    slideRef.current.style.transform = `translateX(-${
      activeIndex * current.percent
    }%)`;
    slideRef.current.dataset.touching = "false";

    // Sürüşmə kifayət qədərdirsə, slaydı dəyiş
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Sola sürüşdürmə - növbəti slayd
        setActiveIndex((index) => (index + 1) % projectsData.length);
      } else {
        // Sağa sürüşdürmə - əvvəlki slayd
        setActiveIndex((index) =>
          index === 0 ? projectsData.length - 1 : index - 1
        );
      }
    }

    // Avtomatik slayd dəyişməni yenidən başlat
    if (isComponentMounted.current) {
      timerRef.current = setTimeout(() => {
        if (!isComponentMounted.current) return;
        setActiveIndex((index) => (index + 1) % projectsData.length);
      }, autoplaySpeed);
    }
  };

  // Mouse hadisələrini əlavə et və təmizlə
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [activeIndex, current.percent]); // Aktiv slayd və ya faiz dəyişdikdə yenilə

  // Kifayət qədər məlumat yoxdursa, heç nə göstərmə
  if (!projectsData.length || projectsData.length < current.slides) {
    return null;
  }

  // Şəkil yüklənməyəndə istifadə olunan fallback
  const handleImageError = (e) => {
    e.target.onerror = null; // Sonsuz təkrar xətalarının qarşısını alır
    e.target.src =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23cccccc'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23666666'%3EŞəkil yüklənmədi%3C/text%3E%3C/svg%3E";
  };

  return (
    <section className={`project-slider-section ${className}`}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">{t("our-project")}</span>
          <h2 className="section-title">{t("our-title")}</h2>
          <div className="more_project_box">
            <button className="more_project_btn" onClick={()=>navigate(`/${i18n?.language}/project`)}>{t("moore")}</button>
          </div>
        </div>

        {/* SLAYDER KONTEYNER */}
        <div
          className="slider-container"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
        >
          {/* SLAYDER İZLƏYİCİ */}
          <div
            className="slider-track"
            ref={slideRef}
            style={{
              transform: `translateX(-${activeIndex * current.percent}%)`,
            }}
          >
            {/* BÜTÜN SLAYDLAR */}
            {projectsData.map((_, index) => (
              <div key={index} className="project-slide">
                <div className={`project-grid ${screenType}-grid`}>
                  {/* ŞƏKİLLƏR */}
                  {Array.from({ length: current.slides }).map((_, i) => {
                    // Dövrü məlumat - sonu bitəndə əvvələ qayıdır
                    const dataIndex = (index + i) % projectsData.length;
                    const project = projectsData[dataIndex] || {};
                    
                      
                    return (
                      <div key={i} className="project-card">
                        {/* ŞƏKİL */}
                        <div className="project-image-container" onClick={()=>navigate(`/${i18n?.language}/project`)}>
                          <img
                            src={`${baseImgUrl}${project?.storageFile?.path}${project?.storageFile?.fileName}`}
                            alt={project.description || "Project image"}
                            className="project-image"
                            draggable="false"
                            onError={handleImageError}
                            loading="lazy"
                          />
                        </div>

                        {/* BAŞLIQ */}
                        <div className="project-info">
                          <h3 className="project-title">
                            {project.name || ""}
                          </h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NAVİQASİYA NÖQTƏLƏRİ */}
        <div className="navigation-dots">
          {projectsData.map((_, index) => (
            <button
              key={index}
              className={`dot-button ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {index === activeIndex && (
                <div className="dot-progress">
                  <div className="progress-fill"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSlider;
