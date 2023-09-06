import React from "react";

type inputType = {
  data: { type: string; name: string; plc: string; label: string };
};

export const InputModal = ({ data }: inputType) => {
  return (
    <input
      type={data?.type}
      name={data?.name}
      placeholder={data?.plc}
      aria-label={data?.label}
    />
  );
};
