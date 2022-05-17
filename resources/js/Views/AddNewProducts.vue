<template>
    <v-card height="655">
        <v-container>
            <v-toolbar-title>Add Or Update Product Details</v-toolbar-title>
            <v-card>

                <v-card max-width="655" align="justify" class="ml-4">
                    <v-card-text>
                        <v-text-field v-model="product.name" outlined label="Name" dense></v-text-field>
                        <v-select
                            :items="categories"
                            label="Select a category"
                            dense
                            outlined
                            v-model="product.category"
                        ></v-select>
                        <v-textarea v-model="product.description" outlined label="Description" dense></v-textarea>
                        <v-btn raised class="primary mb-5" @click="onPickFile">Updoad Image
                        </v-btn>
                        <input name="image" type="file" style="display: none" ref="fileInput" accept="image/*"
                            @change="onFilePicked">
                        <v-flex>
                            <img :src="imageUrl" height="150">
                        </v-flex>
                        <v-text-field v-model="product.price" outlined type="number" min="0" label="Price" dense>
                        </v-text-field>
                    </v-card-text>

                </v-card>

                <v-row no-gutters>
                    <v-btn color="deep-purple darken-4" text @click="SaveData">Save</v-btn>

                    <v-btn class="ml-4" text color="deep-purple darken-4" @click="$emit('close');">
                        Close
                    </v-btn>
                </v-row>
            </v-card>
        </v-container>
    </v-card>
</template>

<script>



import { authClient } from "../Plugins/client";
import leatherItemShopVue from "./leatherItemShop.vue";


export default {
    props: {
        edit: Boolean,
        product_data: Object,
    },
    data: () => ({
        product: {
            name: '',
            price: 0,
            description: '',
            category: '',
        },
        categories: [],
        imageUrl: '',
    }),

    methods: {
        SaveData() {
            let formData = new FormData()
            let file = this.$refs.fileInput.files[0]
            if (this.product_data !== undefined){
                formData.append('id', this.product_data.id)
            }
            formData.append('name', this.product.name)
            formData.append('price', this.product.price)
            formData.append('description', this.product.description)
            formData.append('category', this.product.category.value === undefined ? this.product.category : this.product.category.value)
            //formData.append('category', this.product.category)
            formData.append('image', file)
            authClient.post('/api/add-new-products/AddEditproduct', formData).then((response) => {
                this.$emit('close');
            }).catch(err => {
                console.log(err);
            });
        },
        onPickFile() {
            this.$refs.fileInput.click()
        },
        onFilePicked(event) {
            const files = event.target.files
            let filename = files[0].name;
            if (filename.lastIndexOf('.') <= 0) {
                return alert('Please add a valid file!')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.imageUrl = fileReader.result;
            })
            fileReader.readAsDataURL(files[0])
            console.log(this.product.image);
            this.product.image = files[0]
            console.log(this.product.image);
        },
        getAllCategories() {
            authClient.get('/api/category/GetCategories').then((res) => {
                this.categories = res.data.map(i => ({
                    text: i['Category_name'],
                    value: i['id']
                }))
            }).catch(err => {
                console.log(err);
            });
        }
    },

    mounted() {
        this.getAllCategories()
        if (this.edit) {
            this.product = this.product_data;
        }
        this.product.category = {
            text: this.product_data.category.Category_name,
            value: this.product_data.category.id
        }
    },


    name: "AddNewProducts"
}
</script>

<style scoped>
</style>
