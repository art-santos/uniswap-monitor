import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#FFF',
      emphasis: '#E8EAF6',
      secondary: '#C5CAE9',
      header: '#121037',
    },
    text: {
      primary: '#111',
      secondary: '#5C6BC0',
      hint: '#4f38f7',
    },
    primary: {
      main: '#304FFE',
      light: '#536DFE',
      dark: '#111',
    },
    secondary: {
      main: '#4f38f7',
      light: '#ffd740',
      dark: '#3727ac',
    },
    contrastThreshold: 1.8,
  },
});

export default theme;
