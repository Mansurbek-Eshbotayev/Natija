import { Link } from "@remix-run/react";

const ContactSection = () => {
  return (
    <div className="contactSection">
      <div className="container">
        <div className="contactSection__row">
          <div className="row__left">
            <p>Выведите свой бизнес на новый уровень с помощью AOS</p>
          </div>
          <div className="row__right">
            <button>Запрос на установку</button>
          </div>
        </div>
        <div className="contactSection__img">
          {/* <img src="/hplaptop.png" alt="img hp laptop" /> */}
          <picture>
            <source
              media="(max-width: 320px)"
              srcSet="/DownPhotos/TableM.png 1x , /DownPhotos/TableM@2x.png 2x"
              width={220}
              height={90}
            />
            <source
              media="(max-width: 360px)"
              srcSet="/DownPhotos/TableM.png 1x , /DownPhotos/TableM@2x.png 2x"
              width={280}
              height={120}
            />
            <source
              media="(max-width: 470px)"
              srcSet="/DownPhotos/TableM.png 1x , /DownPhotos/TableM@2x.png 2x"
              width={320}
              height={150}
            />

            <source
              media="(max-width: 630px)"
              srcSet="/DownPhotos/TableM.png 1x , /DownPhotos/TableM@2x.png 2x"
              width={424}
              height={200}
            />

            <source
              media="(max-width: 1040px)"
              srcSet="/DownPhotos/TableT.png 1x , /DownPhotos/TableT@2x.png 2x"
              width={623}
              height={244}
            />
            <img
              src="/DownPhotos/TableD.png"
              alt="Phone"
              width={736}
              height={351}
              srcSet="/DownPhotos/TableD.png 1x , /DownPhotos/TableD@2x.png 2x"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
