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
            
        <ion-title id="date" class="centre">{{ x }}</ion-title><br>
            <ion-item id="dropdown">
                <ion-select class="stretch" placeholder="Choisissez un emdroit">
                    <ion-select-option value="montreal">Montréal</ion-select-option>
                    <ion-select-option value="laval">Laval</ion-select-option>
                    <ion-select-option value="quebec">Québec</ion-select-option>
                    <ion-select-option value="position">Ma position</ion-select-option>
                </ion-select>
                <br>
            </ion-item>
        <ion-card>
            <ion-card-header>
                <ion-card-subtitle id="ville" class="centre">Montréal</ion-card-subtitle>
                <ion-card-title id="degres" class="centre">22°C</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                 
                  <ion-icon class="centre" src="/assets/icon/01d.svg"></ion-icon><br>                  
                
                <ion-text id="description" class="centre">Ensoleillé</ion-text>
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
import { creerDate } from '@/utilitaires/convertisseurs';
import { computed, defineComponent } from 'vue'
import { 
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonContent,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonThumbnail,
  IonTitle, 
  IonToolbar,
  IonFooter
} from '@ionic/vue';

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
  setup () {
    const x = creerDate();
    return {
        x,
    }
  }
})
</script>

<style scoped>
ion-thumbnail {
  --size: 200px;
}
ion-icon {
    color: white;
    font-size: 200px;
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
    font-size: 30px;
}
#degres {
    font-size: 75px;
}
#description {
    font-size: 33px;
}
#footer {
    font-size: 14px;
}
</style>