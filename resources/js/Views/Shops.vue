<template>




        <v-container fluid>
            <h3>Categories</h3>
            <v-row dense>
                <v-col
                    v-for="card in category"
                    :key="card.Category_name "
                    :cols="card.flex"
                    cols="12" sm="3"
                >
                    <v-card>
                        <v-img
                            :src="card.image"
                            class="white--text align-end"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            height="200px"
                        >
                            <v-card-title v-text="card.Category_name"></v-card-title>



                        </v-img>

                        <v-card-actions>
                            <v-spacer></v-spacer>


                            <v-btn icon>
                                <v-icon>mdi-share-variant</v-icon>
                            </v-btn>
<!--                            <v-btn dense to="/products/{{ card.id}}">-->
<!--                                View Item-->
<!--                            </v-btn>-->
                            <router-link :to="`/products/${card.id}`">
                                <v-btn class="justify-center" color="blue white--text mt-5 mr-8">
                                   View Item
                                </v-btn>
                            </router-link>

                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

</template>

<script>
import {authClient} from "../Plugins/client";

export default {
    data: () => ({
        category:[]
    }),
    mounted() {
        this.getCategory()
    },
    methods:{
        getCategory() {
            authClient.get('api/category/GetCategories')
                .then((response) => {
                    console.log(response)
                    this.category = response.data
                });
        }
    },
    name: "Shops"
}
</script>

<style scoped>

</style>
