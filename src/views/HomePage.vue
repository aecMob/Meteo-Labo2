<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="header-bgc">
        <ion-title>Ma météo</ion-title>
      </ion-toolbar>
    </ion-header>
   
   
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Ma Météfffo</ion-title>
        </ion-toolbar>
         </ion-header> -->
     
     <ion-content style="padding:0%">
      <p style="text-align:center">{{date}}</p>
      <ion-button @click="openModal">Ville</ion-button>
    
    
    <ion-content>
      <p style="text-align:center">{{ville}}</p>
      <p style="text-align:center">{{temperature}}</p>
   
    <ion-content id="reduce">
    <ion-img :src="require('../assets/img/01d.svg')" class="centerImg"></ion-img>
    </ion-content>
    <ion-content>
    <p style="text-align:center">{{condition}}</p>
    </ion-content>
    </ion-content>
      
      </ion-content>
    
   
      <ion-toolbar>
      <ion-footer>Par Naoufel Gharsalli & JF Lessard</ion-footer>
      </ion-toolbar>
    
    
     
     
  </ion-page>
</template>

<script lang="ts">
import { setupConfig } from '@ionic/core';
import { IonContent, IonHeader, IonPage, IonFooter, IonTitle, IonToolbar, IonImg, IonButton, modalController } from '@ionic/vue';
import { defineComponent } from 'vue';

import Modal from "@/components/modal.vue";
import { getOriginalVNodeTypeFromStub } from '@vue/test-utils/dist/stubs';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonImg,
    IonFooter,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
  },
  data() {
 return {
  date : dateSetting(),
  ville: "Laval",
  temperature: "6deg Celsius",
  condition : "Neige"
 }
 },
  setup(){
    
    const openModal = async () => {
      const modal = await modalController.create({
        component: Modal, 
      });
      return modal.present();
    };

    return { openModal };
  },
});

function dateSetting(){
  const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  const month = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"]
  
  const d = new Date();
  return days[d.getDay()] + ", le " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear();
}



</script>

<style scoped>

#reduce {
  height: 150px;
}

#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}
.headerbgc {
  --background:var(--ion-color-primary);
}
ion-toolbar{
  --background:var(--ion-color-primary);
}
#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}
.centerImg {
   text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  width: 35%;
  padding-bottom: 0%;
  transform: translateX(100%);
}

#container a {
  text-decoration: none;
}
</style>
