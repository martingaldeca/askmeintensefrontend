import { createTheme } from '@mui/material/styles';

export const theme = {
  colors: {
    mainColor: '#1976d2',
    borderColor: '#07568a',
    mainColorShadow: '#50afef',
    textOnMainColor: '#ffffff',

    errorColor: '#e04747',

    secondaryColor: '#e4dc43',
    secondaryBorderColor: '#8a3907',
    secondaryColorShadow: '#efa750',
    textOnSecondaryColor: '#1976d2',

    link: '#E49143FF',
    underlinedLinkColor: '#000000',

    mainButtonColor: '#1976d2',
    mainButtonTextColor: '#ffffff',
    secondaryButtonColor: '#ffffff',
    secondaryButtonTextColor: '#1976d2',

    listSelectorColor: '#ffffff',
    listSelectorTextColor: '#1976d2',
    listSelectorBorderColor: '#1976d2',

    oddRowColor: '#f2f2f2',
    evenRowColor: '#ffffff',
    hoverColor: '#bababa',

    unselectedColor: 'rgba(186,186,186,0.5)',
  },
  sizes: {
    inputMinWith: '300px',
    standaloneButtonHeight: '40px',
    standaloneSmallButtonHeight: '30px',
    smallMargin: '5px',
    mediumMargin: '15px',
    bigMargin: '30px',
    smallPadding: '5px',
    mediumPadding: '15px',
    bigPadding: '30px',
    verticalSizeSmall: '27vh',
    verticalSizeMedium: '60vh',
    verticalSizeFull: '100vh',
    verticalSizeFillSmall: '63vh',
    verticalSizeFillMedium: '40vh',
    navBarHeight: '55px',
    maxWidth: '600px',
    toast: {
      toastWidth: '90%',
      toastFontSize: '16px',
    },
  },
  cardBorderRadius: '16px',
};

const globalTheme = createTheme({
  palette: {
    primary: {
      light: theme.colors.borderColor,
      main: theme.colors.mainColor,
      dark: theme.colors.mainColorShadow,
      contrastText: theme.colors.textOnMainColor,
    },
    secondary: {
      light: theme.colors.secondaryBorderColor,
      main: theme.colors.secondaryColor,
      dark: theme.colors.secondaryColorShadow,
      contrastText: theme.colors.textOnSecondaryColor,
    },
    error: {
      main: theme.colors.errorColor,
    },
  },
});
export default globalTheme;
