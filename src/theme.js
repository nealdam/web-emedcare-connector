import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2197D4',
    },
    secondary: {
      main: '#151522',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F5F5F5',
    },
    action: {
      selected: '#ffac33',
      hover: '#ffc570'
    }
  },
});

export default theme;
