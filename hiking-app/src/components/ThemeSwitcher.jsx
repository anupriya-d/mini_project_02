import { FormControlLabel, Switch, createTheme, useTheme } from "@mui/material";
import { purpleThemeSettings } from "../themes/purpleTheme";
import { orangeThemeSettings } from "../themes/orangeTheme";

// component to switch to dark mode of a MUI theme
function ThemeSwitcher({onChangeTheme}) {
    const theme = useTheme();
    const darkMode = theme.palette.mode == 'dark'; // check MUI theme mode

    const handleThemeChange = () => {
        // if we're using the MUI theming, dark mode should activate the MUI dark mode in the current theme
        if (theme) {
            let newThemeSettings = {...orangeThemeSettings}; // clone the current settings

            if (theme.palette.primary.main == purpleThemeSettings.palette.primary.main) {
                newThemeSettings = {...purpleThemeSettings}; // switch to purple if activated
            } 

            newThemeSettings.palette.mode = darkMode ? 'light' : 'dark'; // override the mode in cloned settings

            const newTheme = createTheme(newThemeSettings); // create new theme with same settings but new mode
            onChangeTheme(newTheme) // update new theme in state         
        }
    }

    return (
        <FormControlLabel control={<Switch checked={darkMode} onChange={handleThemeChange}/>} label="Dark Mode?" />
    )
}

export default ThemeSwitcher