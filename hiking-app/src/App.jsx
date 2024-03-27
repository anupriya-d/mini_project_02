
import './App.css'
import Banner from './components/Banner'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import Places from './components/Places'
import AppRoutes from './routes/AppRoutes'


function App() {
 

  return (
    <>
   <ResponsiveAppBar/>
   <AppRoutes>
    <Banner/>

   <Places/>
   </AppRoutes>
 
    </>
  )
}

export default App
