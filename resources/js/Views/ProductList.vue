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



            <v-toolbar-title class="font-weight-regular mt-5 ml-4">All Products</v-toolbar-title>


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
                        label="Product ID "
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
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            color="light-blue darken-4"
                                            dark
                                            class="mb-2"
                                            v-bind="attrs"
                                            v-on="on"
                                            to="/add-new-products"
                                            v-if="$store.state.User.role === 'admin' || $store.state.User.role ==='seller'"
                                        >
                                            Add New Product
                                        </v-btn>
                                    </template>
                                    <v-card>
                                        <v-card-title>
                                            <span class="text-h5">{{ formTitle }}</span>
                                        </v-card-title>

                                        <v-card-text>
<!--                                            <v-container>-->
<!--                                                <v-row>-->
<!--                                                    <v-col-->
<!--                                                        cols="12"-->
<!--                                                        sm="6"-->
<!--                                                        md="4"-->
<!--                                                    >-->
<!--                                                        <v-text-field-->
<!--                                                            v-model="editedItem.name"-->
<!--                                                            label="Name"-->
<!--                                                        ></v-text-field>-->
<!--                                                    </v-col>-->
<!--                                                    <v-col-->
<!--                                                        cols="12"-->
<!--                                                        sm="6"-->
<!--                                                        md="4"-->
<!--                                                    >-->
<!--&lt;!&ndash;                                                        <v-text-field&ndash;&gt;-->
<!--&lt;!&ndash;                                                            v-model="editedItem.role"&ndash;&gt;-->
<!--&lt;!&ndash;                                                            label="User Role"&ndash;&gt;-->
<!--&lt;!&ndash;                                                        ></v-text-field>&ndash;&gt;-->
<!--                                                    </v-col>-->
<!--                                                    <v-col-->
<!--                                                        cols="12"-->
<!--                                                        sm="6"-->
<!--                                                        md="4"-->
<!--                                                    >-->
<!--                                                        <v-text-field-->
<!--                                                            v-model="editedItem.email"-->
<!--                                                            label="Email"-->
<!--                                                        ></v-text-field>-->
<!--                                                    </v-col>-->
<!--                                                    <v-col-->
<!--                                                        cols="12"-->
<!--                                                        sm="6"-->
<!--                                                        md="4"-->
<!--                                                    >-->
<!--                                                        <v-text-field-->
<!--                                                            v-model="editedItem.contact"-->
<!--                                                            label="Contact Details"-->
<!--                                                        ></v-text-field>-->
<!--                                                    </v-col>-->
<!--                                                    <v-col-->
<!--                                                        cols="12"-->
<!--                                                        sm="6"-->
<!--                                                        md="4"-->
<!--                                                    >-->
<!--                                                        <v-text-field-->
<!--                                                            v-model="editedItem.city"-->
<!--                                                            label="City"-->
<!--                                                        ></v-text-field>-->
<!--                                                    </v-col>-->
<!--                                                </v-row>-->
<!--                                            </v-container>-->
                                        </v-card-text>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                color="blue darken-1"
                                                text
                                                @click="close"
                                            >
                                                Cancel
                                            </v-btn>
                                            <v-btn
                                                color="blue darken-1"
                                                text
                                                @click="save"
                                            >
                                                Save
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                                <v-dialog v-model="dialogDelete" max-width="500px">
                                    <v-card>
                                        <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-toolbar>
                        </template>
                        <template v-slot:item.actions="{ item }" v-if="$store.state.User.role === 'admin'">
                            <v-icon
                                small
                                class="mr-2"
                                @click="editItem(item)"
                                v-if="$store.state.User.role === 'admin'"
                            >
                                mdi-pencil
                            </v-icon>
                            <v-icon
                                small
                                @click="deleteItem(item)"
                                v-if="$store.state.User.role === 'admin'"
                            >
                                mdi-delete
                            </v-icon>
                        </template>
                        <template v-slot:no-data>
                            <v-btn
                                color="primary"
                                @click="initialize"
                            >
                                Reset
                            </v-btn>
                        </template>
                    </v-data-table>
                </v-container>
            </v-row>


        </v-col>




    </v-row>
</template>

<script>
import {authClient} from "../Plugins/client";

export default {
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                text: 'Image',
                align: 'start',
                sortable: false,
                value: 'image',
            },
            { text: 'Product Id', value: 'id' },
            { text: 'Category', value: 'category' },
            { text: 'Price', value: 'price' },
            { text: 'Stock', value: 'stock' },
            { text: 'Actions', value: 'actions', sortable: false,  },
        ],
        users: [],

        editedIndex: -1,
        editedItem: {
            image: '',
            id: '',
            category: '',
            price: '',
            stock: '',

        },
        defaultItem: {
            image: '',
            id: '',
            category: '',
            price: '',
            stock: '',

        },
    }),

    computed: {
        formTitle () {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    watch: {
        dialog (val) {
            val || this.close()
        },
        dialogDelete (val) {
            val || this.closeDelete()
        },
    },

    created () {
        // this.initialize()
        this.GetProduct();
    },

    methods: {
        GetProduct(){
            authClient.get('api/product-list/GetProduct')
            .then((response)=>{
                console.log(response)
                this.users = response.data.users
                }

            );

        },
        initialize () {
            // this.users = [
            //     {
            //         image: 'Vinuri Prabodhya',
            //         product_id: 'Admin',
            //         category: 'vinuri@gmail.com',
            //         price: '0714523963',
            //         stocks: 'Colombo',
            //         sales:'100',
            //     },
            //     {
            //         image: 'Vinuri Prabodhya',
            //         product_id: 'Admin',
            //         category: 'vinuri@gmail.com',
            //         price: '0714523963',
            //         stocks: 'Colombo',
            //         sales:'100',
            //     },
            //     {
            //         image: 'Vinuri Prabodhya',
            //         product_id: 'Admin',
            //         category: 'vinuri@gmail.com',
            //         price: '0714523963',
            //         stocks: 'Colombo',
            //         sales:'100',
            //     },
            //
            //
            // ]
        },

        editItem (item) {
            this.editedIndex = this.users.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem (item) {
            this.editedIndex = this.users.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm () {
            this.users.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close () {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete () {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save () {
            if (this.editedIndex > -1) {
                Object.assign(this.users[this.editedIndex], this.editedItem)
            } else {
                this.users.push(this.editedItem)
            }
            this.close()
        },
    },

    name: "ProductList"
}
</script>

<style scoped>

</style>
