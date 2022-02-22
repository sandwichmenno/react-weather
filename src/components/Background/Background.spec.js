import React from 'react';
import { screen, render } from "@testing-library/react";
import Background from "./Background";

describe('WeatherData', () => {
    it('should set the correct background based on the weatherType', () => {
        render(<Background weatherType="02n">child</Background>);

        const backgroundElement = screen.getByTestId("background");

        expect(backgroundElement).toHaveStyle(`background: url(clear.jpg) no-repeat center`);
    });
});
