import React, {ReactElement, ReactNode} from "react";
import styled from '@emotion/styled/macro';

import clearDay from "../../assets/weather/day/clear.jpg";
import rainDay from "../../assets/weather/day/rain.jpg";
import snowDay from "../../assets/weather/day/snow.jpg";
import thunderstormDay from "../../assets/weather/day/thunderstorm.jpg";

import clearNight from "../../assets/weather/night/clear.jpg";
import rainNight from "../../assets/weather/night/rain.jpg";
import snowNight from "../../assets/weather/night/snow.jpg";
import thunderstormNight from "../../assets/weather/night/thunderstorm.jpg";

const weatherTypes = {
    "01d": clearDay,
    "02d": clearDay,
    "03d": clearDay,
    "04d": clearDay,
    "09d": rainDay,
    "10d": rainDay,
    "11d": thunderstormDay,
    "13d": snowDay,
    "50d": snowDay,


    "01n": clearNight,
    "02n": clearNight,
    "03n": clearNight,
    "04n": clearNight,
    "09n": rainNight,
    "10n": rainNight,
    "11n": thunderstormNight,
    "13n": snowNight,
    "50n": snowNight,
};

const BackgroundWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${(props: { weatherType: string }) => `url(${weatherTypes[props.weatherType as keyof typeof weatherTypes]}) no-repeat center`};
    background-size: cover;
    overflow: hidden;
`;

const Background = ({ weatherType, children }: { weatherType: string; children: ReactNode }): ReactElement => (
    <BackgroundWrapper weatherType={weatherType} data-testid="background">
        { children }
    </BackgroundWrapper>
)

export default Background;
