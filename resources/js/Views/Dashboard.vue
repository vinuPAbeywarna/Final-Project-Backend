<template>
<v-row>

    <v-col cols="12" sm="6">
        <v-toolbar-title class="font-weight-bold mt-3 ml-4">Dashboard</v-toolbar-title>
        <v-card
            class="mx-auto mt-6"
            max-width="344"
            outlined

        >
            <v-list-item three-line>
                <v-list-item-content>

                    <v-list-item-title class="text-h5 mb-1">
                        Total Sales
                    </v-list-item-title>
                    <v-list-item-subtitle>200</v-list-item-subtitle>

                </v-list-item-content>

            </v-list-item>


        </v-card>

    </v-col>
    <v-col cols="12" sm="6">
        <v-card
            class="mx-auto mt-16"
            max-width="344"
            outlined
            dense

        >
            <v-list-item three-line>
                <v-list-item-content>

                    <v-list-item-title class="text-h5 mb-1">
                        Total Products
                    </v-list-item-title>
                    <v-list-item-subtitle>200</v-list-item-subtitle>

                </v-list-item-content>

            </v-list-item>


        </v-card>
    </v-col>
    <v-col >
        <v-toolbar-title class="ml-4 font-weight-bold " >Recent Orders</v-toolbar-title>
        <v-data-table
            :headers="Order_headers"
            :items="orders"
            class="elevation-1 ml-4"

        >
            <template v-slot:header.name="{ header }">
                {{ header.text.toUpperCase() }}
            </template>
        </v-data-table>
    </v-col>

    <v-col cols="12" sm="6" class="align-content-sm-center ml-9 mt-7">

            <graphs></graphs>


    </v-col>
</v-row>
</template>

<script>
import Graphs from "./graphs";
export default {
    components: {Graphs},
    data: () => ({
        Order_headers: [
            {
                text: 'Order_ID',
                align: 'start',
                value: 'id',
            },
            { text: 'Name', value: 'name' },
            { text: 'Seller name', value: 'seller_name' },
            { text: 'Buyer Name', value: 'buyer_name' },
            { text: 'Price', value: 'price' },
            { text: 'Quantity', value: 'quantity' },
        ],
        orders: [
            {
                id: 'Frozen Yogurt',
                name: 159,
                seller_name: 6.0,
                buyer_name: 24,
                price: 4.0,
                quantity: '1%',
            },
            {
                id: ' Yogurt',
                name: 159,
                seller_name: 6.0,
                buyer_name: 24,
                price: 4.0,
                quantity: '1%',
            },
            {
                id: 'Yogurt drink',
                name: 159,
                seller_name: 6.0,
                buyer_name: 24,
                price: 4.0,
                quantity: '1%',
            },



        ],
        Products_headers: [
            {
                text: 'Product_ID',
                align: 'start',
                value: 'id',
            },
            { text: 'Name', value: 'name' },
            { text: 'Seller name', value: 'seller_name' },
            { text: 'Price', value: 'price' },
            { text: 'Quantity', value: 'quantity' },
        ],
        products: [
            {
                id: 'F',
                name: 159,
                seller_name: 6.0,
                price: 4.0,
                quantity: '1%',
            },
            {
                id: ' Yog',
                name: 159,
                seller_name: 6.0,
                price: 4.0,
                quantity: '1%',
            },
            {
                id: 'urt',
                name: 159,
                seller_name: 6.0,
                price: 4.0,
                quantity: '1%',
            },



        ],
    }),

    name: "Dashboard"
}
</script>

<style scoped>

</style>
