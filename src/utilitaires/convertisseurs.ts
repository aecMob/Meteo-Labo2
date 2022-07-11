    export function creerDate(){
        const d = new Date();
        const lesMois = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"];
        const jours = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
        const jour = jours[d.getDay()];
        const date = d.getDate();
        const mois = lesMois[d.getMonth()];
        const annee = d.getFullYear();
        return `${jour}, ${date} ${mois} ${annee}`;
      }
    
       export function arrondirTemperature(valeur: any) {
         return `${Math.round(valeur)}`;
       }
  
       export function avoirIcon(nomIcon: string) {
        return `src/assets/icons/${nomIcon}.svg`;
      }


      