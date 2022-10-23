import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      large: number;
      medium: number;
      small: number;
    };
    media: {
      largeOnly: string;
      medium: string;
      small: string;
    };
    colors: {
      background: string;
      primary: string;
      highlight: string;
      highlightHovered: string;
      highlightClicked: string;
      inputBackground: string;
      elementsBackground: string;
      elementsBackgroundHovered: string;
      elementsBackgroundClicked: string;
    };
  }
}
