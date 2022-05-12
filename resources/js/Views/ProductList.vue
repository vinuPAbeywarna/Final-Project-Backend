<template>
    <v-container>
        <h3>Product Details</h3>
        <v-row no-gutters class="mb-4 mt-3">
            <v-spacer/>
            <v-btn to="/add-new-products" color="primary">Add New Product</v-btn>
        </v-row>
        <v-card>
            <v-card-title>
                <v-text-field dense v-model="productSearch" outlined label="Search..."></v-text-field>
            </v-card-title>
            <v-card-text>
                <v-data-table
                    :headers="headers"
                    :items="products"
                    :search="productSearch"
                    sort-by="calories"

                >

                    <template v-slot:item.actions="{ item }" v-if="$store.state.User.role === 'admin'">
                        <v-icon
                            small
                            class="mr-2"
                            @click="editproduct(item)"
                            v-if="$store.state.User.role === 'admin'"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-icon
                            small
                            @click="DeleteProduct(item)"
                            v-if="$store.state.User.role === 'admin'"
                        >
                            mdi-delete
                        </v-icon>
                    </template>

                </v-data-table>
            </v-card-text>
        </v-card>

            <v-dialog max-width="655"  v-model="AddEditproduct" v-if="AddEditproduct">
                <AddNewProducts @close="Close" :product_data="EditproductData" :edit="IsEditMode" />
            </v-dialog>




    </v-container>




</template>

<script>
import {authClient} from "../Plugins/client";
import AddNewProducts from "./AddNewProducts";

export default {
    components: {AddNewProducts},
    data: () => ({
        AddEditproduct:false,
        EditproductData:null,
        IsEditMode:false,
        dialog: false,
        dialogDelete: false,
        headers: [
            { text: 'Name', value: 'name'},
            { text: 'Description', value: 'description'},
            { text: 'Price', value: 'price' },
            { text: 'Actions', value: 'actions', sortable: false,  },
        ],
        products: [],
        productSearch:'',

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

    mounted() {
       // this.DeleteProduct();
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
                this.products = response.data;
                }

            );

        },

        DeleteProduct (item){

            authClient.delete('api/product-list/DeleteProduct',{params: {id: item.id}})
                .then((response)=>{
                  //  console.log(item.id);
                        console.log(response)
                        this.products = response.data;
                    }

                );
        },



        editproduct (item) {
            this.EditproductData = item;
            this.IsEditMode = true;
            this.AddEditproduct = true;
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

        Close () {
            this.dialog = false;
            this.EditproductData = null;
            this.IsEditMode = false;
            this.AddEditproduct = false;
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
