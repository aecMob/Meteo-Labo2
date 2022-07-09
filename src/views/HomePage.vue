<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Ma météo</ion-title>
      </ion-toolbar>
    </ion-header>
   
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Ma Météo</ion-title>
        </ion-toolbar>
        

      </ion-header>
     <ion-content>
      <p style="text-align:center">Lundi, 10 juin 2022</p>
      <ion-button @click="openModal">Ville</ion-button>
    </ion-content>
      <div id="container">
        <strong>Ready to create an app?</strong>
        <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>
      
    </ion-content>
    
  </ion-page>
</template>

<script lang="ts">
import { setupConfig } from '@ionic/core';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, modalController } from '@ionic/vue';
import { defineComponent } from 'vue';

import Modal from "@/components/modal.vue";

export default defineComponent({
  name: 'HomePage',
  components: {
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

#container a {
  text-decoration: none;
}
</style>
