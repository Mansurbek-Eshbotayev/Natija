import { AppStoreIcon, PlayMarketIcon } from "~/assets/svg";

const AppSection = () => {
  return (
    <div className="appSection">
      <div className="appSection__row1 container">
        <div className="row1__item">
          <span className="title">Почему именно платформа AOS?</span>
          <h2>Все в одном приложении для ваших покупателей</h2>
        </div>
        <div className="row1__item">
          <p>
            Предостовляется удобное для использовании приложения для ваших
            покупателей. С помощью которого они могут получить кэшбэк баллы от
            каждой покупки и заменить их на товары!
          </p>
        </div>
      </div>
      <div className="appSection__row2">
        <div className="container">
          <div className="row2__items">
            <picture>
              <source
                media="(max-width: 520px)"
                srcSet="/AppsectionPhotos/PhoneM.png 1x , /AppsectionPhotos/PhoneM@2x.png 2x"
                width={85}
                height={184}
              />

              <source
                media="(max-width: 1040px)"
                srcSet="/AppsectionPhotos/PhoneT.png 1x , /AppsectionPhotos/PhoneT@2x.png 2x"
                width={170}
                height={370}
              />
              <img
                src="/AppsectionPhotos/PhpneD.png"
                alt="Phone"
                width={340}
                height={737}
                srcSet="/AppsectionPhotos/PhoneD.png 1x , /AppsectionPhotos/PhoneD@2x.png 2x"
              />
            </picture>
          </div>
          <div className="row2__items">
            <picture>
              <source
                media="(max-width: 520px)"
                srcSet="/AppsectionPhotos/DublePhoneM.png 1x , /AppsectionPhotos/DublePhoneM@2x.png 2x"
                width={127}
                height={181}
              />

              <source
                media="(max-width: 1040px)"
                srcSet="/AppsectionPhotos/DublePhoneT.png 1x , /AppsectionPhotos/DublePhoneT@2x.png 2x"
                width={255}
                height={363}
              />
              <img
                src="/AppsectionPhotos/DublePhoneD.png"
                alt="Phone"
                width={511}
                height={726}
                srcSet="/AppsectionPhotos/DublePhoneD.png 1x , /AppsectionPhotos/DublePhoneD@2x.png 2x"
              />
            </picture>
          </div>
        </div>
      </div>
      <div className="appSection__row3 container">
        <div className="row3__left">
          <h2>Пора уже скачать приложению AOS!</h2>
          <div className="left__buttons">
            <div className="buttons__item">
              <a
                href="https://apps.apple.com/uz/app/aos-cashback/id1662782441"
                target="blank"
              >
                <AppStoreIcon />
                App Store
              </a>
              <span className="container__number">4,8</span>
              <span>123 отзыва</span>
            </div>
            <div className="buttons__item">
              <a href="https://play.google.com/store/apps/details?id=natijasd.uz.aos">
                <PlayMarketIcon />
                Google Play
              </a>
              <span className="container__number">4,8</span>
              <span>123 отзыва</span>
            </div>
          </div>
        </div>
        <div className="row3__right">
          <div className="right__items">
            <span>01</span>
            <h4>Удобный интерфейс</h4>
            <p>
              С помощью которого они могут получить кэшбэк баллы от каждой
              покупки и заменить их на товары!
            </p>
          </div>
          <div className="right__items">
            <span>02</span>
            <h4>Удобный интерфейс</h4>
            <p>
              С помощью которого они могут получить кэшбэк баллы от каждой
              покупки и заменить их на товары!
            </p>
          </div>
          <div className="right__items">
            <span>03</span>
            <h4>Удобный интерфейс</h4>
            <p>
              С помощью которого они могут получить кэшбэк баллы от каждой
              покупки и заменить их на товары!
            </p>
          </div>
          <div className="right__items">
            <span>04</span>
            <h4>Удобный интерфейс</h4>
            <p>
              С помощью которого они могут получить кэшбэк баллы от каждой
              покупки и заменить их на товары!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
