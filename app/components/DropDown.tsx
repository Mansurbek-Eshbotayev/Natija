import { Link } from "@remix-run/react";
import { ExidIcon } from "~/assets/svg";

export const DropDown = ({ open, setOpen }: any) => {
  return (
    <div className="wrapDrop">
      <div className="dropDown">
        <div className="dropDown__top ">
          <div className="dropDown__language">
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

          <button onClick={() => setOpen(!open)}>
            <ExidIcon />
          </button>
        </div>
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
    </div>
  );
};
