export interface CoordinatesResponse {
    type: string;
    coords?: {
        latitude: number;
        longitude: number;
    }
    city?: string;
}
