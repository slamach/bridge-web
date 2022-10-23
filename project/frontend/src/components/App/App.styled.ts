import styled, { createGlobalStyle, DefaultTheme } from 'styled-components';
import InterRegular from '../../assets/fonts/Inter-Regular.woff2';
import InterMedium from '../../assets/fonts/Inter-Medium.woff2';
import InterSemiBold from '../../assets/fonts/Inter-SemiBold.woff2';

const breakpoints = {
  large: 1280,
  medium: 768,
  small: 360,
};

export const theme: DefaultTheme = {
  breakpoints,
  media: {
    largeOnly: `screen and (min-width: ${breakpoints.large}px)`,
    medium: `screen and (max-width: ${breakpoints.large - 1}px)`,
    small: `screen and (max-width: ${breakpoints.medium - 1}px)`,
  },
  colors: {
    background: '#000000',
    primary: '#ffffff',
    highlight: '#2787E7',
    highlightHovered: '#1E7EDE',
    highlightClicked: '#1878D8',
    inputBackground: '#0f0f0f',
    elementsBackground: '#303030',
    elementsBackgroundHovered: '#2C2C2C',
    elementsBackgroundClicked: '#2A2A2A',
  },
};

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('${InterRegular}') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('${InterMedium}') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('${InterSemiBold}') format('woff2');
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    overflow-x: hidden;
  }

  body {
    min-width: ${theme.breakpoints.small}px;
    height: 100%;
    margin: 0;
    overflow-x: hidden;
    scroll-behavior: smooth;
    font-family: Inter, sans-serif;
    font-size: 15px;
    color: ${theme.colors.primary};
    background-color: ${theme.colors.background};
  }

  #root {
    height: 100%;
    overflow-x: hidden;
  }

  img,
  svg {
    max-width: 100%;
    height: auto;
  }
`;

export const VisuallyHidden = styled.p`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  clip: rect(0 0 0 0);
`;
