import { createTheme } from "@mui/material/styles";

//creates a new theme containing overrides for any defaults
//see https://mui.com/material-ui/customization/theming/#theme-configuration-variables for more
export const orangeThemeSettings = {
    palette: {
        primary: {
            main: '#d15d0a',
            contrastText: '#efefef'
        },
        secondary: {
            main: '#eab676',
            contrastText: '#ffffff'
        }
    },
    typography: {
        // see https://blog.logrocket.com/add-custom-fonts-mui/#google-fonts-cdn for custom fonts
        // need to add <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"> to index.html
        fontFamily: 'Nunito Sans',
        fontSize: 16,
        h1: {
            fontSize: 32
        }
    },
    shape: {
        borderRadius: 10
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
              a {
                color: #A663FF;
              }
            `,
        },        
        MuiButton: {
            defaultProps: {
                variant: 'contained'
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: 'filled'
            }
        }
    }    
};

export const orangeTheme = createTheme(orangeThemeSettings);