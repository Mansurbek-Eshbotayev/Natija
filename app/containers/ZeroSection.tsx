const ZeroSection = () => {
  return (
    <div className="zeroSection">
      <div className="container">
        <div className="zeroSection__row">
          <div className="row__left">
            <h1>Лучшая кэшбэк программа, и не только...</h1>
            <p>Проверено на реальных кейсах таких же магазинах, как и у вас!</p>
            <div className="left__buttons">
              <button>Запрос на установку</button>
              <a href="#" aria-label="link for app">
                Скачать приложению
              </a>
            </div>
          </div>
          <div className="row__right">
            <picture>
              <source
                media="(max-width: 500px)"
                srcSet="/ZeroSectionPhotos/MacBookM.png 1x , /ZeroSectionPhotos/MacBookM@2x.png 2x"
                width={478}
                height={325}
              />

              <source
                media="(max-width: 1040px)"
                srcSet="/ZeroSectionPhotos/MacbookT.png 1x , /ZeroSectionPhotos/MacbookT@2x.png 2x"
                width={480}
                height={400}
              />
              <img
                src="/ZeroSectionPhotos/MacbookD.png"
                alt="Macbook laptop"
                width={852}
                height={575}
                srcSet="/ZeroSectionPhotos/MacbookD.png 1x , /ZeroSectionPhotos/MacbookD@2x.png 2x"
              />
            </picture>
          </div>
        </div>
        <div className="zeroSection__row secondrow">
          <p className="row__text">
            Более 20 компании Узбекистана уже выбрали нас
          </p>
          <div className="row__companies logos">
            <img
              className="logos__gyp"
              src="/ZeroSectionPhotos/gyplogo.png"
              alt="gyplogo"
              width={142}
              height={72}
            />
            <img
              className="logos__landy"
              src="/ZeroSectionPhotos/landylogo.png"
              alt="landylogo"
              width={128}
              height={72}
            />
            <img
              className="logos__academy"
              src="/ZeroSectionPhotos/academylogo.png"
              alt="academylogo"
              width={138}
              height={72}
            />
            <img
              className="logos__icon"
              src="/ZeroSectionPhotos/iconlogo.png"
              alt="iconlogo"
              width={30}
              height={72}
            />
            <img
              className="logos__iconic"
              src="/ZeroSectionPhotos/iconiclogo.png"
              alt="iconiclogo"
              width={125}
              height={72}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZeroSection;
