import React from "react";
import config from "../../config";

const Unit = ({ value, type }: { value: number, type: string }) => {
    /*Get the unit symbol based on the type and the imperial/metric system*/
    const unitType = () => {
        switch(type) {
            case "temperature":
                if(config.openweathermap.unit === 'imperial') {
                    return '°F';
                } else {
                    return '°C';
                }

            case "speed":
                if(config.openweathermap.unit === 'imperial') {
                    return 'mph';
                } else {
                    return 'm/s';
                }
        }
    }

    return (
        <>{Math.round(value)}{unitType()}</>
    )
}

export default Unit;
