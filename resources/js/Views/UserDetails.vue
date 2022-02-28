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



                        <v-toolbar-title class="font-weight-regular mt-5 ml-4">User Details</v-toolbar-title>


                        <v-row class="pa-4 pb-0">
                            <v-col
                                cols="12"
                                xs="5"
                                sm="5"
                                md="5"
                                lg="5"
                                xl="5"
                            >
                                <v-combobox
                                    clearable
                                    :items="UserRole"
                                    dense
                                    label="User Tpye "
                                    x-small
                                    outlined
                                class="ml-9">
                                </v-combobox>
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
                                    <v-icon small dark left>mdi-check-decagram</v-icon> Filter
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
                                                        v-if="$store.state.User.role === 'admin'"
                                                    >
                                                        New User
                                                    </v-btn>
                                                </template>
                                                <v-card>
                                                    <v-card-title>
                                                        <span class="text-h5">{{ formTitle }}</span>
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
                                                                        v-model="editedItem.name"
                                                                        label="Name"
                                                                    ></v-text-field>
                                                                </v-col>
                                                                <v-col
                                                                    cols="12"
                                                                    sm="6"
                                                                    md="4"
                                                                >
                                                                    <v-text-field
                                                                        v-model="editedItem.role"
                                                                        label="User Role"
                                                                    ></v-text-field>
                                                                </v-col>
                                                                <v-col
                                                                    cols="12"
                                                                    sm="6"
                                                                    md="4"
                                                                >
                                                                    <v-text-field
                                                                        v-model="editedItem.email"
                                                                        label="Email"
                                                                    ></v-text-field>
                                                                </v-col>
                                                                <v-col
                                                                    cols="12"
                                                                    sm="6"
                                                                    md="4"
                                                                >
                                                                    <v-text-field
                                                                        v-model="editedItem.contact"
                                                                        label="Contact Details"
                                                                    ></v-text-field>
                                                                </v-col>
                                                                <v-col
                                                                    cols="12"
                                                                    sm="6"
                                                                    md="4"
                                                                >
                                                                    <v-text-field
                                                                        v-model="editedItem.city"
                                                                        label="City"
                                                                    ></v-text-field>
                                                                </v-col>
                                                            </v-row>
                                                        </v-container>
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
export default {
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                text: 'Name',
                align: 'start',
                sortable: false,
                value: 'name',
            },
            { text: 'User Role', value: 'role' },
            { text: 'Email', value: 'email' },
            { text: 'Contact Number', value: 'contact' },
            { text: 'City', value: 'city' },
            { text: 'Actions', value: 'actions', sortable: false,  },
        ],
        users: [],
        UserRole:[
            'Admin',
            'Seller',
            'Customer',

        ],
        editedIndex: -1,
        editedItem: {
            name: '',
            role: '',
            email: '',
            contact: '',
            city: '',
        },
        defaultItem: {
            name: '',
            role: '',
            email: '',
            contact: '',
            city: '',
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
        this.initialize()
    },

    methods: {
        initialize () {
            this.users = [
                {
                    name: 'Vinuri Prabodhya',
                    role: 'Admin',
                    email: 'vinuri@gmail.com',
                    contact: '0714523963',
                    city: 'Colombo',
                },
                {
                    name: 'Ravindi Samarawickrama',
                    role: 'Customer',
                    email: 'ravi@gmail.com',
                    contact: '0775625369',
                    city: 'Colombo',
                },
                {
                    name: 'John De Silva',
                    role: 'Seller',
                    email: 'john@gmail.com',
                    contact: '0774585963',
                    city: 'Colombo',
                },


            ]
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

    name: "UserDetails"

}
</script>

<style scoped>

</style>
