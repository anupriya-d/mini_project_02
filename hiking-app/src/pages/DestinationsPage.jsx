import Places from "../components/Places";
import SwipeableTextMobileStepper from "../components/SwipeableTextMobileStepper";
import Box from "@mui/material/Box";
export default function DestinationsPage() {
  return (
    <>
      <div className="Destinations">
        <h1>Destinations</h1>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SwipeableTextMobileStepper />
      </Box>
      <Places />
    </>
  );
}
