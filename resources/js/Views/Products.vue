<template>
    <v-container>
        <v-row no-gutters>
            <v-card height="480" width="480">
                <v-img :src="product.image" height="480px" width="480px"></v-img>
                <!--                <vue-three-sixty :amount=36-->
                <!--                    imagePath="https://scaleflex.cloudimg.io/width/600/q35/https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/demo/chair-360-36"-->
                <!--                    fileName="chair_{cart}.jpg?v1" />-->

            </v-card>

            <v-col>
                <v-card-title>
                    <v-row no-gutters>
                        {{ product.name }}
                    </v-row>
                </v-card-title>

                <v-card-title class="mt-0 pt-0">
                    <v-row no-gutters>
                        <v-chip class="ml-2">{{ product.category.Category_name }}</v-chip>
                        <v-chip class="ml-2" color="primary">{{ product.price }} LKR</v-chip>
                        <v-btn color="orange" icon>
                            <v-icon @click="removeItem(product)" v-if="isItemInWishList(product)">mdi-heart</v-icon>
                            <v-icon v-on:click="addToWishList(product.id)" v-else>mdi-heart-outline</v-icon>
                        </v-btn>
                    </v-row>
                </v-card-title>


                <v-card-text class="text-justify">
                    {{ product.description }}
                </v-card-text>

                <v-card-text>
                    <v-row no-gutters>
                        <v-col cols="2" class="mr-2">
                            <v-text-field value="1" outlined type="number" label="Quantity" v-model="qty" min="1">
                            </v-text-field>
                        </v-col>
                        <v-btn v-on:click="addToCart" height="56" color="orange" outlined>
                            <v-icon>mdi-cart-plus</v-icon>
                            Add to Cart
                        </v-btn>
                    </v-row>
                </v-card-text>
            </v-col>
        </v-row>

        <v-toolbar-title class="mt-15 font-weight-bold" v-if="showcaseProducts.length">You Might Also Like</v-toolbar-title>
        <v-card class="mx-auto" max-width="1200" v-if="showcaseProducts.length">
            <v-container fluid>
                <v-row dense>
                    <v-col v-for="item in showcaseProducts" :key="item.id" :cols="6" cols="12" sm="3">
                        <v-card>
                            <v-img :src="item.image" class="white--text align-end"
                                   gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                                <v-card-title v-text="item.name"></v-card-title>
                                <v-card-text class="font-weight-thin">{{ item.price }} LKR</v-card-text>
                            </v-img>

                            <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn color="orange" icon>
                                    <v-icon @click="removeItem(item)" v-if="isItemInWishList(item)">mdi-heart</v-icon>
                                    <v-icon v-on:click="addToWishList(item.id)" v-else>mdi-heart-outline</v-icon>
                                </v-btn>

                                <v-btn icon>
                                    <v-icon>mdi-bookmark</v-icon>
                                </v-btn>

                                <v-btn icon>
                                    <v-icon>mdi-share-variant</v-icon>
                                </v-btn>
                                <v-btn dense :to="`/products/${item.id}`" @click.native="$router.go()">
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
import {authClient} from "../Plugins/client";
export default {
    name: "Products",
    data: () => ({
        product: [],
        items: [],
        qty: 1,
    }),
    props: ["productID"],
    mounted() {
        this.getProduct();
        this.getAllProducts();
        this.getWishListItems();
    },
    methods: {
        getProduct() {
            axios.get('/api/product/GetSingleProduct/' + this.$route.params.id)
                .then((response) => {
                        this.product = response.data;
                    }
                );
        },
        getAllProducts() {
            axios.get('/api/product/all')
                .then((response) => {
                        this.items = response.data;
                    }
                );
        },
        addToCart() {
            authClient.post('/api/cart/add', {
                user_id: this.$store.state.User.id,
                product_id: this.$route.params.id,
                qty: this.qty,
            }).then(() => {
                this.$notify({
                    type: 'success',
                    title: 'Success',
                    text: 'Product added successfully!'
                })
            })
        },
        addToWishList(item) {
            authClient.post('/api/wishlist/add', {
                user_id: this.$store.state.User.id,
                product_id: item,
            }).then(() => {
                this.$store.dispatch('wishlist/getAllItems')
            })
        },
        getWishListItems() {
            this.$store.dispatch('wishlist/getAllItems')
        },
        isItemInWishList(product) {
            return this.wishlistItems.some(function (wishlist) {
                return wishlist.product_id === product.id;
            });
        },
        removeItem(item) {
            let wishListItem = this.wishlistItems.filter((wishListItem) => wishListItem.product_id === item.id)[0]
            this.$store.dispatch('wishlist/removeItems', wishListItem)
        },
    },
    computed: {
        wishlistItems() {
            return this.$store.state.wishlist.items
        },
        showcaseProducts() {
            let product_id = this.product.id
            let category_id = this.product.category_id
            let showcase_items = []
            this.items.forEach(function (item) {
                if (item.id !== product_id) {
                    if (item.category_id === category_id) {
                        showcase_items.push(item)
                    }
                }
            });
            return showcase_items
        }
    }
}
</script>

<style scoped>
</style>
