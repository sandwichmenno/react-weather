import React, {ReactElement} from "react";
import styled from '@emotion/styled/macro';
import Unit from "../Unit";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Temperature = styled.h1`
    width: 100%;
    color: #fff;
    font-size: 96px;
    font-weight: 600;
    margin: 0;
  
    @media (min-width: 576px) {
        font-size: 128px;
    }
`;

const Location = styled.h2`
    width: 100%;
    color: #fff;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 21px;
    margin: 0;
  
    @media (min-width: 576px) {
        font-size: 32px;
    }
`;

const Description = styled.span`
    color: #fff;
    font-weight: 600;
    font-size: 16px;
  
    @media (min-width: 576px) {
        font-size: 18px;
    }
`;

const WeatherData = ({ location, degrees, description }: { location: string; degrees: number; description: string; }): ReactElement => (
    <Wrapper data-testid="weather-data">
        <Location data-testid="location">{ location }</Location>
        <Temperature data-testid="degrees"><Unit value={degrees} type="temperature"/></Temperature>
        <Description data-testid="description">{description}</Description>
    </Wrapper>
)

export default WeatherData;
