import React, { useEffect, } from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useFaq,  } from "../../../hooks/DynamicLang";

export function FaqsBody() {
  const { data } = useFaq();
  const{t}=useTranslation()
  const [Data, setData] = useState("");
  const [activeIndex, setActiveIndex] = useState([]);
  useEffect(() => {
    setData([...data?.$values]);
  }, [data]);
  

  return (
    <section className="section full projects">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">{t("faq-subtitle")}</span>
          <h2 className="section-title">{t("faq-title")}</h2>
        </div>

        <div className="faqs_accordion_container">
          {Boolean(Data) &&
            Data.map((el, index) => (
              <>
                <div className="faqs_list_box" key={index}>
                  <div
                  key={index}
                    className="faqs_questions_header"
                    onClick={() =>
                      setActiveIndex((prew) =>
                        prew.includes(index)
                          ? prew.filter((el) => el !== index)
                          : [...prew, index]
                      )
                    }
                  >
                    <div className="faqs_header_left">
                      <span className="number_ball">{el.order}</span>
                      <h4 className="faqs_h_context">{el.question}</h4>
                    </div>
                    <div className="faqs_icon_box">
                      <span>
                        <i
                          className={`fa-solid fa-arrow-up icon-transition ${
                            activeIndex.includes(index) ? "rotated" : ""
                          }`}
                        ></i>
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      activeIndex.includes(index)
                        ? "faqs_questions_footer_show"
                        : "faqs_questions_footer_hide"
                    }
                  >
                    <p className="faqs_destription">{el.answer}</p>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </section>
  );
}
