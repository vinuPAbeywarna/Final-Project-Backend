<template xmlns="http://www.w3.org/1999/html">
  <v-app>
      <v-app-bar app>
          <v-app-bar-nav-icon @click="drawer = !drawer" />
          <v-row justify="start" no-gutters>
              <h3 class="text-h5 font-weight-bold">
                  VinS Artisan Market
              </h3>
          </v-row>
          <v-btn v-if="$route.path !== '/auth'" @click="$store.commit('deAuth')" text>Sign Out</v-btn>

      </v-app-bar>

      <v-navigation-drawer
          v-if="$route.path !== '/auth' && $store.state.User !== null"
          v-model="drawer"
          app
          color="#1565C0"
          dark>
          <!--Menu Items -->
          <v-list-item two-line>

              <v-list-item-content>
                  <v-list-item-title class="text-h6">
                      VinS Artisan Market
                  </v-list-item-title>
                  <v-list-item-subtitle>
                      Logged In
                  </v-list-item-subtitle>
              </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list>
              <v-list-item to="/user-profile">
                  <v-list-item-icon>
                      <v-icon>mdi-account-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                      <v-list-item-title>Profile</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>


              <v-list-item to="/user-details">
                  <v-list-item-icon>
                      <v-icon>mdi-card-account-details</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                      <v-list-item-title>User Details</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>

              <v-list-item v-if="$store.state.User.role === 'admin'" to="/seller-account-approval">
                  <v-list-item-icon>
                      <v-icon>mdi-account-check-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                      <v-list-item-title>Seller account <br>
                          Approval</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>


              <v-list-item >
                  <v-list-item-icon>
                      <v-icon>mdi-cart-arrow-right</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                      <v-list-item-title>Shipping and Orders</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
              <v-list-item >
                  <v-list-item-icon>
                      <v-icon>mdi-cash</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                      <v-list-item-title>Payments Details</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
              <v-list-item >
                  <v-list-item-icon>
                      <v-icon>mdi-poll</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                      <v-list-item-title>Sales Analysing <br>Reports</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>


              <v-divider></v-divider>


          </v-list>
      </v-navigation-drawer>

      <v-main>
          <router-view/>
      </v-main>
  </v-app>
</template>

<script>
export default {
    name: "App",
    data:()=>({
        drawer:true,
    })
}
</script>

<style scoped>

</style>
