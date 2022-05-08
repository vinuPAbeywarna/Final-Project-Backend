<template>
    <v-container>
        <v-row no-gutters>
            <h3>Add a New Product</h3>
        </v-row>

        <v-text-field v-model="product.name" outlined label="Name"></v-text-field>
        <v-textarea v-model="product.description" outlined label="Description"></v-textarea>
        <v-text-field v-model="product.price" outlined type="number" min="0" label="Price"></v-text-field>

        <v-row no-gutters>
            <v-btn @click="SaveData">Save</v-btn>
        </v-row>
    </v-container>
</template>

<script>



import {authClient} from "../Plugins/client";


export default {
    data: () => ({
        product:{
            name:'',
            price:0,
            description:'',
        },

    }),

    methods: {
        SaveData(){
            authClient.post('/api/add-new-products/SaveData', this.product).then((response) => {
                console.log(response);
            });
        },
    },


    name: "AddNewProducts"
}
</script>

<style scoped>

</style>
