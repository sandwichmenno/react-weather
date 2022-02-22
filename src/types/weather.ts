export interface Weather {
    name: string;
    weather: Array<{
        description: string,
        icon: string
    }>
    main: {
        temp: number,
        humidity: number
    };
    wind: {
        speed: number,
        deg: number;
    };
}
