import { BlackIcon } from "~/assets/svg";
import { InputModal } from "./InputModal";

const Inputs = [
  {
    type: "text",
    name: "your_name",
    plc: "Ваше имя",
    label: "Entr your name",
  },
  {
    type: "text",
    name: "your_name",
    plc: "Ваше имя",
    label: "Entr your name",
  },
  {
    type: "text",
    name: "your_company",
    plc: "Название компании",
    label: "Entr your company",
  },
  {
    type: "tel",
    name: "your_phone",
    plc: "Телефон номер",
    label: "Entr your phone number",
  },
];

export default function ModalContent({ onClose }: any) {
  return (
    <div className="modal">
      <div className="modal__content content">
        <p className="content__intro">
          Оставьте свои данные, и мы свяжемся с вами в ближайшее время!
        </p>
        <button className="content__btn" onClick={onClose}>
          <BlackIcon />
        </button>

        <form
          autoComplete="off"
          className="content__form"
          action="https://echo.htmlacademy.ru/courses"
        >
          <div className="content__wrap">
            {Inputs?.map((obj, index): any => (
              <InputModal key={index} data={{ ...obj }} />
            ))}
          </div>

          <div className="content__chack">
            <label>
              <input
                type="checkbox"
                name="is_true"
                className="visually-hidden"
              />
              <span></span>
              <p>
                <strong>Я соглашаюсь</strong> на обработку персональных данных.
              </p>
            </label>
          </div>
          <button>Отправить</button>
        </form>
      </div>
    </div>
  );
}

{
  /* <div>I'm a modal dialog</div>
      <button onClick={onClose}>Close</button> */
}
