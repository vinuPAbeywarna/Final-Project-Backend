<template>
    <v-container>
        <span class="text-h5 font-weight-regular">Featured</span>
        <v-row no-gutters justify="space-between">
            <v-card

                to="/products"
                v-for="i in 5"
                :key="i"
                hover
                ripple
                class="ma-2 rounded-lg"
                width="200"
                max-width="200">
                <v-img
                    class="white--text align-end"
                    height="160px"
                    :src="'./assets/products/'+i+'.jpg'"
                >
                    <v-card-title style="background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(4,4,4,1) 100%);">
                        <v-icon class="mr-1" color="white">mdi-seal</v-icon>Featured
                    </v-card-title>
                </v-img>

                <v-card-actions>
                    <v-btn color="orange" icon><v-icon>mdi-cart</v-icon></v-btn>
                    <v-btn color="orange" icon><v-icon>mdi-heart</v-icon></v-btn>
                    <v-btn color="orange" icon><v-icon>mdi-plus</v-icon></v-btn>
                </v-card-actions>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "WishList"
}
</script>

<style scoped>

</style>
