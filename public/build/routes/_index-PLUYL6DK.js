import {
  require_react_dom
} from "/build/_shared/chunk-JFNPABH5.js";
import {
  Link,
  Link2,
  __toESM,
  init_dist,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-JPQSXRDL.js";

// app/components/Footer.tsx
init_dist();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Footer = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer__content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "content__logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/logo.png", width: 100, height: 41, alt: "Logo" }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 9,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 8,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content__links", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#function", className: "links__link", children: "\u0424\u0443\u043D\u043A\u0446\u0438\u0438" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 12,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#work", className: "links__link", children: "\u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 15,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#comment", className: "links__link", children: "\u041E\u0442\u0437\u044B\u0432\u044B" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#rates", className: "links__link", children: "\u0422\u0430\u0440\u0438\u0444\u044B" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 21,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 11,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "copyright", children: "\xA9 2023 AOS LLC" }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
};
var Footer_default = Footer;

// app/containers/AboutSection.tsx
var import_react2 = __toESM(require_react());

// app/components/TabCard.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function TabCard({ data }) {
  const element = (0, import_react.useRef)();
  (0, import_react.useEffect)(() => {
    if ((data == null ? void 0 : data.active) === (data == null ? void 0 : data.number)) {
      element.current.style.maxHeight = element.current.scrollHeight + "px";
    } else {
      element.current.style.maxHeight = null;
    }
  }, [data == null ? void 0 : data.active]);
  const active = (data == null ? void 0 : data.active) === (data == null ? void 0 : data.number);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "div",
      {
        className: `buttons__item ${active ? "active" : ""}`,
        onClick: () => data == null ? void 0 : data.openFunction(data == null ? void 0 : data.number),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "card-title", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: (data == null ? void 0 : data.number) + 1 }, void 0, false, {
              fileName: "app/components/TabCard.tsx",
              lineNumber: 31,
              columnNumber: 11
            }, this),
            " ",
            data == null ? void 0 : data.title
          ] }, void 0, true, {
            fileName: "app/components/TabCard.tsx",
            lineNumber: 30,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { ref: element, children: data == null ? void 0 : data.text }, void 0, false, {
            fileName: "app/components/TabCard.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/TabCard.tsx",
        lineNumber: 26,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "img",
      {
        className: `img__none ${active ? "img__on" : ""}`,
        src: data.img,
        alt: "image",
        width: 600,
        height: 590
      },
      void 0,
      false,
      {
        fileName: "app/components/TabCard.tsx",
        lineNumber: 36,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/TabCard.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/containers/AboutSection.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var listTabs = [
  {
    title: "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439",
    text: `\u041F\u0440\u0435\u0434\u043E\u0441\u0442\u043E\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0443\u0434\u043E\u0431\u043D\u043E\u0435 \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F
    \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439. \u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u044D\u0448\u0431\u044D\u043A \u0431\u0430\u043B\u043B\u044B \u043E\u0442
    \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0438 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0445 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u044B!`,
    img: "/tab1.jpg"
  },
  {
    title: "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043A\u0430\u0441\u0441\u0438\u0440\u0430",
    text: `\u041F\u0440\u0435\u0434\u043E\u0441\u0442\u043E\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0443\u0434\u043E\u0431\u043D\u043E\u0435 \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F
    \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439. \u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u044D\u0448\u0431\u044D\u043A \u0431\u0430\u043B\u043B\u044B \u043E\u0442
    \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0438 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0445 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u044B!`,
    img: "/tab22.jpg"
  },
  {
    title: "CRM \u0434\u043B\u044F \u0430\u0434\u043C\u0438\u043D\u0430",
    text: `\u041F\u0440\u0435\u0434\u043E\u0441\u0442\u043E\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0443\u0434\u043E\u0431\u043D\u043E\u0435 \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F
    \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439. \u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u044D\u0448\u0431\u044D\u043A \u0431\u0430\u043B\u043B\u044B \u043E\u0442
    \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0438 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0445 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u044B!`,
    img: "/tab3.jpg"
  }
];
var AboutSection = () => {
  var _a;
  const [active, setActive] = (0, import_react2.useState)(1);
  const openFunction = (index) => {
    setActive(index);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "aboutSection container", id: "function", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "title", children: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0438\u043C\u0435\u043D\u043D\u043E \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 AOS?" }, void 0, false, {
      fileName: "app/containers/AboutSection.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "aboutSection__text", children: "\u0426\u0435\u043B\u044C \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B AOS: \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0432\u044F\u0437\u044C \u043C\u0435\u0436\u0434\u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C\u0438 \u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C\u0438. \u041C\u043E\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0442\u0430\u043A \u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432. \u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043E\u0431\u044A\u0435\u043C \u043F\u0440\u043E\u0434\u0430\u0436 \u0438 \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439." }, void 0, false, {
      fileName: "app/containers/AboutSection.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "aboutSection__tabs", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "tabs__buttons", children: listTabs.map((tab, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        TabCard,
        {
          data: {
            number: index,
            active,
            openFunction,
            ...tab
          }
        },
        index,
        false,
        {
          fileName: "app/containers/AboutSection.tsx",
          lineNumber: 46,
          columnNumber: 15
        },
        this
      ) }, void 0, false, {
        fileName: "app/containers/AboutSection.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this)) }, void 0, false, {
        fileName: "app/containers/AboutSection.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "tabs__content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "img",
        {
          className: "tabs__imges",
          src: (_a = listTabs[active]) == null ? void 0 : _a.img,
          alt: "image",
          width: 600,
          height: 590
        },
        void 0,
        false,
        {
          fileName: "app/containers/AboutSection.tsx",
          lineNumber: 59,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/containers/AboutSection.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/containers/AboutSection.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/containers/AboutSection.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
};
var AboutSection_default = AboutSection;

// app/assets/svg/index.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var AppStoreIcon = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "svg",
    {
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "path",
        {
          d: "M22.7342 27.04C21.4275 28.3067 20.0009 28.1067 18.6275 27.5067C17.1742 26.8933 15.8409 26.8667 14.3075 27.5067C12.3875 28.3333 11.3742 28.0933 10.2275 27.04C3.72087 20.3333 4.68087 10.12 12.0675 9.74667C13.8675 9.84 15.1209 10.7333 16.1742 10.8133C17.7475 10.4933 19.2542 9.57333 20.9342 9.69333C22.9475 9.85333 24.4675 10.6533 25.4675 12.0933C21.3075 14.5867 22.2942 20.0667 26.1075 21.6C25.3475 23.6 24.3609 25.5867 22.7209 27.0533L22.7342 27.04ZM16.0409 9.66667C15.8409 6.69333 18.2542 4.24 21.0275 4C21.4142 7.44 17.9075 10 16.0409 9.66667Z",
          fill: "white"
        },
        void 0,
        false,
        {
          fileName: "app/assets/svg/index.tsx",
          lineNumber: 10,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/assets/svg/index.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
};
var PlayMarketIcon = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "svg",
    {
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "path",
        {
          d: "M4 27.3334V4.6667C4 3.88003 4.45333 3.1867 5.12 2.8667L18.2533 16L5.12 29.1334C4.45333 28.8 4 28.12 4 27.3334ZM22.4133 20.16L8.06667 28.4534L19.3867 17.1334L22.4133 20.16ZM26.88 14.4134C27.3333 14.7734 27.6667 15.3334 27.6667 16C27.6667 16.6667 27.3733 17.2 26.9067 17.5734L23.8533 19.3334L20.52 16L23.8533 12.6667L26.88 14.4134ZM8.06667 3.5467L22.4133 11.84L19.3867 14.8667L8.06667 3.5467Z",
          fill: "white"
        },
        void 0,
        false,
        {
          fileName: "app/assets/svg/index.tsx",
          lineNumber: 27,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/assets/svg/index.tsx",
      lineNumber: 20,
      columnNumber: 5
    },
    this
  );
};
var HeaderMenu = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "svg",
    {
      width: 28,
      height: 28,
      viewBox: "0 0 28 28",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "path",
        {
          d: "M3.5 14H24.5M3.5 7H24.5M3.5 21H24.5",
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        },
        void 0,
        false,
        {
          fileName: "app/assets/svg/index.tsx",
          lineNumber: 44,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/assets/svg/index.tsx",
      lineNumber: 37,
      columnNumber: 5
    },
    this
  );
};
var ExidIcon = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "svg",
    {
      width: 14,
      height: 14,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "path",
        {
          d: "M13 1L1 13M1 1L13 13",
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        },
        void 0,
        false,
        {
          fileName: "app/assets/svg/index.tsx",
          lineNumber: 64,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/assets/svg/index.tsx",
      lineNumber: 57,
      columnNumber: 5
    },
    this
  );
};
var BlackIcon = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "path",
        {
          d: "M18 6L6 18M6 6L18 18",
          stroke: "#0F1335",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        },
        void 0,
        false,
        {
          fileName: "app/assets/svg/index.tsx",
          lineNumber: 84,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/assets/svg/index.tsx",
      lineNumber: 77,
      columnNumber: 5
    },
    this
  );
};

// app/containers/AppSection.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var AppSection = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "appSection", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "appSection__row1 container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "row1__item", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "title", children: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0438\u043C\u0435\u043D\u043D\u043E \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 AOS?" }, void 0, false, {
          fileName: "app/containers/AppSection.tsx",
          lineNumber: 8,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { children: "\u0412\u0441\u0435 \u0432 \u043E\u0434\u043D\u043E\u043C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u0434\u043B\u044F \u0432\u0430\u0448\u0438\u0445 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439" }, void 0, false, {
          fileName: "app/containers/AppSection.tsx",
          lineNumber: 9,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/containers/AppSection.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "row1__item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u041F\u0440\u0435\u0434\u043E\u0441\u0442\u043E\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0443\u0434\u043E\u0431\u043D\u043E\u0435 \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0432\u0430\u0448\u0438\u0445 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439. \u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u044D\u0448\u0431\u044D\u043A \u0431\u0430\u043B\u043B\u044B \u043E\u0442 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0438 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0445 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u044B!" }, void 0, false, {
        fileName: "app/containers/AppSection.tsx",
        lineNumber: 12,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/containers/AppSection.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/containers/AppSection.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "appSection__row2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "row2__items", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("picture", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "source",
          {
            media: "(max-width: 520px)",
            srcSet: "/AppsectionPhotos/PhoneM.png 1x , /AppsectionPhotos/PhoneM@2x.png 2x",
            width: 85,
            height: 184
          },
          void 0,
          false,
          {
            fileName: "app/containers/AppSection.tsx",
            lineNumber: 23,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "source",
          {
            media: "(max-width: 1040px)",
            srcSet: "/AppsectionPhotos/PhoneT.png 1x , /AppsectionPhotos/PhoneT@2x.png 2x",
            width: 170,
            height: 370
          },
          void 0,
          false,
          {
            fileName: "app/containers/AppSection.tsx",
            lineNumber: 30,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "img",
          {
            src: "/AppsectionPhotos/PhpneD.png",
            alt: "Phone",
            width: 340,
            height: 737,
            srcSet: "/AppsectionPhotos/PhoneD.png 1x , /AppsectionPhotos/PhoneD@2x.png 2x"
          },
          void 0,
          false,
          {
            fileName: "app/containers/AppSection.tsx",
            lineNumber: 36,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/containers/AppSection.tsx",
        lineNumber: 22,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/containers/AppSection.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "row2__items", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("picture", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "source",
          {
            media: "(max-width: 520px)",
            srcSet: "/AppsectionPhotos/DublePhoneM.png 1x , /AppsectionPhotos/DublePhoneM@2x.png 2x",
            width: 127,
            height: 181
          },
          void 0,
          false,
          {
            fileName: "app/containers/AppSection.tsx",
            lineNumber: 47,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "source",
          {
            media: "(max-width: 1040px)",
            srcSet: "/AppsectionPhotos/DublePhoneT.png 1x , /AppsectionPhotos/DublePhoneT@2x.png 2x",
            width: 255,
            height: 363
          },
          void 0,
          false,
          {
            fileName: "app/containers/AppSection.tsx",
            lineNumber: 54,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "img",
          {
            src: "/AppsectionPhotos/DublePhoneD.png",
            alt: "Phone",
            width: 511,
            height: 726,
            srcSet: "/AppsectionPhotos/DublePhoneD.png 1x , /AppsectionPhotos/DublePhoneD@2x.png 2x"
          },
          void 0,
          false,
          {
            fileName: "app/containers/AppSection.tsx",
            lineNumber: 60,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/containers/AppSection.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/containers/AppSection.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/containers/AppSection.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/containers/AppSection.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "appSection__row3 container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "row3__left", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { children: "\u041F\u043E\u0440\u0430 \u0443\u0436\u0435 \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044E AOS!" }, void 0, false, {
          fileName: "app/containers/AppSection.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "left__buttons", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "buttons__item", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              "a",
              {
                href: "https://apps.apple.com/uz/app/aos-cashback/id1662782441",
                target: "blank",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AppStoreIcon, {}, void 0, false, {
                    fileName: "app/containers/AppSection.tsx",
                    lineNumber: 80,
                    columnNumber: 17
                  }, this),
                  "App Store"
                ]
              },
              void 0,
              true,
              {
                fileName: "app/containers/AppSection.tsx",
                lineNumber: 76,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "container__number", children: "4,8" }, void 0, false, {
              fileName: "app/containers/AppSection.tsx",
              lineNumber: 83,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "123 \u043E\u0442\u0437\u044B\u0432\u0430" }, void 0, false, {
              fileName: "app/containers/AppSection.tsx",
              lineNumber: 84,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/containers/AppSection.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "buttons__item", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "https://play.google.com/store/apps/details?id=natijasd.uz.aos", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PlayMarketIcon, {}, void 0, false, {
                fileName: "app/containers/AppSection.tsx",
                lineNumber: 88,
                columnNumber: 17
              }, this),
              "Google Play"
            ] }, void 0, true, {
              fileName: "app/containers/AppSection.tsx",
              lineNumber: 87,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "container__number", children: "4,8" }, void 0, false, {
              fileName: "app/containers/AppSection.tsx",
              lineNumber: 91,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "123 \u043E\u0442\u0437\u044B\u0432\u0430" }, void 0, false, {
              fileName: "app/containers/AppSection.tsx",
              lineNumber: 92,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/containers/AppSection.tsx",
            lineNumber: 86,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/containers/AppSection.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/containers/AppSection.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "row3__right", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "right__items", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "01" }, void 0, false, {
            fileName: "app/containers/AppSection.tsx",
            lineNumber: 98,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { children: "\u0423\u0434\u043E\u0431\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441" }, void 0, false, {
            fileName: "app/containers/AppSection.tsx",
            lineNumber: 99,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u044D\u0448\u0431\u044D\u043A \u0431\u0430\u043B\u043B\u044B \u043E\u0442 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0438 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0445 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u044B!" }, void 0, false, {
            fileName: "app/containers/AppSection.tsx",
            lineNumber: 100,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/containers/AppSection.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "right__items", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "02" }, void 0, false, {
            fileName: "app/containers/AppSection.tsx",
            lineNumber: 106,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { children: "\u0423\u0434\u043E\u0431\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441" }, void 0, false, {
            fileName: "app/containers/AppSection.tsx",
            lineNumber: 107,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u044D\u0448\u0431\u044D\u043A \u0431\u0430\u043B\u043B\u044B \u043E\u0442 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0438 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0445 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u044B!" }, void 0, false, {
            fileName: "app/containers/AppSection.tsx",
            lineNumber: 108,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/containers/AppSection.tsx",
          lineNumber: 105,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "right__items", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "03" }, void 0, false, {
            fileName: "app/containers/AppSection.tsx",
            lineNumber: 114,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { children: "\u0423\u0434\u043E\u0431\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441" }, void 0, false, {
            fileName: "app/containers/AppSection.tsx",
            lineNumber: 115,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u044D\u0448\u0431\u044D\u043A \u0431\u0430\u043B\u043B\u044B \u043E\u0442 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0438 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0445 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u044B!" }, void 0, false, {
            fileName: "app/containers/AppSection.tsx",
            lineNumber: 116,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/containers/AppSection.tsx",
          lineNumber: 113,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "right__items", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "04" }, void 0, false, {
            fileName: "app/containers/AppSection.tsx",
            lineNumber: 122,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { children: "\u0423\u0434\u043E\u0431\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441" }, void 0, false, {
            fileName: "app/containers/AppSection.tsx",
            lineNumber: 123,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u044D\u0448\u0431\u044D\u043A \u0431\u0430\u043B\u043B\u044B \u043E\u0442 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0438 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0445 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u044B!" }, void 0, false, {
            fileName: "app/containers/AppSection.tsx",
            lineNumber: 124,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/containers/AppSection.tsx",
          lineNumber: 121,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/containers/AppSection.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/containers/AppSection.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/containers/AppSection.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
};
var AppSection_default = AppSection;

// app/containers/ContactSection.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
var ContactSection = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "contactSection", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "contactSection__row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "row__left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "\u0412\u044B\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0431\u0438\u0437\u043D\u0435\u0441 \u043D\u0430 \u043D\u043E\u0432\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E AOS" }, void 0, false, {
        fileName: "app/containers/ContactSection.tsx",
        lineNumber: 9,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/containers/ContactSection.tsx",
        lineNumber: 8,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "row__right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { children: "\u0417\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0443" }, void 0, false, {
        fileName: "app/containers/ContactSection.tsx",
        lineNumber: 12,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/containers/ContactSection.tsx",
        lineNumber: 11,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/containers/ContactSection.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "contactSection__img", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("picture", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "source",
        {
          media: "(max-width: 320px)",
          srcSet: "/DownPhotos/TableM.png 1x , /DownPhotos/TableM@2x.png 2x",
          width: 220,
          height: 90
        },
        void 0,
        false,
        {
          fileName: "app/containers/ContactSection.tsx",
          lineNumber: 18,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "source",
        {
          media: "(max-width: 360px)",
          srcSet: "/DownPhotos/TableM.png 1x , /DownPhotos/TableM@2x.png 2x",
          width: 280,
          height: 120
        },
        void 0,
        false,
        {
          fileName: "app/containers/ContactSection.tsx",
          lineNumber: 24,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "source",
        {
          media: "(max-width: 470px)",
          srcSet: "/DownPhotos/TableM.png 1x , /DownPhotos/TableM@2x.png 2x",
          width: 320,
          height: 150
        },
        void 0,
        false,
        {
          fileName: "app/containers/ContactSection.tsx",
          lineNumber: 30,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "source",
        {
          media: "(max-width: 630px)",
          srcSet: "/DownPhotos/TableM.png 1x , /DownPhotos/TableM@2x.png 2x",
          width: 424,
          height: 200
        },
        void 0,
        false,
        {
          fileName: "app/containers/ContactSection.tsx",
          lineNumber: 37,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "source",
        {
          media: "(max-width: 1040px)",
          srcSet: "/DownPhotos/TableT.png 1x , /DownPhotos/TableT@2x.png 2x",
          width: 623,
          height: 244
        },
        void 0,
        false,
        {
          fileName: "app/containers/ContactSection.tsx",
          lineNumber: 44,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "img",
        {
          src: "/DownPhotos/TableD.png",
          alt: "Phone",
          width: 736,
          height: 351,
          srcSet: "/DownPhotos/TableD.png 1x , /DownPhotos/TableD@2x.png 2x"
        },
        void 0,
        false,
        {
          fileName: "app/containers/ContactSection.tsx",
          lineNumber: 50,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/containers/ContactSection.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/containers/ContactSection.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/containers/ContactSection.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/containers/ContactSection.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
};
var ContactSection_default = ContactSection;

// app/containers/DashboardSection.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
var DashboardSection = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "dashboardSection", id: "work", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "dashboardSection__row1 container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "row1__item", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "title", children: "\u0414\u043E\u0441\u0442\u043E\u0438\u043D\u0441\u0442\u0432\u0430 AOS" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 6,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { children: "\u041F\u043E\u0439\u043C\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0431\u0438\u0437\u043D\u0435\u0441 \u0438 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E AOS" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 7,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/containers/DashboardSection.tsx",
        lineNumber: 5,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "row1__item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043D\u0430\u0448\u0435\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u0432\u044B \u043B\u0435\u0433\u043A\u043E \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u043E\u0432, \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u0438 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439. \u041F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0438 \u043E\u0431\u044C\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0440\u0430\u0437" }, void 0, false, {
        fileName: "app/containers/DashboardSection.tsx",
        lineNumber: 10,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/containers/DashboardSection.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/containers/DashboardSection.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "dashboardSection__row2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "row2__left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: "/transaction.png", alt: "transaction" }, void 0, false, {
        fileName: "app/containers/DashboardSection.tsx",
        lineNumber: 21,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/containers/DashboardSection.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "row2__right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: "/hand.png", alt: "hand" }, void 0, false, {
        fileName: "app/containers/DashboardSection.tsx",
        lineNumber: 24,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/containers/DashboardSection.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/containers/DashboardSection.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/containers/DashboardSection.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "dashboardSection__row3 container inter", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "row3__items", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "04" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "inter__title", children: "\u0423\u0434\u043E\u0431\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u044D\u0448\u0431\u044D\u043A \u0431\u0430\u043B\u043B\u044B \u043E\u0442 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0438 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0445 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u044B!" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/containers/DashboardSection.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "row3__items", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "04" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "inter__title", children: "\u0423\u0434\u043E\u0431\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u044D\u0448\u0431\u044D\u043A \u0431\u0430\u043B\u043B\u044B \u043E\u0442 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0438 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0445 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u044B!" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/containers/DashboardSection.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "row3__items", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "04" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "inter__title", children: "\u0423\u0434\u043E\u0431\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u044D\u0448\u0431\u044D\u043A \u0431\u0430\u043B\u043B\u044B \u043E\u0442 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0438 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0445 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u044B!" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/containers/DashboardSection.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "row3__items", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "04" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "inter__title", children: "\u0423\u0434\u043E\u0431\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u044D\u0448\u0431\u044D\u043A \u0431\u0430\u043B\u043B\u044B \u043E\u0442 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0438 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0445 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u044B!" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/containers/DashboardSection.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "row3__items", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "04" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "inter__title", children: "\u0423\u0434\u043E\u0431\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u044D\u0448\u0431\u044D\u043A \u0431\u0430\u043B\u043B\u044B \u043E\u0442 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0438 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0445 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u044B!" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/containers/DashboardSection.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "row3__items", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "04" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "inter__title", children: "\u0423\u0434\u043E\u0431\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u044D\u0448\u0431\u044D\u043A \u0431\u0430\u043B\u043B\u044B \u043E\u0442 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0438 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0445 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u044B!" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/containers/DashboardSection.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "row3__items", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "04" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "inter__title", children: "\u0423\u0434\u043E\u0431\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u044D\u0448\u0431\u044D\u043A \u0431\u0430\u043B\u043B\u044B \u043E\u0442 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0438 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0445 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u044B!" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/containers/DashboardSection.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "row3__items", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "04" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "inter__title", children: "\u0423\u0434\u043E\u0431\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u044D\u0448\u0431\u044D\u043A \u0431\u0430\u043B\u043B\u044B \u043E\u0442 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0438 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0445 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u044B!" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/containers/DashboardSection.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/containers/DashboardSection.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "dashboardSection__row4 container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "row4__left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { children: "\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438 \u0438 \u0432\u044B\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0431\u0438\u0437\u043D\u0435\u0441 \u043D\u0430 \u043D\u043E\u0432\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C" }, void 0, false, {
        fileName: "app/containers/DashboardSection.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/containers/DashboardSection.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "row4__right", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0443\u044E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E \u043E\u0442 \u043D\u0430\u0448\u0438\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432 \u0438 \u043F\u0440\u043E\u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0439\u0442\u0435 \u0441\u0432\u043E\u0439 \u0431\u0438\u0437\u043D\u0435\u0441 \u0441 \u043D\u0430\u043C\u0438!" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "#", children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 105,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/containers/DashboardSection.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/containers/DashboardSection.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "dashboardSection__row5", id: "rates", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "row5__left", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "title", children: "\u0426\u0435\u043D\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B AOS" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 112,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { children: "\u0412\u0441\u0451 \u043F\u0440\u043E\u0441\u0442\u043E, \u043E\u0434\u0438\u043D \u0442\u0430\u0440\u0438\u0444 \u0438 \u043E\u0434\u043D\u0430 \u0446\u0435\u043D\u0430 \u0434\u043B\u044F \u0432\u0441\u0435\u0445!" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 113,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/containers/DashboardSection.tsx",
        lineNumber: 111,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "row5__right right", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "right__title", children: [
          "600 ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "\u0441\u0443\u043C/\u043C" }, void 0, false, {
            fileName: "app/containers/DashboardSection.tsx",
            lineNumber: 117,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 116,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "\u0417\u0430 \u043E\u0434\u043D\u043E\u0433\u043E \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u0430" }, void 0, false, {
          fileName: "app/containers/DashboardSection.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/containers/DashboardSection.tsx",
        lineNumber: 115,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/containers/DashboardSection.tsx",
      lineNumber: 110,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/containers/DashboardSection.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/containers/DashboardSection.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
};
var DashboardSection_default = DashboardSection;

// app/components/FaqCard.tsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
function FaqCard({ data }) {
  const element = (0, import_react3.useRef)();
  const [active, setActive] = (0, import_react3.useState)(false);
  const openFunction = () => {
    if (!element.current.style.maxHeight) {
      element.current.style.maxHeight = element.current.scrollHeight + "px";
      setActive(true);
    } else {
      element.current.style.maxHeight = null;
      setActive(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: `faqCard ${active ? "active" : ""}`, onClick: openFunction, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "content__title", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: (data == null ? void 0 : data.number) + 1 }, void 0, false, {
        fileName: "app/components/FaqCard.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      " ",
      data == null ? void 0 : data.title
    ] }, void 0, true, {
      fileName: "app/components/FaqCard.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { ref: element, children: data == null ? void 0 : data.text }, void 0, false, {
      fileName: "app/components/FaqCard.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/FaqCard.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/containers/FaqSection.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
var listTabs2 = [
  {
    title: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0434\u043D\u0435\u0439 \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F, \u0447\u0442\u043E\u0431\u044B \u0432\u043D\u0435\u0434\u0440\u0438\u0442\u044C \u044D\u0442\u0443 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0432 \u0431\u0438\u0437\u043D\u0435\u0441?",
    text: `\u041F\u0440\u0435\u0434\u043E\u0441\u0442\u043E\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0443\u0434\u043E\u0431\u043D\u043E\u0435 \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0432\u0430\u0448\u0438\u0445 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439. \u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u044D\u0448\u0431\u044D\u043A \u0431\u0430\u043B\u043B\u044B \u043E\u0442 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0438 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0445 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u044B!`
  },
  {
    title: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0434\u043D\u0435\u0439 \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F, \u0447\u0442\u043E\u0431\u044B \u0432\u043D\u0435\u0434\u0440\u0438\u0442\u044C \u044D\u0442\u0443 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0432 \u0431\u0438\u0437\u043D\u0435\u0441?",
    text: `\u041F\u0440\u0435\u0434\u043E\u0441\u0442\u043E\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0443\u0434\u043E\u0431\u043D\u043E\u0435 \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F
    \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439. \u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u044D\u0448\u0431\u044D\u043A \u0431\u0430\u043B\u043B\u044B \u043E\u0442
    \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0438 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0445 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u044B!`
  },
  {
    title: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0434\u043D\u0435\u0439 \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F, \u0447\u0442\u043E\u0431\u044B \u0432\u043D\u0435\u0434\u0440\u0438\u0442\u044C \u044D\u0442\u0443 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0432 \u0431\u0438\u0437\u043D\u0435\u0441?",
    text: `\u041F\u0440\u0435\u0434\u043E\u0441\u0442\u043E\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0443\u0434\u043E\u0431\u043D\u043E\u0435 \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F
    \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439. \u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u044D\u0448\u0431\u044D\u043A \u0431\u0430\u043B\u043B\u044B \u043E\u0442
    \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0438 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0445 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u044B!`
  }
];
var FaqSection = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "faqSection container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "title", children: "\u0427\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u043E\u0432\u0430\u0435\u043C\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B" }, void 0, false, {
      fileName: "app/containers/FaqSection.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "faqSection__content content", children: listTabs2.map((tab, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      FaqCard,
      {
        data: {
          number: index,
          title: tab == null ? void 0 : tab.title,
          text: tab == null ? void 0 : tab.text
        }
      },
      index,
      false,
      {
        fileName: "app/containers/FaqSection.tsx",
        lineNumber: 29,
        columnNumber: 11
      },
      this
    )) }, void 0, false, {
      fileName: "app/containers/FaqSection.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/containers/FaqSection.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
};
var FaqSection_default = FaqSection;

// app/containers/FeedbackSection.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
var FeedbackSection = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "feedbackSection container", id: "comment", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "title", children: "\u041E\u0442\u0437\u044B\u0432\u044B \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432" }, void 0, false, {
      fileName: "app/containers/FeedbackSection.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "feedbackSection__content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "content__item", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "\xAB\u0414\u0430\u044E \u0441\u0432\u043E\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u043C\u043E\u0442\u0438\u0432\u0430\u0446\u0438\u044E \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u0442\u044C \u043C\u0435\u043D\u044F \u0441\u0432\u043E\u0438\u043C \u0434\u0440\u0443\u0437\u044C\u044F\u043C!\u0421 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0434\u0440\u0443\u0433\u0430 \u044F \u043D\u0430\u0447\u0438\u0441\u043B\u044F\u044E \u043A\u043B\u0438\u0435\u043D\u0442\u0443 10% \u2014 \u0442\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043F\u043E\u043B\u0443\u0447\u0430\u044F \u043D\u043E\u0432\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432\u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u044E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u0438\u0437\u0438\u0442\u043E\u0432 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438" }, void 0, false, {
          fileName: "app/containers/FeedbackSection.tsx",
          lineNumber: 7,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "info", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { src: "/user.png", alt: "" }, void 0, false, {
            fileName: "app/containers/FeedbackSection.tsx",
            lineNumber: 13,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: "Odilxon" }, void 0, false, {
              fileName: "app/containers/FeedbackSection.tsx",
              lineNumber: 15,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 City market " }, void 0, false, {
              fileName: "app/containers/FeedbackSection.tsx",
              lineNumber: 16,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/containers/FeedbackSection.tsx",
            lineNumber: 14,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/containers/FeedbackSection.tsx",
          lineNumber: 12,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/containers/FeedbackSection.tsx",
        lineNumber: 6,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "content__item", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "\xAB\u0414\u0430\u044E \u0441\u0432\u043E\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u043C\u043E\u0442\u0438\u0432\u0430\u0446\u0438\u044E \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u0442\u044C \u043C\u0435\u043D\u044F \u0441\u0432\u043E\u0438\u043C \u0434\u0440\u0443\u0437\u044C\u044F\u043C!\u0421 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0434\u0440\u0443\u0433\u0430 \u044F \u043D\u0430\u0447\u0438\u0441\u043B\u044F\u044E \u043A\u043B\u0438\u0435\u043D\u0442\u0443 10% \u2014 \u0442\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043F\u043E\u043B\u0443\u0447\u0430\u044F \u043D\u043E\u0432\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432\u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u044E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u0438\u0437\u0438\u0442\u043E\u0432 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438" }, void 0, false, {
          fileName: "app/containers/FeedbackSection.tsx",
          lineNumber: 21,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "info", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { src: "/user.png", alt: "" }, void 0, false, {
            fileName: "app/containers/FeedbackSection.tsx",
            lineNumber: 27,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: "Odilxon" }, void 0, false, {
              fileName: "app/containers/FeedbackSection.tsx",
              lineNumber: 29,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 City market " }, void 0, false, {
              fileName: "app/containers/FeedbackSection.tsx",
              lineNumber: 30,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/containers/FeedbackSection.tsx",
            lineNumber: 28,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/containers/FeedbackSection.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/containers/FeedbackSection.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "content__item", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "\xAB\u0414\u0430\u044E \u0441\u0432\u043E\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u043C\u043E\u0442\u0438\u0432\u0430\u0446\u0438\u044E \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u0442\u044C \u043C\u0435\u043D\u044F \u0441\u0432\u043E\u0438\u043C \u0434\u0440\u0443\u0437\u044C\u044F\u043C!\u0421 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0434\u0440\u0443\u0433\u0430 \u044F \u043D\u0430\u0447\u0438\u0441\u043B\u044F\u044E \u043A\u043B\u0438\u0435\u043D\u0442\u0443 10% \u2014 \u0442\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043F\u043E\u043B\u0443\u0447\u0430\u044F \u043D\u043E\u0432\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432\u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u044E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u0438\u0437\u0438\u0442\u043E\u0432 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438" }, void 0, false, {
          fileName: "app/containers/FeedbackSection.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "info", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { src: "/user.png", alt: "" }, void 0, false, {
            fileName: "app/containers/FeedbackSection.tsx",
            lineNumber: 41,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: "Odilxon" }, void 0, false, {
              fileName: "app/containers/FeedbackSection.tsx",
              lineNumber: 43,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 City market " }, void 0, false, {
              fileName: "app/containers/FeedbackSection.tsx",
              lineNumber: 44,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/containers/FeedbackSection.tsx",
            lineNumber: 42,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/containers/FeedbackSection.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/containers/FeedbackSection.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "content__item", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "\xAB\u0414\u0430\u044E \u0441\u0432\u043E\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u043C\u043E\u0442\u0438\u0432\u0430\u0446\u0438\u044E \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u0442\u044C \u043C\u0435\u043D\u044F \u0441\u0432\u043E\u0438\u043C \u0434\u0440\u0443\u0437\u044C\u044F\u043C!\u0421 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0434\u0440\u0443\u0433\u0430 \u044F \u043D\u0430\u0447\u0438\u0441\u043B\u044F\u044E \u043A\u043B\u0438\u0435\u043D\u0442\u0443 10% \u2014 \u0442\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043F\u043E\u043B\u0443\u0447\u0430\u044F \u043D\u043E\u0432\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432\u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u044E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u0438\u0437\u0438\u0442\u043E\u0432 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438" }, void 0, false, {
          fileName: "app/containers/FeedbackSection.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "info", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { src: "/user.png", alt: "" }, void 0, false, {
            fileName: "app/containers/FeedbackSection.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: "Odilxon" }, void 0, false, {
              fileName: "app/containers/FeedbackSection.tsx",
              lineNumber: 57,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 City market " }, void 0, false, {
              fileName: "app/containers/FeedbackSection.tsx",
              lineNumber: 58,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/containers/FeedbackSection.tsx",
            lineNumber: 56,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/containers/FeedbackSection.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/containers/FeedbackSection.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "content__item", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "\xAB\u0414\u0430\u044E \u0441\u0432\u043E\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u043C\u043E\u0442\u0438\u0432\u0430\u0446\u0438\u044E \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u0442\u044C \u043C\u0435\u043D\u044F \u0441\u0432\u043E\u0438\u043C \u0434\u0440\u0443\u0437\u044C\u044F\u043C!\u0421 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0434\u0440\u0443\u0433\u0430 \u044F \u043D\u0430\u0447\u0438\u0441\u043B\u044F\u044E \u043A\u043B\u0438\u0435\u043D\u0442\u0443 10% \u2014 \u0442\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043F\u043E\u043B\u0443\u0447\u0430\u044F \u043D\u043E\u0432\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432\u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u044E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u0438\u0437\u0438\u0442\u043E\u0432 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438" }, void 0, false, {
          fileName: "app/containers/FeedbackSection.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "info", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { src: "/user.png", alt: "" }, void 0, false, {
            fileName: "app/containers/FeedbackSection.tsx",
            lineNumber: 69,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: "Odilxon" }, void 0, false, {
              fileName: "app/containers/FeedbackSection.tsx",
              lineNumber: 71,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 City market " }, void 0, false, {
              fileName: "app/containers/FeedbackSection.tsx",
              lineNumber: 72,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/containers/FeedbackSection.tsx",
            lineNumber: 70,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/containers/FeedbackSection.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/containers/FeedbackSection.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "content__item", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "\xAB\u0414\u0430\u044E \u0441\u0432\u043E\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u043C\u043E\u0442\u0438\u0432\u0430\u0446\u0438\u044E \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u0442\u044C \u043C\u0435\u043D\u044F \u0441\u0432\u043E\u0438\u043C \u0434\u0440\u0443\u0437\u044C\u044F\u043C!\u0421 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0434\u0440\u0443\u0433\u0430 \u044F \u043D\u0430\u0447\u0438\u0441\u043B\u044F\u044E \u043A\u043B\u0438\u0435\u043D\u0442\u0443 10% \u2014 \u0442\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043F\u043E\u043B\u0443\u0447\u0430\u044F \u043D\u043E\u0432\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432\u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u044E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u0438\u0437\u0438\u0442\u043E\u0432 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438" }, void 0, false, {
          fileName: "app/containers/FeedbackSection.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "info", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { src: "/user.png", alt: "" }, void 0, false, {
            fileName: "app/containers/FeedbackSection.tsx",
            lineNumber: 83,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: "Odilxon" }, void 0, false, {
              fileName: "app/containers/FeedbackSection.tsx",
              lineNumber: 85,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 City market " }, void 0, false, {
              fileName: "app/containers/FeedbackSection.tsx",
              lineNumber: 86,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/containers/FeedbackSection.tsx",
            lineNumber: 84,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/containers/FeedbackSection.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/containers/FeedbackSection.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/containers/FeedbackSection.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/containers/FeedbackSection.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
};
var FeedbackSection_default = FeedbackSection;

// app/containers/ZeroSection.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
var ZeroSection = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "zeroSection", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "zeroSection__row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "row__left", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { children: "\u041B\u0443\u0447\u0448\u0430\u044F \u043A\u044D\u0448\u0431\u044D\u043A \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430, \u0438 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E..." }, void 0, false, {
          fileName: "app/containers/ZeroSection.tsx",
          lineNumber: 7,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "\u041F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043E \u043D\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u0435\u0439\u0441\u0430\u0445 \u0442\u0430\u043A\u0438\u0445 \u0436\u0435 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430\u0445, \u043A\u0430\u043A \u0438 \u0443 \u0432\u0430\u0441!" }, void 0, false, {
          fileName: "app/containers/ZeroSection.tsx",
          lineNumber: 8,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "left__buttons", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { children: "\u0417\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0443" }, void 0, false, {
            fileName: "app/containers/ZeroSection.tsx",
            lineNumber: 10,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("a", { href: "#", "aria-label": "link for app", children: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044E" }, void 0, false, {
            fileName: "app/containers/ZeroSection.tsx",
            lineNumber: 11,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/containers/ZeroSection.tsx",
          lineNumber: 9,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/containers/ZeroSection.tsx",
        lineNumber: 6,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "row__right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("picture", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "source",
          {
            media: "(max-width: 500px)",
            srcSet: "/ZeroSectionPhotos/MacBookM.png 1x , /ZeroSectionPhotos/MacBookM@2x.png 2x",
            width: 478,
            height: 325
          },
          void 0,
          false,
          {
            fileName: "app/containers/ZeroSection.tsx",
            lineNumber: 18,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "source",
          {
            media: "(max-width: 1040px)",
            srcSet: "/ZeroSectionPhotos/MacbookT.png 1x , /ZeroSectionPhotos/MacbookT@2x.png 2x",
            width: 480,
            height: 400
          },
          void 0,
          false,
          {
            fileName: "app/containers/ZeroSection.tsx",
            lineNumber: 25,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "img",
          {
            src: "/ZeroSectionPhotos/MacbookD.png",
            alt: "Macbook laptop",
            width: 852,
            height: 575,
            srcSet: "/ZeroSectionPhotos/MacbookD.png 1x , /ZeroSectionPhotos/MacbookD@2x.png 2x"
          },
          void 0,
          false,
          {
            fileName: "app/containers/ZeroSection.tsx",
            lineNumber: 31,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/containers/ZeroSection.tsx",
        lineNumber: 17,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/containers/ZeroSection.tsx",
        lineNumber: 16,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/containers/ZeroSection.tsx",
      lineNumber: 5,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "zeroSection__row secondrow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "row__text", children: "\u0411\u043E\u043B\u0435\u0435 20 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D\u0430 \u0443\u0436\u0435 \u0432\u044B\u0431\u0440\u0430\u043B\u0438 \u043D\u0430\u0441" }, void 0, false, {
        fileName: "app/containers/ZeroSection.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "row__companies logos", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "img",
          {
            className: "logos__gyp",
            src: "/ZeroSectionPhotos/gyplogo.png",
            alt: "gyplogo",
            width: 142,
            height: 72
          },
          void 0,
          false,
          {
            fileName: "app/containers/ZeroSection.tsx",
            lineNumber: 46,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "img",
          {
            className: "logos__landy",
            src: "/ZeroSectionPhotos/landylogo.png",
            alt: "landylogo",
            width: 128,
            height: 72
          },
          void 0,
          false,
          {
            fileName: "app/containers/ZeroSection.tsx",
            lineNumber: 53,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "img",
          {
            className: "logos__academy",
            src: "/ZeroSectionPhotos/academylogo.png",
            alt: "academylogo",
            width: 138,
            height: 72
          },
          void 0,
          false,
          {
            fileName: "app/containers/ZeroSection.tsx",
            lineNumber: 60,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "img",
          {
            className: "logos__icon",
            src: "/ZeroSectionPhotos/iconlogo.png",
            alt: "iconlogo",
            width: 30,
            height: 72
          },
          void 0,
          false,
          {
            fileName: "app/containers/ZeroSection.tsx",
            lineNumber: 67,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "img",
          {
            className: "logos__iconic",
            src: "/ZeroSectionPhotos/iconiclogo.png",
            alt: "iconiclogo",
            width: 125,
            height: 72
          },
          void 0,
          false,
          {
            fileName: "app/containers/ZeroSection.tsx",
            lineNumber: 74,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/containers/ZeroSection.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/containers/ZeroSection.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/containers/ZeroSection.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/containers/ZeroSection.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
};
var ZeroSection_default = ZeroSection;

// app/components/DropDown.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
var DropDown = ({ open, setOpen }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "wrapDrop", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "dropDown", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "dropDown__top ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "dropDown__language", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          "input",
          {
            type: "radio",
            id: "ru",
            name: "language",
            value: "ru",
            defaultChecked: true
          },
          void 0,
          false,
          {
            fileName: "app/components/DropDown.tsx",
            lineNumber: 10,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { htmlFor: "ru", children: "Ru" }, void 0, false, {
          fileName: "app/components/DropDown.tsx",
          lineNumber: 17,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "radio", id: "uz", name: "language", value: "uz" }, void 0, false, {
          fileName: "app/components/DropDown.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { htmlFor: "uz", children: "Uz" }, void 0, false, {
          fileName: "app/components/DropDown.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/DropDown.tsx",
        lineNumber: 9,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("button", { onClick: () => setOpen(!open), children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(ExidIcon, {}, void 0, false, {
        fileName: "app/components/DropDown.tsx",
        lineNumber: 23,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/DropDown.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/DropDown.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "left__links", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Link2, { to: "#function", className: "links__link", children: "\u0424\u0443\u043D\u043A\u0446\u0438\u0438" }, void 0, false, {
        fileName: "app/components/DropDown.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Link2, { to: "#work", className: "links__link", children: "\u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442" }, void 0, false, {
        fileName: "app/components/DropDown.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Link2, { to: "#comment", className: "links__link", children: "\u041E\u0442\u0437\u044B\u0432\u044B" }, void 0, false, {
        fileName: "app/components/DropDown.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Link2, { to: "#rates", className: "links__link", children: "\u0422\u0430\u0440\u0438\u0444\u044B" }, void 0, false, {
        fileName: "app/components/DropDown.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/DropDown.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/DropDown.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/DropDown.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
};

// app/components/Header.tsx
var import_react7 = __toESM(require_react());

// app/context/LangContext.tsx
var import_react5 = __toESM(require_react());
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime());
var LanguageContext = (0, import_react5.createContext)({
  language: "en",
  setLanguage: () => {
  }
});
var LanguageProvider = ({ children }) => {
  const [language, setLanguage] = (0, import_react5.useState)("en");
  const value = {
    language,
    setLanguage
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(LanguageContext.Provider, { value, children }, void 0, false, {
    fileName: "app/context/LangContext.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};

// app/components/Header.tsx
var import_react_dom = __toESM(require_react_dom());

// app/components/InputModal.tsx
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime());
var InputModal = ({ data }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "input",
    {
      type: data == null ? void 0 : data.type,
      name: data == null ? void 0 : data.name,
      placeholder: data == null ? void 0 : data.plc,
      "aria-label": data == null ? void 0 : data.label
    },
    void 0,
    false,
    {
      fileName: "app/components/InputModal.tsx",
      lineNumber: 9,
      columnNumber: 5
    },
    this
  );
};

// app/components/Modal.tsx
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime());
var Inputs = [
  {
    type: "text",
    name: "your_name",
    plc: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
    label: "Entr your name"
  },
  {
    type: "text",
    name: "your_name",
    plc: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
    label: "Entr your name"
  },
  {
    type: "text",
    name: "your_company",
    plc: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",
    label: "Entr your company"
  },
  {
    type: "tel",
    name: "your_phone",
    plc: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u043E\u043C\u0435\u0440",
    label: "Entr your phone number"
  }
];
function ModalContent({ onClose }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "modal", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "modal__content content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "content__intro", children: "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0432\u043E\u0438 \u0434\u0430\u043D\u043D\u044B\u0435, \u0438 \u043C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F!" }, void 0, false, {
      fileName: "app/components/Modal.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("button", { className: "content__btn", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(BlackIcon, {}, void 0, false, {
      fileName: "app/components/Modal.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Modal.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      "form",
      {
        autoComplete: "off",
        className: "content__form",
        action: "https://echo.htmlacademy.ru/courses",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "content__wrap", children: Inputs == null ? void 0 : Inputs.map((obj, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(InputModal, { data: { ...obj } }, index, false, {
            fileName: "app/components/Modal.tsx",
            lineNumber: 49,
            columnNumber: 15
          }, this)) }, void 0, false, {
            fileName: "app/components/Modal.tsx",
            lineNumber: 47,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "content__chack", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              "input",
              {
                type: "checkbox",
                name: "is_true",
                className: "visually-hidden"
              },
              void 0,
              false,
              {
                fileName: "app/components/Modal.tsx",
                lineNumber: 55,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", {}, void 0, false, {
              fileName: "app/components/Modal.tsx",
              lineNumber: 60,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("strong", { children: "\u042F \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C" }, void 0, false, {
                fileName: "app/components/Modal.tsx",
                lineNumber: 62,
                columnNumber: 17
              }, this),
              " \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445."
            ] }, void 0, true, {
              fileName: "app/components/Modal.tsx",
              lineNumber: 61,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Modal.tsx",
            lineNumber: 54,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/components/Modal.tsx",
            lineNumber: 53,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("button", { children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C" }, void 0, false, {
            fileName: "app/components/Modal.tsx",
            lineNumber: 66,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/Modal.tsx",
        lineNumber: 42,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Modal.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Modal.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
{
}

// app/components/Header.tsx
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime());
var Header = () => {
  const [showModal, setShowModal] = (0, import_react7.useState)(false);
  const [isOpen, setIsOpen] = (0, import_react7.useState)(false);
  const handleDrop = () => {
    setIsOpen(!isOpen);
  };
  const languageContext = (0, import_react7.useContext)(LanguageContext);
  const lan = languageContext.language;
  console.log(lan);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "header container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "header__left", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Link2, { to: "#", className: "left__logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { src: "/logo.png", width: 100, height: 41, alt: "Logo" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "left__links", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Link2, { to: "#function", className: "links__link", children: "\u0424\u0443\u043D\u043A\u0446\u0438\u0438" }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Link2, { to: "#work", className: "links__link", children: "\u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442" }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Link2, { to: "#comment", className: "links__link", children: "\u041E\u0442\u0437\u044B\u0432\u044B" }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Link2, { to: "#rates", className: "links__link", children: "\u0422\u0430\u0440\u0438\u0444\u044B" }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Header.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(DropDown, { open: isOpen, setOpen: setIsOpen }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 45,
      columnNumber: 18
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "header__right", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "button",
        {
          className: "nav-btn",
          onClick: handleDrop,
          "aria-label": "burger-button",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(HeaderMenu, {}, void 0, false, {
            fileName: "app/components/Header.tsx",
            lineNumber: 53,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 48,
          columnNumber: 9
        },
        this
      ),
      showModal && (0, import_react_dom.createPortal)(
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(ModalContent, { onClose: () => setShowModal(false) }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        document.body
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "right__language", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          "input",
          {
            type: "radio",
            id: "ru",
            name: "language",
            value: "ru",
            defaultChecked: true
          },
          void 0,
          false,
          {
            fileName: "app/components/Header.tsx",
            lineNumber: 63,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("label", { htmlFor: "ru", children: "Ru" }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("input", { type: "radio", id: "uz", name: "language", value: "uz" }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("label", { htmlFor: "uz", children: "Uz" }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Header.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("button", { onClick: () => setShowModal(true), children: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
};
var Header_default = Header;

// app/layouts/Main.tsx
var import_jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime());
var Main = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(LanguageProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("header", { className: "main__header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Header_default, {}, void 0, false, {
      fileName: "app/layouts/Main.tsx",
      lineNumber: 11,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/layouts/Main.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "main__body", children }, void 0, false, {
      fileName: "app/layouts/Main.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("footer", { className: "main__footer" }, void 0, false, {
      fileName: "app/layouts/Main.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/layouts/Main.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/layouts/Main.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
};
var Main_default = Main;

// app/routes/_index.tsx
var import_jsx_dev_runtime18 = __toESM(require_jsx_dev_runtime());
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Main_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(ZeroSection_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(AboutSection_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(AppSection_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(DashboardSection_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(FeedbackSection_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(FaqSection_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(ContactSection_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Footer_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-PLUYL6DK.js.map
