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
      <ion-text>{{ events.length }}</ion-text>
      <ion-list v-for="event in events" :key="event['event_id']">
        <ion-item>
          <ion-text>{{ event["title"] }}</ion-text>
          <ion-text>{{ event["event_url"] }}</ion-text>
        </ion-item>
      </ion-list>
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
  IonToolbar,
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
  data() {
    return {
      events: [],
    };
  },
  methods: {
    async getEvents() {
      const options: HttpOptions = {
        url: "https://connpass.com/api/v1/event",
        params: { count: "50" },
      };
      await Http.get(options)
        .then((response) => {
          console.log(response.data);
          this.events = JSON.parse(response.data as string)["events"];
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
});
</script>
