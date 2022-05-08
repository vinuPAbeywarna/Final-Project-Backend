<template>
    <v-container
        class="mt-4"
        fluid
        style="min-height: 434px"
    >
        <v-fade-transition mode="out-in">
            <v-row>


                <v-col cols="6">
                    <v-card class="mt-7 " to="/leather-item-shop">
                        <v-img
                            src="https://picsum.photos/350/165?random"
                            max-height="125"
                            class="grey darken-4"
                        ></v-img>
                        <v-card-title class="text-h6">
                            Leather Items
                        </v-card-title>
                    </v-card>
                </v-col>

<!--                <v-col cols="6">-->
<!--                    <v-card>-->
<!--                        <v-img-->
<!--                            src="https://picsum.photos/350/165?random"-->
<!--                            max-height="125"-->
<!--                            class="grey darken-4"-->
<!--                        ></v-img>-->
<!--                        <v-card-title class="text-h6">-->
<!--                            Art and craft material Shop-->
<!--                        </v-card-title>-->
<!--                    </v-card>-->
<!--                </v-col>-->

                <v-col cols="6">
                    <v-card class="mt-7" to="/art-and-craft-shop">
                        <v-img
                            src="https://picsum.photos/350/165?random"
                            max-height="125"
                            class="grey darken-4"
                        ></v-img>
                        <v-card-title class="text-h6">
                            Art and Crafts
                        </v-card-title>
                    </v-card>
                </v-col>
            </v-row>
        </v-fade-transition>
    </v-container>
<!--    <v-container>-->
<!--        <span class="text-h4">Shops</span>-->
<!--        <v-row no-gutters justify="space-between">-->
<!--            <v-card-->
<!--                v-for="i in 3"-->
<!--                :key="i"-->
<!--                hover-->
<!--                ripple-->
<!--                class="ma-2 rounded-lg"-->
<!--                width="48%"-->
<!--                to="/leather-item-shop"-->
<!--                max-width="48%">-->
<!--                <v-img-->
<!--                    class="white&#45;&#45;text align-end"-->
<!--                    height="160px"-->

<!--                    :src="'https://picsum.photos/400/20'+i"-->
<!--                >-->
<!--                    <v-card-title style="background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(4,4,4,1) 100%);">-->
<!--                        <v-icon class="mr-1" color="white">mdi-store</v-icon>Leather Item Shop-->
<!--                    </v-card-title>-->
<!--                </v-img>-->


<!--            </v-card>-->
<!--        </v-row>-->
<!--    </v-container>-->
</template>

<script>
export default {
    name: "Shops"
}
</script>

<style scoped>

</style>
