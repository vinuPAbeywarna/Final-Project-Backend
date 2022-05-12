<template>
    <v-container>
        <v-toolbar-title class="font-weight-regular mt-5 ml-4">Order Details</v-toolbar-title>
        <v-row no-gutters class="mb-4 mt-2">
           <v-card width="1000">
               <v-card-title>
                   <v-text-field dense v-model="OrdersSearch" outlined label="Search..."></v-text-field>
               </v-card-title>
               <v-card-text>
                   <v-data-table
                       :headers="headers"
                       :items="users"
                       sort-by="calories"
                       class="elevation-1"
                       dense
                   >

                       <template v-slot:item.status="{ item }">
                           <v-chip

                               :color="getColor(item.status)"
                               dark
                               dense
                               @click="updateOder(item.status,item.id)"

                           >
                               {{ item.status }}
                           </v-chip>
                       </template>

                   </v-data-table>
               </v-card-text>
           </v-card>

        </v-row>
    </v-container>

</template>

<script>
import {authClient} from "../Plugins/client";

export default {
    data: () => ({
        dialog: false,
        headers: [
            {
                text: 'Order ID',
                align: 'start',
                sortable: false,
                value: 'order_id',
            },
            { text: 'Item Detail', value: 'item_name' },
            { text: 'Price', value: 'price' },
            { text: 'Status', value: 'status' },


        ],
        OrdersSearch:'',
        users: [],
        editedIndex: -1,
        editedItem: {
            order_id: '',
            item_name: '',
            status: '',
            price: '',

        },
        defaultItem: {
            order_id: '',
            item_name: '',
            status: '',
            price: '',
        },
    }),

    computed: {

    },

    watch: {

    },

    created () {
        console.log("test oders")
        // this.initialize()
        this.getOrders();
    },

    mounted() {
        this.updateOder();
    },

    methods: {
        getOrders(){
            authClient.post('api/orders/getOrders')
            .then((response) => {
                console.log(response)
                this.users = response.data.users
                });
        },

        async updateOder(status,id) {

            if (status === 0){
                authClient.put('api/orders/updateOrderStatus/'+id.toString())
                    .then((response) => {
                        console.log(response)
                        this.users = response.data
                    });
            }


        },

        getColor (status) {
            if (status === 0) return 'green'

            else return 'orange'
        },


        initialize () {
            // this.users = [
            //     {
            //         order_id: '#001',
            //         item_detail: 'handloom Materials',
            //         status: 'Shipped',
            //         price: 'Rs.1000',
            //
            //     },
            //     {
            //         order_id: '#002',
            //         item_detail: 'Portrait art',
            //         status: 'Pending',
            //         price: 'Rs.5000',
            //     },
            //     {
            //         order_id: '#003',
            //         item_detail: 'Wooden chair',
            //         status: 'Confirm',
            //         price: 'Rs.15000',
            //     },
            //
            //
            // ]
        },


    },
    name: "Orders"
}
</script>

<style scoped>

</style>
