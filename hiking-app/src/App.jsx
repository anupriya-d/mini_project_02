
import './App.css'
import Banner from './components/Banner'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import Places from './components/Places'
import AppRoutes from './routes/AppRoutes'
import { ThemeProvider } from "@mui/material/styles";
import { purpleTheme } from './themes/purpleTheme'
import { useState } from 'react'
import ThemeSwitcher from './components/ThemeSwitcher'
import { orangeTheme } from './themes/orangeTheme'

function App() {
 
  const [currentTheme, setCurrentTheme] = useState(orangeTheme)
  return (
    <>
    <ThemeProvider theme={currentTheme}>
    <ResponsiveAppBar onChangeTheme={setCurrentTheme}/>
 
   <AppRoutes>
    <Banner/>

   <Places/>
   </AppRoutes>
   </ThemeProvider>
 
    </>
  )
}

export default App
