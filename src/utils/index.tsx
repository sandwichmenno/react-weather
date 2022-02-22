export const degreesToCompass = (degrees: number): string => {
    let val = Math.floor((degrees / 45));
    let arr = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    return arr[(val % 8)];
}
