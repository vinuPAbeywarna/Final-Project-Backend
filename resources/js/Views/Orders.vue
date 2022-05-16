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
                       :items="orders"
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
                               {{ getStatus(item.status) }}
                           </v-chip>
                       </template>
                       <template v-slot:item.is_paid="{ item }">
                           <v-chip

                               :color="getColor(item.is_paid)"
                               dark
                               dense

                           >
                               {{ getPaymentStatus(item.is_paid) }}
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
    name: "Orders",
    data: () => ({
        dialog: false,
        headers: [
            {
                text: 'Order ID',
                align: 'start',
                sortable: false,
                value: 'id',
            },
            { text: 'Full Name', value: 'full_name' },
            { text: 'Mobile No', value: 'contact_no' },
            { text: 'Total(LKR)', value: 'total' },
            { text: 'Payment Status', value: 'is_paid' },
            { text: 'Status', value: 'status' },
        ],
        OrdersSearch:'',
        orders: [],
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
    mounted() {
        this.getOrders();
    },
    methods: {
        getOrders(){
            authClient.post('api/orders/getOrders')
            .then((response) => {
                this.orders = response.data
            });
        },
        updateOder(status,id) {
            if (status === 0){
                authClient.put('api/orders/updateOrderStatus/'+id.toString())
                    .then((response) => {
                        console.log(response)
                        this.orders = response.data
                    });
            }
        },
        getColor (status) {
            return status === 0 ? 'orange' : 'green'
        },
        getStatus(status) {
            return status === 0 ? 'Pending' : 'Approved'
        },
        getPaymentStatus(status) {
            return status === 0 ? 'Unpaid' : 'Paid'
        }
    },
}
</script>

<style scoped>

</style>
