const AppStoreIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.7342 27.04C21.4275 28.3067 20.0009 28.1067 18.6275 27.5067C17.1742 26.8933 15.8409 26.8667 14.3075 27.5067C12.3875 28.3333 11.3742 28.0933 10.2275 27.04C3.72087 20.3333 4.68087 10.12 12.0675 9.74667C13.8675 9.84 15.1209 10.7333 16.1742 10.8133C17.7475 10.4933 19.2542 9.57333 20.9342 9.69333C22.9475 9.85333 24.4675 10.6533 25.4675 12.0933C21.3075 14.5867 22.2942 20.0667 26.1075 21.6C25.3475 23.6 24.3609 25.5867 22.7209 27.0533L22.7342 27.04ZM16.0409 9.66667C15.8409 6.69333 18.2542 4.24 21.0275 4C21.4142 7.44 17.9075 10 16.0409 9.66667Z"
        fill="white"
      />
    </svg>
  );
};

const PlayMarketIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 27.3334V4.6667C4 3.88003 4.45333 3.1867 5.12 2.8667L18.2533 16L5.12 29.1334C4.45333 28.8 4 28.12 4 27.3334ZM22.4133 20.16L8.06667 28.4534L19.3867 17.1334L22.4133 20.16ZM26.88 14.4134C27.3333 14.7734 27.6667 15.3334 27.6667 16C27.6667 16.6667 27.3733 17.2 26.9067 17.5734L23.8533 19.3334L20.52 16L23.8533 12.6667L26.88 14.4134ZM8.06667 3.5467L22.4133 11.84L19.3867 14.8667L8.06667 3.5467Z"
        fill="white"
      />
    </svg>
  );
};

const HeaderMenu = () => {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 14H24.5M3.5 7H24.5M3.5 21H24.5"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ExidIcon = () => {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 1L1 13M1 1L13 13"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const BlackIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="#0F1335"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export { AppStoreIcon, PlayMarketIcon, HeaderMenu, ExidIcon, BlackIcon };
