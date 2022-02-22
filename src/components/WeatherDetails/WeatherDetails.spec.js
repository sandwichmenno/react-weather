import React from 'react';
import WeatherDetails from './WeatherDetails';
import { screen, render } from "@testing-library/react";

const props = { humidity: 81, windSpeed: 5.44, windDirection: 300 };

describe('WeatherDetails', () => {
    it('should render humidity', () => {
        render(<WeatherDetails {...props} />);

        const humidityElement = screen.getByTestId("humidity");

        expect(humidityElement).toHaveTextContent(`${props.humidity}%`);
    });

    it('should render windSpeed', () => {
        render(<WeatherDetails {...props} />);

        const windSpeedElement = screen.getByTestId("windSpeed");

        expect(windSpeedElement).toHaveTextContent(`${props.windSpeed} km/u`);
    });

    it('should render windDirection', () => {
        render(<WeatherDetails {...props} />);

        const windDirectionElement = screen.getByTestId("windDirection");

        expect(windDirectionElement).toHaveTextContent(`${props.windDirection}° W`);
    });
});
