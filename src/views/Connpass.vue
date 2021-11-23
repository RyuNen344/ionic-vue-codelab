<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-back-button slot="start" default-href="/home"></ion-back-button>
        <ion-title size="large">API Call</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-button @click="getEvents()">Default</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { Http, HttpOptions } from "@capacitor-community/http";
import {
  IonBackButton,
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Connpass",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButton,
  },
  methods: {
    async getEvents() {
      const options: HttpOptions = {
        url: "https://connpass.com/api/v1/event",
      };
      await Http.get(options)
        .then(function (data) {
          console.log(data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
});
</script>
