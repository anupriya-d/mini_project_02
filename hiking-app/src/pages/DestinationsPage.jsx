import Places from "../components/Places";
import SwipeableTextMobileStepper from "../components/SwipeableTextMobileStepper";

export default function DestinationsPage() {
  return (
    <>
      <div className="Destinations">
        <h1>Destinations</h1>
      </div>
      <SwipeableTextMobileStepper />
      <Places />
    </>
  );
}
