import React, {ReactElement} from "react";
import styled from '@emotion/styled/macro';
import {degreesToCompass} from "../../utils";
import Unit from "../Unit";

const Wrapper = styled.div`
    width: 100%;
    height: 128px;
    display: flex;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 32px;
    border: 2px solid #fff;
    
    @media (min-width: 576px) {
        height: 210px;
        border-radius: 64px;
    }
`;

const Detail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Label = styled.span`
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    
    @media (min-width: 576px) {
        font-size: 18px;
    }
`;

const Value = styled.span`
    color: #fff;
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 6px;
    
    @media (min-width: 576px) {
        font-size: 42px;
    }
`;

const WeatherDetails = ({ humidity, windSpeed, windDirection }: { humidity: number; windSpeed: number; windDirection: number; }): ReactElement => (
    <Wrapper data-testid="weather-details">
        <Detail>
            <Value data-testid="humidity">{ humidity }%</Value>
            <Label>Humidity</Label>
        </Detail>

        <Detail>
            <Value data-testid="windSpeed"><Unit value={windSpeed} type="speed"/></Value>
            <Label>Wind</Label>
        </Detail>

        <Detail>
            <Value data-testid="windDirection">{ windDirection }° {degreesToCompass(windDirection)}</Value>
            <Label>Direction</Label>
        </Detail>
    </Wrapper>
)

export default WeatherDetails;
