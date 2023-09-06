import { useEffect, useRef, useState } from "react";

type PropsType = {
  data: {
    number: number;
    title: string;
    text: string;
  };
};

export default function FaqCard({ data }: PropsType) {
  const element: any = useRef();
  const [active, setActive] = useState(false);

  const openFunction = () => {
    if (!element.current.style.maxHeight) {
      element.current.style.maxHeight = element.current.scrollHeight + "px";
      setActive(true);
    } else {
      element.current.style.maxHeight = null;
      setActive(false);
    }
  };

  return (
    <div className={`faqCard ${active ? "active" : ""}`} onClick={openFunction}>
      <span className="content__title">
        <span>{data?.number + 1}</span> {data?.title}
      </span>
      <p ref={element}>{data?.text}</p>
    </div>
  );
}
