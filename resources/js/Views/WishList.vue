<template>
    <v-container>
        <span class="text-h5 font-weight-regular">Featured</span>
        <v-row no-gutters>
            <v-card v-for="wishlistItem in wishlistItems" :key="wishlistItem.id" hover ripple class="ma-2 rounded-lg"
                width="200" max-width="200">
                <v-img class="white--text align-end" height="160px" :src="wishlistItem.image">
                    <v-card-title
                        style="background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(4,4,4,1) 100%);">
                        <v-icon class="mr-1" color="white">mdi-seal</v-icon>{{ wishlistItem.name }}
                    </v-card-title>
                </v-img>

                <v-card-actions>
                    <v-btn v-on:click="addToCart(wishlistItem)" @click="removeItem(wishlistItem)" color="orange" icon>
                        <v-icon>mdi-cart</v-icon>
                    </v-btn>
                    <v-btn @click="removeItem(wishlistItem)" v-if="$store.state.User.role === 'admin'" color="orange"
                        icon>
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>
<!--                    <v-btn color="orange" icon>-->
<!--                        <v-icon>mdi-plus</v-icon>-->
<!--                    </v-btn>-->
                </v-card-actions>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
import {authClient} from "../Plugins/client";

export default {
    name: "WishList",
    mounted() {
        this.getWishListItems()
    },
    methods: {
        getWishListItems() {
            this.$store.dispatch('wishlist/getAllItems')
        },
        removeItem(item) {
            this.$store.dispatch('wishlist/removeItems', item)
        },
        addToCart(item) {
            authClient.post('/api/cart/add', {
                user_id: item.user_id,
                product_id: item.product_id,
                qty: 1,
            }).then(() => {
                this.$notify({
                    type: 'success',
                    title: 'Success',
                    text: 'Product added successfully!'
                })
            })
        },
    },
    computed: {
        wishlistItems() {
            return this.$store.state.wishlist.items
        }
    }
}
</script>
<style scoped>
</style>
