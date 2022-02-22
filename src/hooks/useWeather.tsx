import {useEffect, useState} from "react";
import {Weather} from "../types/weather";
import {CoordinatesResponse} from "../types/coordinates";
import config from "../config";

export const useWeather = (location: CoordinatesResponse | null): [boolean, Weather | null, string | null] => {
    const SUFFIX = `&appid=${config.openweathermap.app_id}&lang=${config.openweathermap.lang}&units=${config.openweathermap.unit}`;

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [result, setResult] = useState<Weather | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if(!location) return;

        const fetchData = async () : Promise<Weather> => {
            let PARAMS = "";

            if(location.type === "coordinates" && location.coords) {
                PARAMS = `lat=${location.coords.latitude}&lon=${location.coords.longitude}`;
            } else if(location.city) {
                PARAMS = `q=${location.city.trim()}`;
            }

            const url = `${config.openweathermap.base_url}?${PARAMS}${SUFFIX}`;

            const res = await fetch(url);
            return await res.json();
        };

        fetchData()
            .then(setResult)
            .then(() => setIsLoading(false))
            .catch(setError);
    }, [location]);

    return [isLoading, result, error];
};
