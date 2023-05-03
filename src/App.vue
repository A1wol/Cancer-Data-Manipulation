<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail>
        <v-list>
          <v-list-item>
            <v-img :src="logoUR"></v-img>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-table" title="Data Table" @click="router.push('/')"></v-list-item>
          <v-list-item prepend-icon="mdi-graph-outline" title="Graph" @click="router.push('/graph')"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>
<script setup>
import logoUR from "@/assets/logo-ur.jpg"
import router from "./router";
</script>
