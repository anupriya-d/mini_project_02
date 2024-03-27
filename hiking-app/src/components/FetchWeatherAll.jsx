import React from "react";
import WeatherData from "./WeatherData";
import { Card, CardContent, Typography, Grid, CardMedia } from "@mui/material";

export function FetchWeatherAll() {
  const cities = ["Queenstown", "Cromwell", "Alexandra", "Wanaka"];

  return (
    <div>
      <Typography variant="h5" gutterBottom></Typography>
      <Grid container spacing={2}>
        {cities.map((city, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Card variant="outlined">
              <CardContent>
                <CardMedia />
                <WeatherData city={city} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
