export interface WeatherDetails {
    temp: string;
    weather: Weather[];
    wind: Wind;
    temp_min: string;
    temp_max: string;
}

export interface Wind {
    speed: string;
    deg: string;
}

export interface Weather {
    "id": string; 
    "main": string;
    "description": string;
    "icon": string
}