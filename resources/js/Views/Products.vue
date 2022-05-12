<template>
    <v-container productID="1">
        <v-row no-gutters>
            <v-card height="480" width="480">
<!--                <v-img height="480" width="480" src="/assets/products/shorea-wall-art-nails-square.png"></v-img>-->
                <vue-three-sixty
                    :amount=36
                    imagePath="https://scaleflex.cloudimg.io/width/600/q35/https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/demo/chair-360-36"
                    fileName="chair_{index}.jpg?v1"
                />

            </v-card>

            <v-col>
                <v-card-title>
                    <v-row no-gutters>
                       {{ product.name}}
                    </v-row>
                </v-card-title>

                <v-card-title class="mt-0 pt-0">
                    <v-row no-gutters >
                        <v-chip class="ml-2" color="primary">{{product.price}} LKR</v-chip>
                        <v-btn color="orange" icon><v-icon>mdi-heart</v-icon></v-btn>

                    </v-row>
                </v-card-title>



                <v-card-text class="text-justify">
                   {{product.description}}
                </v-card-text>

                <v-card-text>
                    <v-row no-gutters>
                        <v-col cols="2" class="mr-2">
                            <v-text-field value="1" outlined type="number" label="Quantity" min="1"></v-text-field>
                        </v-col>
                        <v-btn to="/cart" height="56" color="orange" outlined><v-icon>mdi-cart-plus</v-icon> Add to Cart</v-btn>
                    </v-row>
                </v-card-text>
            </v-col>
        </v-row>

            <v-toolbar-title class="mt-15 font-weight-bold " >You Might Also Like</v-toolbar-title>
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

    </v-container>
</template>

<script>
export default {
    data: () => ({
        cards: [
            { title: 'Leather Chair', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',  flex: 12 },
            { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
            { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
            { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },


        ],
        product:[],
    }),
    props:["productID"],
    created(){
        console.log(this.$route.params.id);
        axios.get('/api/product/GetSingleProduct/'+ this.$route.params.id)
            .then((response)=>{
                    console.log(response)
                    this.product = response.data;
                }

            );


    },

    name: "Products"
}
</script>

<style scoped>

</style>
