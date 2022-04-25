<template>
    <v-card
        class="mx-auto"
        max-width="1200"
    >


        <v-container fluid>
            <v-row dense>
                <v-col
                    v-for="card in cards"
                    :key="card.title "
                    :cols="card.flex"
                    cols="12" sm="3"
                >
                    <v-card>
                        <v-img
                            :src="card.src"
                            class="white--text align-end"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            height="200px"
                        >
                            <v-card-title v-text="card.title"></v-card-title>
                            <v-card-text class="font-weight-thin">Rs:15000</v-card-text>


                        </v-img>

                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn icon>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>

                            <v-btn icon>
                                <v-icon>mdi-bookmark</v-icon>
                            </v-btn>

                            <v-btn icon>
                                <v-icon>mdi-share-variant</v-icon>
                            </v-btn>
                            <v-btn dense to="/products">
                                View Item
                            </v-btn>

                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        cards: [
            { title: 'Leather Chair', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',  flex: 12 },
            { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
            { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
            { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
            { title: 'a', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
            { title: 'B', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
            { title: 'c', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
            { title: 'd', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },

        ],
    }),
    name: "leatherItemShop"
}
</script>

<style scoped>

</style>
