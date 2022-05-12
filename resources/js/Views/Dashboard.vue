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
                    <v-list-item-subtitle></v-list-item-subtitle>

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
                    <v-list-item-subtitle >200</v-list-item-subtitle>

                </v-list-item-content>

            </v-list-item>


        </v-card>
    </v-col>
    <v-col >
        <v-toolbar-title class="ml-4 font-weight-bold " >Recent Orders</v-toolbar-title>
        <v-data-table
            :headers="headers"
            :items="orders"
            class="elevation-1 ml-4"
            dense

        >
            <template v-slot:header.name="{ items }">

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
import {authClient} from "../Plugins/client";
export default {
    components: {Graphs},
    dialog: false,
    data: () => ({
        headers: [
            {
                text: 'Order ID',
                align: 'start',
                sortable: false,
                value: 'order_id',
            },
            { text: 'Item Detail', value: 'item_name' },
            { text: 'Price', value: 'price' },

        ],
        orders: [],
    }),

    created () {
        console.log("test created");


    },
    mounted() {
       this.getOrdersHistory();
       this.DisplayAllOrder();
    },

    methods :{

        getOrdersHistory(){
            authClient.get('api/dashboard/history')
            .then((response)=>{
                console.log(response)
                this.orders=response.data.orders
            })
        },

        DisplayAllOrder(){
            authClient.get('api/dashboard/DisplayAllOrder')
                .then((response)=>{
                    console.log(response)
                    this.orders=response.data.orders
                })
        }
    },
    initialize () {

    },

    name: "Dashboard"
}
</script>

<style scoped>

</style>
