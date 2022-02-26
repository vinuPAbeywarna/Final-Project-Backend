<template>
  <v-app>
      <v-app-bar app>
          <v-row justify="start" no-gutters>
              <h3 class="text-h5 font-weight-bold">
                  Vin's Artisan Market
              </h3>
          </v-row>
          <v-btn v-if="$route.path !== '/auth'" @click="$store.commit('deAuth')" text>Sign Out</v-btn>
      </v-app-bar>
      <v-main>
          <router-view/>
      </v-main>
  </v-app>
</template>

<script>
export default {
    name: "App"
}
</script>

<style scoped>

</style>
