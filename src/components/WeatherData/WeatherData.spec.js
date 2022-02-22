import React from 'react';
import { screen, render } from "@testing-library/react";
import WeatherData from "./WeatherData";

const props = { location: "Hilversum", degrees: "6.14", description: "zeer lichte bewolking" };

describe('WeatherData', () => {
    it('should render humidity', () => {
        render(<WeatherData {...props} />);

        const locationElement = screen.getByTestId("location");

        expect(locationElement).toHaveTextContent(`${props.location}`);
    });

    it('should render degrees', () => {
        render(<WeatherData {...props} />);

        const degreesElement = screen.getByTestId("degrees");

        expect(degreesElement).toHaveTextContent(`${props.degrees}°C`);
    });

    it('should render description', () => {
        render(<WeatherData {...props} />);

        const descriptionElement = screen.getByTestId("description");

        expect(descriptionElement).toHaveTextContent(`${props.description}`);
    });
});
