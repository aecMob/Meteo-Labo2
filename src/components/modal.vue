<!-- <template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Ville</ion-title>
    </ion-toolbar>
  </ion-header>
  
  <ion-content class="ion-padding">
    <ion-radio-group v-model="villa">
      <ion-list-header>
        <ion-label>
          Ville
        </ion-label>
      </ion-list-header>
<p>{{ville}}</p>
      <ion-item>
        <ion-label>Montreal</ion-label>
        <ion-radio value="Montreal"></ion-radio>
        
      </ion-item>
      
      <ion-item>
        <ion-label>Laval</ion-label>
        <ion-radio value="Laval"></ion-radio>
      </ion-item>
      <ion-item>
        <ion-label>Quebec</ion-label>
        <ion-radio value="Quebec"></ion-radio>
      </ion-item>
      <ion-item>
        <ion-label>Position Actuelle</ion-label>
        <ion-radio value="Position"></ion-radio>
      </ion-item>
      </ion-radio-group>
      <ion-button style="float: right;" @click="closeModal">Close</ion-button>
    <ion-button style="float: right;" @click="makeSelection">Ok</ion-button>

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
    <ion-button style="float: right;" @click="makeSelection">Ok</ion-button> -->
  <!-- </ion-content>
</template> -->
<!-- 
<script>
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonRadio,
  IonRadioGroup,
  modalController,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  components: { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonRadioGroup, IonRadio },
  
  
  
  data() {
  return {
    villeSelectionnee: "Laval",
    villa:{
      nom:""
    }
    
 }
 },
 
 methods: {
   closeModal()  {
    alert(this.villa);
    modalController.dismiss({
      ville:this.villa,
    });
//   }
}}
  // setup() {
  //   //var villa = "Lavalll";
    
  //   const closeModal = () => {
  //     alert(villa);
  //     modalController.dismiss();
  //   };

  //   return { closeModal };
    
  // },


});


</script> --> -->