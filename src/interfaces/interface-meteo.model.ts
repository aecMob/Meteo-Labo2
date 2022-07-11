interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  
  interface CurrentWeather {
    feels_like: number;
    humidity: number;
    sunrise: number;
    sunset: number;
    temp: number;
    weather: Weather[];
    wind_speed: number;
  }
    
  export interface Data {
    //lameteo: Weather;
    current: CurrentWeather;
  }