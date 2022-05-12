<template>
    <v-card height="655">
    <v-container>
        <v-toolbar-title>Add Or Update Product Details</v-toolbar-title>
        <v-card>

        <v-card max-width="655" align="justify" class="ml-4">
            <v-card-text>
                <v-text-field v-model="product.name" outlined label="Name" dense></v-text-field>
                <v-textarea v-model="product.description" outlined label="Description" dense></v-textarea>
                <v-text-field v-model="product.price" outlined type="number" min="0" label="Price" dense></v-text-field>
            </v-card-text>

        </v-card>



        <v-row no-gutters>
            <v-btn
                color="deep-purple darken-4"
                text @click="SaveData">Save</v-btn>

            <v-btn
                class="ml-4"
                text
                color="deep-purple darken-4"
                @click="$emit('close');"

            >
                Close
            </v-btn>
        </v-row>
        </v-card>
    </v-container>
    </v-card>
</template>

<script>



import {authClient} from "../Plugins/client";


export default {
    props:{
        edit:Boolean,
        product_data: Object,
    },
    data: () => ({
        product:{
            name:'',
            price:0,
            description:'',
        },

    }),

    methods: {
        SaveData(){
            authClient.post('/api/add-new-products/AddEditproduct', this.product).then((response) => {
                console.log(response);
                this.$emit('close');
            }).catch(err => {
                console.log(err);
            });
        },
    },

    mounted() {
        if(this.edit){
            this.product = this.product_data;
        }
    },


    name: "AddNewProducts"
}
</script>

<style scoped>

</style>
