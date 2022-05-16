<template>
    <v-row>

        <v-col cols="12" sm="6">
            <v-toolbar-title class="font-weight-bold mt-3 ml-4">Dashboard</v-toolbar-title>
            <v-card class="mx-auto mt-6" max-width="344" outlined>
                <v-list-item three-line>
                    <v-list-item-content>

                        <v-list-item-title class="text-h5 mb-1">
                            Total Sales
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            Rs.{{ total }}
                        </v-list-item-subtitle>

                    </v-list-item-content>

                </v-list-item>


            </v-card>

        </v-col>
        <v-col cols="12" sm="6">
            <v-card class="mx-auto mt-16" max-width="344" outlined dense>
                <v-list-item three-line>
                    <v-list-item-content>

                        <v-list-item-title class="text-h5 mb-1">
                            Total Products
                        </v-list-item-title>
                        <v-list-item-subtitle>{{ products.length }}</v-list-item-subtitle>

                    </v-list-item-content>

                </v-list-item>


            </v-card>
        </v-col>
        <v-col>
            <v-toolbar-title class="ml-4 font-weight-bold ">Recent Orders</v-toolbar-title>
            <v-data-table :headers="headers" :items="orders" class="elevation-1 ml-4" dense>
            </v-data-table>
        </v-col>


        <v-col cols="12" sm="6" class="align-content-sm-center ml-9 mt-7">

            <graphs></graphs>


        </v-col>
    </v-row>
</template>

<script>
import Graphs from "./graphs";
import { authClient } from "../Plugins/client";
export default {
    components: { Graphs },
    dialog: false,
    data: () => ({
        headers: [
            {
                text: 'Order ID',
                align: 'start',
                sortable: false,
                value: 'id',
            },
            { text: 'Full Name', value: 'full_name' },
            { text: 'Total(LKR)', value: 'total' },
        ],
        orders: [],
        products: [],
    }),
    mounted() {
        this.getAllSales();
        this.getOrdersHistory();
        this.getAllProducts();
    },
    methods: {
        getOrdersHistory() {
            authClient.get('api/dashboard/getOrderHistory')
                .then((response) => {
                    this.orders = response.data
                })
        },
        getAllProducts() {
            axios.get('/api/product/all')
                .then((response) => {
                    this.products = response.data;
                }
                );
        },
        getAllSales() {
            this.$store.dispatch('sale/getAllItems')
        }
    },
    computed: {
        total() {
            return this.$store.state.sale.items.reduce((previousValue, currentValue) => previousValue + currentValue.total, 0)
        },
    },

    name: "Dashboard"
}
</script>

<style scoped>
</style>
