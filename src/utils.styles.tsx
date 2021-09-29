import { css, BaseThemedCssFunction, CSSObject } from "styled-components/macro";
import { useState, useCallback, useEffect } from "react";

export const fontFamilyBase = `CalibreSchoolWeb, Calibre, CalibreSchool, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`;

export const PIXELS_PER_REM = 16;

export const BREAKPOINT_SM = 576;
export const BREAKPOINT_MD = 768;
export const BREAKPOINT_LG = 992;
export const BREAKPOINT_XL = 1200;

type MediaSizeObject = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};
type MediaSize = keyof MediaSizeObject;

export const mediaSizes: MediaSizeObject = {
  xs: 0,
  sm: BREAKPOINT_SM,
  md: BREAKPOINT_MD,
  lg: BREAKPOINT_LG,
  xl: BREAKPOINT_XL,
};
const mediaDownSizes: MediaSizeObject = {
  xs: BREAKPOINT_SM,
  sm: BREAKPOINT_MD,
  md: BREAKPOINT_LG,
  lg: BREAKPOINT_XL,
  xl: 1200,
};

type MediaFunctionObject = {
  xs: BaseThemedCssFunction<{}>;
  sm: BaseThemedCssFunction<{}>;
  md: BaseThemedCssFunction<{}>;
  lg: BaseThemedCssFunction<{}>;
  xl: BaseThemedCssFunction<{}>;
};

export const mediaUp: MediaFunctionObject = (
  Object.keys(mediaSizes) as MediaSize[]
).reduce((acc, label) => {
  (acc as any)[label] = <Props extends object>(
    ...args: [CSSObject | TemplateStringsArray, any]
  ) => {
    return css<Props>`
      @media (min-width: ${mediaSizes[label]}px) {
        ${css<Props>(...args)};
      }
    `;
  };
  return acc;
}, {} as MediaFunctionObject);

export const mediaDown: MediaFunctionObject = (
  Object.keys(mediaDownSizes) as MediaSize[]
).reduce((acc, label) => {
  (acc as any)[label] = <Props extends object>(
    ...args: [CSSObject | TemplateStringsArray, any]
  ) => css<Props>`
    @media (max-width: ${mediaDownSizes[label]}px) {
      ${css<Props>(...args)};
    }
  `;
  return acc;
}, {} as MediaFunctionObject);

export const hiddenPrint = `
  @media print {
    display: none !important;
  }
`;

export const printOnly = `
  @media print {
    display: block !important;
  }
`;

export const rem = (val: number | string): string =>
  `${parseFloat(val.toString()) / PIXELS_PER_REM}rem`;

export const MEDIA_SM = `(min-width: ${BREAKPOINT_SM}px)`;
export const MEDIA_MD = `(min-width: ${BREAKPOINT_MD}px)`;
export const MEDIA_LG = `(min-width: ${BREAKPOINT_LG}px)`;
export const MEDIA_XL = `(min-width: ${BREAKPOINT_XL}px)`;

export type MinMediaQuery = typeof MEDIA_MD;

export const useMediaQuery = (mediaQuery: MinMediaQuery) => {
  const [isMq, setIsMq] = useState<boolean>(
    window.matchMedia(mediaQuery).matches
  );

  const onResize = useCallback((e) => setIsMq(e.matches), []);

  useEffect(() => {
    const mql = window.matchMedia(mediaQuery);
    mql.addListener(onResize);

    return () => {
      mql.removeListener(onResize);
    };
    //eslint-disable-next-line
  }, []);

  return isMq;
};

export type RGBArray = number[];
export type HexColour = string;

// Returns RGB tuplet values from 0-255
export const hexColourToRGBArray = (
  hexColour: HexColour | undefined
): RGBArray => {
  if (!hexColour) return [0, 0, 0];
  const rawColour = hexColour.replace(/^#/, "");
  const rgbWidth = rawColour.length === 3 ? 1 : 2;
  const repeatHex = rgbWidth === 1;

  return [undefined, undefined, undefined].map((v, index) => {
    const hexColour = rawColour.substr(index * rgbWidth, rgbWidth);
    return parseInt(`${hexColour}${repeatHex ? hexColour : ""}`, 16);
  });
};

export function toRgb(colour: string, alpha = 1) {
  return `rgba(${hexColourToRGBArray(colour).join(",")}, ${alpha})`;
}
