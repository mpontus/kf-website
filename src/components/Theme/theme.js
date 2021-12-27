import { css } from "styled-components";
import { base, dark } from "grommet/themes";
import { deepMerge } from "grommet/utils";

export const breakpoints = {
  small: {
    value: 768,
    edgeSize: {
      xxlarge: "72px",
      xxxlarge: "120px",
    },
  },
  medium: {
    value: 1200,
  },
  large: {},
};

const headerSizes = {
  medium: {
    size: "20px",
    height: "32px",
    maxWidth: "",
  },
};

const subheaderSizes = {
  medium: {
    size: "16px",
    height: "24px",
    maxWidth: "",
  },
};

const textSizes = {
  medium: {
    size: "20px",
    height: "24px",
    maxWidth: "",
  },
  large: {
    size: "16px",
    height: "32px",
    maxWidth: "",
  },
  extend: (props) => css`
    ${!props.textAlign &&
    css`
      text-align: justify;
    `};

    ${props.hyphens &&
    css`
      hyphens: ${props.hyphens};
    `}
  `,
};

const custom = {
  global: {
    font: {
      family: "Manrope",
      weight: 400,
    },
    breakpoints: { ...breakpoints },
  },
  textSizes,
  heading: {
    responsiveBreakpoint: null,
    level: {
      1: headerSizes,
      2: headerSizes,
      3: subheaderSizes,
      4: subheaderSizes,
      5: subheaderSizes,
      6: subheaderSizes,
    },
  },
};

const theme = deepMerge(dark, custom);

export default theme;
