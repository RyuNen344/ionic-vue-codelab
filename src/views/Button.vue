<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-back-button slot="start" default-href="/home"></ion-back-button>
        <ion-title size="large">Button List</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-button>Default</ion-button>

      <!-- Anchor -->
      <ion-button>Anchor</ion-button>

      <!-- Colors -->
      <ion-button color="primary">Primary</ion-button>
      <ion-button color="secondary">Secondary</ion-button>
      <ion-button color="tertiary">Tertiary</ion-button>
      <ion-button color="success">Success</ion-button>
      <ion-button color="warning">Warning</ion-button>
      <ion-button color="danger">Danger</ion-button>
      <ion-button color="light">Light</ion-button>
      <ion-button color="medium">Medium</ion-button>
      <ion-button color="dark">Dark</ion-button>

      <!-- Expand -->
      <ion-button expand="full">Full Button</ion-button>
      <ion-button expand="block">Block Button</ion-button>

      <!-- Round -->
      <ion-button shape="round">Round Button</ion-button>

      <!-- Fill -->
      <ion-button expand="full" fill="outline">Outline + Full</ion-button>
      <ion-button expand="block" fill="outline">Outline + Block</ion-button>
      <ion-button shape="round" fill="outline">Outline + Round</ion-button>

      <!-- Icons -->
      <ion-button><ion-icon :icon="star"></ion-icon>Left Icon</ion-button>

      <ion-button>Right Icon<ion-icon :icon="star"></ion-icon></ion-button>

      <ion-button><ion-icon :icon="star"></ion-icon></ion-button>

      <!-- Sizes -->
      <ion-button size="large">Large</ion-button>
      <ion-button>Default</ion-button>
      <ion-button size="small">Small</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { star } from "ionicons/icons";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button List",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButton,
    IonIcon,
  },
  setup() {
    return { star };
  },
});
</script>
