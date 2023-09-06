import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__content">
          <Link to="#" className="content__logo">
            <img src="/logo.png" width={100} height={41} alt="Logo" />
          </Link>
          <div className="content__links">
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
        <span className="copyright">© 2023 AOS LLC</span>
      </div>
    </div>
  );
};

export default Footer;
