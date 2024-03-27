// CityPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import CityDetails from "../components/CityDetails";
import ThingsToDo from "../components/ThingsToDo";
import { placesData } from '../components/Places'; 

export default function CityPage() {
    const { id } = useParams();
    const city = placesData.find(place => place.id === parseInt(id));

    return (
        <>
            <CityDetails />

            <ThingsToDo thingsToDo={city.thingsToDo} />
        </>
    );
}
