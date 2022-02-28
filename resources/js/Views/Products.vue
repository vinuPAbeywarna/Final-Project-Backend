<template>
    <v-container>
        <v-row no-gutters>
            <v-card height="480" width="480">
<!--                <v-img height="480" width="480" src="/assets/products/shorea-wall-art-nails-square.png"></v-img>-->
                <vue-three-sixty
                :amount ="19"
                imagePath ="./flower360"
                filename="flower-(index).jpeg">

                </vue-three-sixty>

            </v-card>

            <v-col>
                <v-card-title>
                    <v-row no-gutters>
                        Honeycomb Wall Art / Photo Frame / Shelving
                    </v-row>
                </v-card-title>

                <v-card-title class="mt-0 pt-0">
                    <v-row no-gutters >
                        <v-chip class="ml-2" color="primary">5500 LKR</v-chip>
                        <v-btn color="orange" icon><v-icon>mdi-heart</v-icon></v-btn>
                        <v-btn color="orange" icon><v-icon>mdi-plus</v-icon></v-btn>
                    </v-row>
                </v-card-title>



                <v-card-text class="text-justify">
                    42 pieces of quality hardwood, beautifully crafted together make this stunning honeycomb wall art & shelving unit a unique addition to any interior.

                    Whether you choose to display those favourite travel photos, store your best make up sets or buy it as a gift for a friend, the honeycomb wall art will make your wall stand out above any other.
                </v-card-text>

                <v-card-text>
                    <v-row no-gutters>
                        <v-col cols="2" class="mr-2">
                            <v-text-field value="1" outlined type="number" label="Quantity" min="1"></v-text-field>
                        </v-col>
                        <v-btn height="56" color="orange" outlined><v-icon>mdi-cart-plus</v-icon> Add to Cart</v-btn>
                    </v-row>
                </v-card-text>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Products"
}
</script>

<style scoped>

</style>
