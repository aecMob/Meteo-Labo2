<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Ville</ion-title>
    </ion-toolbar>
  </ion-header>
  
  <ion-content class="ion-padding">
    <ion-item>
            <ion-label class="ion-text-wrap" for="ville">Montreal</ion-label>
            <ion-checkbox id="ville" @ionChange="onTermsChanged" :checked="canDismiss"></ion-checkbox>
    </ion-item>
    <ion-item>
            <ion-label class="ion-text-wrap" for="ville">Laval</ion-label>
            <ion-checkbox id="ville" @ionChange="onTermsChanged" :checked="canDismiss"></ion-checkbox>
    </ion-item>
    <ion-item>
            <ion-label class="ion-text-wrap" for="ville">Quebec</ion-label>
            <ion-checkbox id="ville" @ionChange="onTermsChanged" :checked="canDismiss"></ion-checkbox>
    </ion-item>
    <ion-item>
            <ion-label class="ion-text-wrap" for="ville">Position Actuelle</ion-label>
            <ion-checkbox id="ville" @ionChange="onTermsChanged" :checked="canDismiss"></ion-checkbox>
    </ion-item>
   
    <ion-button style="float: right;" @click="closeModal">Close</ion-button>
    <ion-button style="float: right;" @click="makeSelection">Ok</ion-button>
  </ion-content>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  modalController,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  components: { IonContent, IonHeader, IonTitle, IonToolbar, IonButton },
  setup() {
    const closeModal = () => {
      modalController.dismiss();
    };

    return { closeModal };
  },
});
</script>