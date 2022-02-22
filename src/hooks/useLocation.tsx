import {useEffect, useState} from "react";
import { CoordinatesResponse } from "../types/coordinates";

export const useGeoLocation = (): [boolean, CoordinatesResponse | null, string | null] => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [result, setResult] = useState<CoordinatesResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported.');
            return;
        }

        const permissionGranted = (position: GeolocationPosition) => {
            const { latitude, longitude } = position.coords;

            setResult({
                type: "coordinates",
                coords: {
                    latitude,
                    longitude
                }
            });
        };

        /*If user denies permission, then return an error*/
        const permissionDenied = (error: GeolocationPositionError) => {
            setResult({
                type: 'city',
                city: 'Amsterdam'
            });
        };

        /*show the permission dialog*/
        navigator.geolocation.getCurrentPosition(permissionGranted, permissionDenied);
    }, []);

    //Return the location state
    return [isLoading, result, error];
};
