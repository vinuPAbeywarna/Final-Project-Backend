<template>

    <v-container>
        <h3>Users Details</h3>

        <v-row no-gutters class="mb-4 mt-3">

            <v-spacer/>
            <v-btn to="/add-new-users" color="primary">Add New User</v-btn>
        </v-row>

        <v-card>
            <v-card-title>
                <v-text-field dense v-model="userSearch" outlined label="Search..."></v-text-field>
            </v-card-title>

            <v-card-text>
                <v-data-table
                    :headers="headers"
                    :items="users"
                    :search="userSearch"
                    sort-by="calories"
                >
                    <template v-slot:item.actions="{ item }" v-if="$store.state.User.role === 'admin'">
                        <v-icon
                            small
                            class="mr-2"
                            @click="editUser(item)"
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

                </v-data-table>
            </v-card-text>
        </v-card>

        <v-dialog max-width="768" v-model="AddEditUser" v-if="AddEditUser">
            <AddNewUserDetails @close="Close" :userdata="EditUserData" :edit="IsEditMode" />
        </v-dialog>

    </v-container>
</template>

<script>
import {authClient} from "../Plugins/client";
import AddNewUserDetails from "./AddNewUserDetails";

export default {
    components: {AddNewUserDetails},
    data: () => ({
        AddEditUser: false,
        dialogDelete: false,
        EditUserData:null,
        IsEditMode:false,
        userSearch: '',
        headers: [
            {
                text: 'Id',
                align: 'start',
                sortable: false,
                value: 'id',
            },
            {
                text: 'Name',
                align: 'start',
                sortable: false,
                value: 'name',
            },

            {text: 'Email', value: 'email'},
            {text: 'NIC', value: 'nic'},
            {text: 'Contact Number', value: 'contact_no'},
            {text: 'City', value: 'city'},
            {text: 'Birthday', value: 'birthday'},
            {text: 'Gender', value: 'gender'},
            {text: 'User Role', value: 'role'},
            {text: 'Actions', value: 'actions', sortable: false,},
        ],
        users: [],
        editItem: [],

        UserRole: [
            'Admin',
            'Seller',
            'Customer',

        ],
        editedIndex: -1,
        editedItem: {
            id: '',
            name: '',
            email: '',
            nic: '',
            contact_no: '',
            city: '',
            birthday: '',
            gender: '',
            role: '',


        },
        defaultItem: {
            id: '',
            name: '',
            email: '',
            nic: '',
            contact_no: '',
            city: '',
            birthday: '',
            gender: '',
            role: '',
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    mounted() {
        this.GetUsers();
    },

    methods: {
        GetUsers() {
            authClient.get('api/user-details/GetUsers')
                .then((response) => {
                    console.log(response)
                    this.users = response.data.users
                });
        },
        editUser(item) {
           this.EditUserData = item;
           this.IsEditMode = true;
           this.AddEditUser = true;
        },

        deleteItem(item) {
            this.editedIndex = this.users.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.users.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        Close() {
            this.dialog = false;
            this.EditUserData = null;
            this.IsEditMode = false;
            this.AddEditUser = false;
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
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
