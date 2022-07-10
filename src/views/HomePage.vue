<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="header-bgc">
        <ion-title>Ma météo</ion-title>
      </ion-toolbar>
    </ion-header>
   
   
     
     <ion-content style="padding:0%">
      <p style="text-align:center">{{date}}</p>
      
     <ion-item>
        <ion-label>Ville</ion-label>
        <ion-select placeholder="Aucun Choix" v-model="ville" @change="store">
          <ion-select-option value="Montreal">Montreal</ion-select-option>
          <ion-select-option value="Laval">Laval</ion-select-option>
          <ion-select-option value="Quebec">Quebec</ion-select-option>
          <ion-select-option value="Position Actuelle">Position Actuelle</ion-select-option>
          
        </ion-select>
      </ion-item>
    
    
      <p style="text-align:center">{{this.ville}}</p>
      <p style="text-align:center">{{temperature}}</p>
   
    <ion-content id="reduce">
    <ion-img :src="require('../assets/img/01d.svg')" class="centerImg"></ion-img>
    </ion-content>
    
    <p style="text-align:center">{{condition}}</p>
    </ion-content>
    
      <ion-toolbar>
      <ion-footer>Par Naoufel Gharsalli & JF Lessard</ion-footer>
      </ion-toolbar>
    
  </ion-page>
</template>

<script lang="ts">
import { setupConfig } from '@ionic/core';
import { IonContent, IonHeader, IonPage, IonFooter, IonTitle, IonToolbar, IonImg, IonSelect, IonSelectOption } from '@ionic/vue';
import { defineComponent } from 'vue';

import Modal from "@/components/modal.vue";
import { getOriginalVNodeTypeFromStub } from '@vue/test-utils/dist/stubs';
import { tsConstructorType, tSIntersectionType } from '@babel/types';
import { stringifyQuery } from 'vue-router';
import { ref } from 'vue';

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
    IonSelect,
    IonSelectOption
   
  },
data() {
 return {
  date : dateSetting(),
  ville : "Laval",
  temperature: "6deg Celsius",
  condition : "Neige"
 }
 },
methods:{
  store(event:any) {
    const name = event.detail.value;
    console.log("detail " + name);
    this.ville = name;
  }
 
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
