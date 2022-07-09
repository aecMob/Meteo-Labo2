<template>
  <ion-page>
    <ion-header :translucent="true" style="background-color:aqua;">
      <ion-toolbar>
        <ion-title>Ma météo</ion-title>
      </ion-toolbar>
    </ion-header>
   
    <ion-content>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Ma Météo</ion-title>
        </ion-toolbar>
         </ion-header>
     
     <ion-content style="padding:0%">
      <p style="text-align:center">Lundi, 10 juin 2022</p>
      <ion-button @click="openModal">Ville</ion-button>
    
    
    <ion-content>
      <p style="text-align:center">Montreal</p>
      <p style="text-align:center">Temp = 6deg Celsius</p>
   
    <ion-content text-center>
    <ion-img :src="require('../assets/img/01d.svg')" class="centerImg"></ion-img>
      </ion-content>
    </ion-content>
    </ion-content>
     </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { setupConfig } from '@ionic/core';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonButton, modalController } from '@ionic/vue';
import { defineComponent } from 'vue';

import Modal from "@/components/modal.vue";

export default defineComponent({
  name: 'HomePage',
  components: {
    IonImg,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
  },
  setup(){
    const openModal = async () => {
      const modal = await modalController.create({
        component: Modal, //Modal is name of the component to render inside ionic modal
      });
      return modal.present();
    };

    return { openModal };
  },
});


</script>

<style scoped>
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
  width: 20%;
  transform: translateX(200%);
}

#container a {
  text-decoration: none;
}
</style>
