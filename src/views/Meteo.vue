<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar id="tete">
        <ion-title>Ma Météo</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true" >
    <ion-grid>
        <ion-row justify-content-center>
        
        <ion-col><br>
            
        <ion-title id="date" class="centre">{{ dateDuJour }}</ion-title><br>
            <ion-item id="dropdown">
                <ion-select @ionChange="update($event)" class="stretch" placeholder="Choisissez un emdroit" v-model="ville">
                    <ion-select-option value="Montréal">Montréal</ion-select-option>
                    <ion-select-option value="Laval">Laval</ion-select-option>
                    <ion-select-option value="Québec">Québec</ion-select-option>
                    <ion-select-option value="Ma Position">Ma position</ion-select-option>
                </ion-select>
                <br>
            </ion-item>
        <ion-card>
            <ion-card-header>
                <ion-card-subtitle id="ville" class="centre">{{ weather?.name }}, {{ weather?.sys.country }}</ion-card-subtitle>
                <ion-card-title id="degres" class="centre">{{arrondirTemperature(weather?.main.temp)}}°C</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                 
                  <ion-icon :src="monIcon" class="centre"></ion-icon><br>                  
                
                <ion-text id="description" class="centre">{{weather?.weather[0].description }}</ion-text>
           </ion-card-content>        
        </ion-card>
        </ion-col>
        
        </ion-row>
        </ion-grid>
    </ion-content>
     <ion-footer collapse="fade">
        <ion-toolbar id="pied">
            
                <ion-title id="footer">© Par N. Gharsalli & J-F. Lessard</ion-title>
                
            
        </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { creerDate, arrondirTemperature, avoirIcon } from '@/utilitaires/convertisseurs';
import { avoirMeteo } from '@/services/service-meteo';
import { defineComponent } from 'vue'
import { 
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonContent,  
  IonItem,
  IonSelect,
  IonSelectOption,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,  
  IonTitle, 
  IonToolbar,
  IonFooter,
onIonViewDidEnter,
onIonViewWillEnter
} from '@ionic/vue';
import { RootObject } from '@/interfaces/meteo-model';

export default defineComponent({
  name:'MeteoPage',  
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonHeader,
    IonContent,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,    
    IonTitle, 
    IonToolbar,
    IonFooter
  },
  data() {
    return { ville: "Montréal",
             monIcon: ""                   
    };
  },
methods: {
    update(event: { target: { value: any; }; }){
        console.log(" le binding choix" + event.target.value, this.ville, this.monIcon);
        const { weather, avoirDonnees} = avoirMeteo();
        avoirDonnees(this.ville);
        this.monIcon = "/assets/icon/" + weather.value?.weather[0].icon + ".svg";
	console.log(" le binding choix" + event.target.value, this.ville, this.monIcon);
	}
},
  setup () {
    
    const dateDuJour = creerDate();
    const { weather, avoirDonnees} = avoirMeteo();    
     avoirDonnees("Montréal");
    var monIcon:any = "";


      return {
        dateDuJour,
        weather,
        arrondirTemperature,
        avoirIcon,        
  }}
})
</script>

<style scoped>
ion-thumbnail {
  --size: 180px;
}
ion-icon {
    color: white;
    font-size: 170px;
}
ion-content {
    --background: url(../assets/imgs/jour.jpeg) 0 0/100% 100% no-repeat;
}
ion-card {
    --background: transparent;
}
#tete {
    --background: darkblue;
    --border-color: cyan;
    --border-style: none none solid none;
    --border-width: 3px;
    --color: cyan;
}
.blanc {
    color: white;
}
.centre {
    text-align: center;
    color: white;
      display: block;
  margin-left: auto;
  margin-right: auto;
}
#dropdown {
 width: 200px;
 display: block;
  margin-left: auto;
  margin-right: auto;
  background: transparent;
}
.stretch {
    width: 200px;
}
#pied {
    --background: cyan;
    --border-color: darkblue;
    --border-style: solid none none none;
    --border-width: 3px;
    --color: darkblue;
}
#date {
    font-size: 14px;
}
#ville {
    font-size: 28px;
}
#degres {
    font-size: 60px;
}
#description {
    font-size: 30px;
}
#footer {
    font-size: 14px;
}
</style>