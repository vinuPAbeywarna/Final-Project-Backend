<template>
    <v-row>
        <v-col
            cols="12"
            xs="12"
            sm="12"
            md="12"
            lg="12"
            xl="12"
        >



            <v-toolbar-title class="font-weight-regular mt-5 ml-4">Order Details</v-toolbar-title>


            <v-row class="pa-4 pb-0">
                <v-col
                    cols="12"
                    xs="5"
                    sm="5"
                    md="5"
                    lg="5"
                    xl="5"
                >
                    <v-text-field
                        clearable
                        dense
                        label="Order ID "
                        x-small
                        outlined
                        class="ml-9">
                    </v-text-field>
                </v-col>

                <v-col
                    cols="12"
                    xs="2"
                    sm="2"
                    md="2"
                    lg="2"
                    xl="2"
                >
                    <v-btn class=" " dark color="light-blue darken-4"  solo dense  >
                        <v-icon small dark left>mdi-check-decagram</v-icon> Search
                    </v-btn>
                </v-col>
                <v-container>
                    <v-data-table
                        :headers="headers"
                        :items="users"
                        sort-by="calories"
                        class="elevation-1"
                        dense
                    >
                        <template v-slot:top>
                            <v-toolbar
                                flat
                            >

                                <v-spacer></v-spacer>
                                <v-dialog
                                    v-model="dialog"
                                    max-width="500px"
                                >

                                    <v-card>
                                        <v-card-title>

                                        </v-card-title>

                                        <v-card-text>
                                            <v-container>
                                                <v-row>
                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            v-model="editedItem.order_id"
                                                            label="Name"
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            v-model="editedItem.item_detail"
                                                            label="User Role"
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            v-model="editedItem.status"
                                                            label="Email"
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            v-model="editedItem.price"
                                                            label="Contact Details"
                                                        ></v-text-field>
                                                    </v-col>

                                                </v-row>
                                            </v-container>
                                        </v-card-text>


                                    </v-card>
                                </v-dialog>

                            </v-toolbar>
                        </template>


                    </v-data-table>
                </v-container>
            </v-row>


        </v-col>




    </v-row>
</template>

<script>
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
            { text: 'Item Detail', value: 'item_detail' },
            { text: 'Status', value: 'status' },
            { text: 'Price', value: 'price' },


        ],
        users: [],
        editedIndex: -1,
        editedItem: {
            order_id: '',
            item_detail: '',
            status: '',
            price: '',

        },
        defaultItem: {
            order_id: '',
            item_detail: '',
            status: '',
            price: '',
        },
    }),

    computed: {

    },

    watch: {

    },

    created () {
        this.initialize()
    },

    methods: {
        initialize () {
            this.users = [
                {
                    order_id: '#001',
                    item_detail: 'handloom Materials',
                    status: 'Shipped',
                    price: 'Rs.1000',

                },
                {
                    order_id: '#002',
                    item_detail: 'Portrait art',
                    status: 'Pending',
                    price: 'Rs.5000',
                },
                {
                    order_id: '#003',
                    item_detail: 'Wooden chair',
                    status: 'Confirm',
                    price: 'Rs.15000',
                },


            ]
        },


    },
    name: "Orders"
}
</script>

<style scoped>

</style>
