import { Link } from "@remix-run/react";
import { HeaderMenu } from "~/assets/svg";
import { DropDown } from "./DropDown";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/LangContext";
import { createPortal } from "react-dom";
import ModalContent from "./Modal";
import { Lang } from "../Lang/Lang";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleDrop = () => {
    setIsOpen(!isOpen);
  };

  const languageContext = useContext(LanguageContext);
  const lan = languageContext.language;
  console.log(lan);

  return (
    <div className="header container">
      <div className="header__left">
        <Link to="#" className="left__logo">
          <img src="/logo.png" width={100} height={41} alt="Logo" />
        </Link>
        <div className="left__links">
          <Link to="#function" className="links__link">
            Функции
          </Link>
          <Link to="#work" className="links__link">
            Как это работает
          </Link>
          <Link to="#comment" className="links__link">
            Отзывы
          </Link>
          <Link to="#rates" className="links__link">
            Тарифы
          </Link>
        </div>
      </div>

      {/* <Modal /> */}

      {isOpen && <DropDown open={isOpen} setOpen={setIsOpen} />}

      <div className="header__right">
        <button
          className="nav-btn"
          onClick={handleDrop}
          aria-label="burger-button"
        >
          <HeaderMenu />
        </button>

        {showModal &&
          createPortal(
            <ModalContent onClose={() => setShowModal(false)} />,
            document.body
          )}

        <div className="right__language">
          <input
            type="radio"
            id="ru"
            name="language"
            value="ru"
            defaultChecked
          />
          <label htmlFor="ru">Ru</label>
          <input type="radio" id="uz" name="language" value="uz" />
          <label htmlFor="uz">Uz</label>
        </div>
        <button onClick={() => setShowModal(true)}>Установить</button>
      </div>
    </div>
  );
};

export default Header;
