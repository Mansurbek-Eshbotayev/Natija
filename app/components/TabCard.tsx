import { useEffect, useRef, useState } from "react";

type PropsType = {
  data: {
    number: number;
    title: string;
    text: string;
    img: string;
    active: number;
    openFunction: (index: number) => void;
  };
};

export default function TabCard({ data }: PropsType) {
  const element: any = useRef();
  useEffect(() => {
    if (data?.active === data?.number) {
      element.current.style.maxHeight = element.current.scrollHeight + "px";
    } else {
      element.current.style.maxHeight = null;
    }
  }, [data?.active]);
  const active = data?.active === data?.number;
  return (
    <>
      <div
        className={`buttons__item ${active ? "active" : ""}`}
        onClick={() => data?.openFunction(data?.number)}
      >
        <span className="card-title">
          <span>{data?.number + 1}</span> {data?.title}
        </span>
        <p ref={element}>{data?.text}</p>
      </div>
      {
        <img
          className={`img__none ${active ? "img__on" : ""}`}
          src={data.img}
          alt="image"
          width={600}
          height={590}
        />
      }
    </>
  );
}
