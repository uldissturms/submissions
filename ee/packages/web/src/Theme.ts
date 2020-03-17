export const Theme = {
  colors: {
    blue: '#1795D4',
    cerulean: '#11ACE3',
    stone: '#F0F0F0',
    slateGrey: '#566679',
    boulder: '#797979',
    grey: '#888888',
    lightGrey: '#eeeeee',
    bombay: '#ADAFB2',
    white: '#FFFFFF',
    red: 'rgb(225, 89, 92)',
    lightBlue: 'rgb(95, 201, 231)',
    labelColor: '#566679',
    yellow: '#fed800',
    darkYellow: '#d4b526'
  }
}

type ThemeType = typeof Theme

declare module 'styled-components' {
  interface DefaultTheme extends ThemeType {}
}
