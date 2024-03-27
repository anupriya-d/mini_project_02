import { Routes,Route } from "react-router-dom";
import Homepage from "../pages/HomePage";
import DestinationsPage from "../pages/DestinationsPage";
import WeatherPage from "../pages/WeatherPage";
import CityPage from "../pages/CityPage";
import ContactPage from "../pages/ContactPage";
function AppRoutes(props) {

  return (

    <Routes>

      {/* index matches on default/home URL: / */}
      <Route index element={<Homepage {...props} />} />
      <Route path="/destinations" element={<DestinationsPage {...props} />} />

      <Route path="/city/:id" element={<CityPage {...props} />} />
      <Route path="/weather" element={<WeatherPage {...props} />} />
      <Route path="/contact" element={<ContactPage {...props} />} />
      {/* special route to handle if none of the above match */}


    </Routes>
  );
}
export default AppRoutes;