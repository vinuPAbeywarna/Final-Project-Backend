<template>
    <v-container>
        <v-card>
            <v-data-table
                :items="cartItems"
                :headers="headers"
            >
                <template v-slot:item.action="{ item }" v-if="$store.state.User.role === 'admin'">
                    <v-icon
                        small
                        class="mr-2"
                        @click="removeItem(item)"
                        v-if="$store.state.User.role === 'admin'">mdi-delete</v-icon>
                </template>
            </v-data-table>

            <v-card-title>
                <v-row no-gutters align="center">

                    Total: {{ total }} LKR
                    <v-spacer/>
                    <v-btn class="ml-2" color="primary" to="/checkout-page">Proceed to Checkout</v-btn>
                </v-row>
            </v-card-title>
        </v-card>

    </v-container>
</template>

<script>
export default {
    name: "Cart",
    data() {
        return {
            headers: [
                { text:'Product', value:'name'},
                { text:'Price', value:'price'},
                { text:'Quantity', value:'quantity'},
                { text:'Action', value:'action'}
            ]
        }
    },
    mounted() {
        this.getCartItems()
    },
    methods: {
        getCartItems() {
            this.$store.dispatch('cart/getAllItems')
        },
        removeItem(item) {
            this.$store.dispatch('cart/removeItems', item)
        }
    },
    computed: {
        total: function () {
            let sum = 0;
            this.$store.state.cart.items.forEach(function (item) {
                sum += (parseFloat(item.price) * parseFloat(item.quantity));
            });
            return sum;
        },
        cartItems() {
            return this.$store.state.cart.items
        }
    }
}
</script>

<style scoped>

</style>
