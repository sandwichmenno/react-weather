import React, {useState} from "react";
import Container from "../Container";
import {useWeather} from "../../hooks/useWeather";
import Alert from "../Alert";
import Background from "../Background";
import WeatherData from "../WeatherData";
import WeatherDetails from "../WeatherDetails";
import {useGeoLocation} from "../../hooks/useLocation";

const App = (): JSX.Element => {
    const [coordsIsLoading, location, geoError] = useGeoLocation();
    const [weatherIsLoading, weather, weatherError] = useWeather(location);

    if(weatherIsLoading || coordsIsLoading ||!location || !weather) return <div data-testid="spinner">loading...</div>;

    if(weatherError || geoError) return (
        <Container>
            <Alert>{weatherError || geoError}</Alert>
        </Container>
    )

    return (
        <Background weatherType={weather.weather[0].icon}>
            <Container>
                <WeatherData location={weather.name} degrees={weather.main.temp} description={weather.weather[0].description} />
                <WeatherDetails humidity={weather.main.humidity} windSpeed={weather.wind.speed} windDirection={weather.wind.deg} />
            </Container>
        </Background>
    );
}

export default App;
