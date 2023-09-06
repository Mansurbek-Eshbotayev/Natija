import { useState } from "react";
import TabCard from "~/components/TabCard";

const listTabs = [
  {
    title: "Приложения для покупателей",
    text: `Предостовляется удобное для использовании приложения для
    покупателей. С помощью которого они могут получить кэшбэк баллы от
    каждой покупки и заменить их на товары!`,
    img: "/tab1.jpg",
  },
  {
    title: "Приложения для кассира",
    text: `Предостовляется удобное для использовании приложения для
    покупателей. С помощью которого они могут получить кэшбэк баллы от
    каждой покупки и заменить их на товары!`,
    img: "/tab22.jpg",
  },
  {
    title: "CRM для админа",
    text: `Предостовляется удобное для использовании приложения для
    покупателей. С помощью которого они могут получить кэшбэк баллы от
    каждой покупки и заменить их на товары!`,
    img: "/tab3.jpg",
  },
];

const AboutSection = () => {
  const [active, setActive] = useState(1);

  const openFunction = (index: number) => {
    setActive(index);
  };
  return (
    <div className="aboutSection container" id="function">
      <span className="title">Почему именно платформа AOS?</span>
      <p className="aboutSection__text">
        Цель платформы AOS: Установить связь между клиентами и компаниями.
        Мотивировать клиентов так и сотрудников. Увеличить объем продаж и
        привлекать больше покупателей.
      </p>
      <div className="aboutSection__tabs">
        <div className="tabs__buttons">
          {listTabs.map((tab, index) => (
            <>
              <TabCard
                key={index}
                data={{
                  number: index,
                  active,
                  openFunction,
                  ...tab,
                }}
              />
            </>
          ))}
        </div>
        <div className="tabs__content">
          <img
            className="tabs__imges"
            src={listTabs[active]?.img}
            alt="image"
            width={600}
            height={590}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
