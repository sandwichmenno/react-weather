import React from 'react';
import App from './App';
import { screen, render } from "@testing-library/react";

const mockWeatherData = {"coord":{"lon":5.175,"lat":52.217},"weather":[{"id":801,"main":"Clouds","description":"zeer lichte bewolking","icon":"02n"}],"base":"stations","main":{"temp":6.14,"feels_like":2.57,"temp_min":5.45,"temp_max":7.16,"pressure":1017,"humidity":81},"visibility":10000,"wind":{"speed":5.44,"deg":300,"gust":11.9},"clouds":{"all":19},"dt":1645486929,"sys":{"type":2,"id":265546,"country":"NL","sunrise":1645512067,"sunset":1645549491},"timezone":3600,"id":2754063,"name":"Hilversum","cod":200};
const mockGeoLocation = {
    coords: {latitude: 52.2162612, longitude: 5.1726983},
    type: "coordinates"
};

let mockIsLoading = false;
let mockError = null;

jest.mock('../../hooks/useLocation', () => ({
    useGeoLocation: () => [
        mockIsLoading,
        mockGeoLocation,
        mockError
    ]
}))

jest.mock('../../hooks/useWeather', () => ({
    useWeather: () => [
        mockIsLoading,
        mockWeatherData,
        mockError
    ]
}))

describe('App', () => {
    it('should render loading screen', () => {
        mockIsLoading = true;
        mockError = null;
        render(<App />);

        const spinner = screen.getByTestId("spinner");

        expect(spinner).toBeInTheDocument();
    });


    it('should show error alert', () => {
        mockIsLoading = false;
        mockError = "something went wrong";

        render(<App />);

        const alert = screen.getByText("something went wrong");

        expect(alert).toBeInTheDocument();
    });

    it('should render weather information', () => {
        mockIsLoading = false;
        mockError = null;
        render(<App />);

        const dataElement = screen.getByTestId("weather-data");
        const detailsElement = screen.getByTestId("weather-details");

        expect(dataElement).toBeInTheDocument();
        expect(detailsElement).toBeInTheDocument();
    });
});
