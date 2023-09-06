import { HTMLProps } from "react";
import Header from "~/components/Header";
import { LanguageProvider } from "../context/LangContext";

type PropsType = Pick<HTMLProps<HTMLElement>, "children">;
const Main: React.FC<PropsType> = ({ children }) => {
  return (
    <LanguageProvider>
      <div className="main">
        <header className="main__header">
          <Header />
        </header>
        <div className="main__body">{children}</div>
        <footer className="main__footer"></footer>
      </div>
    </LanguageProvider>
  );
};

export default Main;
