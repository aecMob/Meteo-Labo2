import { ref } from "vue";
import { Geolocation } from '@capacitor/geolocation';
import { Data } from '../interfaces/interface-meteo.model';
import { RootObject } from '../interfaces/meteo-model'

const urlDeBase = "https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly";
const cleAPI = "dc0e9e8d6c0a032550570443c7fba95d";
const urlDeBase2 ="https://api.openweathermap.org/data/2.5/weather?"

const weather = ref<RootObject>();


// https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly&lat=45.612499&lon=-73.707092&appid=dc0e9e8d6c0a032550570443c7fba95d&units=metric&lang=fr


async function avoirDonnees(endroit: string): Promise<void> {

    const latMtl = "45.508888";
    const lonMtl = "-73.561668";

    const latLvl = "45.57";
    const lonLvl = "-73.692";

    const latQc = "46.8123";
    const lonQc = "-71.2145";





    switch(endroit) {
        case 'Montréal' :     {const response1 = await fetch(`${urlDeBase2}&lat=${latMtl}&lon=${lonMtl}&appid=${cleAPI}&units=metric&lang=fr`);
                             weather.value = await response1.json();
                             
                             break;}
        case 'Laval' :       {const response2 = await fetch(`${urlDeBase2}&lat=${latLvl}&lon=${lonLvl}&appid=${cleAPI}&units=metric&lang=fr`);
                             weather.value = await response2.json();
                             
                             break;}
        case 'Québec' :       {const response3 = await fetch(`${urlDeBase2}&lat=${latQc}&lon=${lonQc}&appid=${cleAPI}&units=metric&lang=fr`);
                             weather.value = await response3.json();
                             
                             break;}
        case 'Ma Position' :     {const coordinates = await Geolocation.getCurrentPosition();
                             const response = await fetch(`${urlDeBase2}&lat=${coordinates.coords.latitude}&lon=${coordinates.coords.longitude}&appid=${cleAPI}&units=metric&lang=fr`);
                             weather.value = await response.json();
                             
                             break;}
    }
 
  }

  export function avoirMeteo() {
    return {
      weather,
      avoirDonnees,      
    }
  }