import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";


export function ProjectModal({ filterOpened, setFilterOpened ,children}) {
  const { t } = useTranslation();
 const navigate = useNavigate();
 window.scrollTo(0, 0);
 
  return (
    <>
      <div className={filterOpened ? "filter-modal-show" : "filter-modal-hide"}>
        <div className="wrapper_modal_btn">
          <div className="wrapper_modal_btn_box">
            <h2>Filter</h2>
            <span className="wrapper_opened" onClick={() => setFilterOpened((prew) => !prew)}>
              <FontAwesomeIcon icon={faXmark} color="white" size="md" />
            </span>
          </div>
        </div>
        <div className="filter_modal_body">
          {children}
        </div>
      </div>
    </>
  );
}