
// export function utilitaires() {
//     return {
//       creerDate,
//       formatterTemperature,
      
//     }
//   }


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
    
    //   export function formatterTemperature(valeur: number, format: 'C') {
    //     return `${Math.round(valeur)}° ${format}`;
    //   }
  
