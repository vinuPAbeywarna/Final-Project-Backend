<template>
<!--<v-container fluid>-->
<!--    <v-row>-->
<!--        <v-card class="mt-5 ml-4" width="1200" dense >-->
<!--            <form>-->

<!--                <v-col cols="10" sm="5">-->
<!--                    <v-text-field-->
<!--                        v-model="name"-->
<!--                        :counter="10"-->
<!--                        label="Product Name"-->
<!--                        required-->
<!--                        outlined-->
<!--                        dense-->

<!--                    ></v-text-field>-->
<!--                    <v-text-field-->
<!--                        v-model="email"-->
<!--                        label="Product Price"-->
<!--                        required-->
<!--                        outlined-->
<!--                        dense-->

<!--                    ></v-text-field>-->
<!--                    <v-text-field-->
<!--                        v-model="email"-->
<!--                        label="Available Stock"-->
<!--                        required-->
<!--                        outlined-->
<!--                        dense-->

<!--                    ></v-text-field>-->
<!--                    <v-select-->
<!--                        v-model="select"-->
<!--                        :items="items"-->

<!--                        label="Whole Sale available or not?"-->
<!--                        required-->
<!--                        outlined-->
<!--                        dense-->

<!--                    ></v-select>-->


<!--                    <v-text-field-->
<!--                        v-model="email"-->
<!--                        label="Seller Name"-->
<!--                        required-->
<!--                        outlined-->
<!--                        dense-->

<!--                    ></v-text-field>-->
<!--                </v-col>-->




<!--                <v-btn-->
<!--                    class="mr-4"-->
<!--                    @click="submit"-->
<!--                >-->
<!--                    submit-->
<!--                </v-btn>-->
<!--                <v-btn @click="clear">-->
<!--                    clear-->
<!--                </v-btn>-->
<!--            </form>-->

<!--        </v-card>-->

<!--    </v-row>-->

<!--</v-container>-->
    <v-row justify="center">

        <v-col
            cols="12"
            sm="10"
            md="8"
            lg="6"
        >
            <v-toolbar-title class="mt-5">Add New Product</v-toolbar-title>
            <v-form @submit.prevent="SaveData()">
                <v-card class="mt-8 " width="1500" dense ref="form">
                    <v-card-text>
                        <v-text-field

                            v-model="product.product_name"
                            :error-messages="errorMessages"
                            label="Product Name"
                            required
                            dense
                            outlined
                        ></v-text-field>
                        <v-text-field

                            v-model="product.address"

                            label="Seller Address"
                            counter="25"
                            required
                            outlined
                            dense
                        ></v-text-field>
                        <v-text-field

                            v-model="product.seller_name"

                            label="Seller Name"
                            required
                            dense
                            outlined

                        ></v-text-field>
                        <v-text-field

                            v-model="product.stock"

                            label="Available Stock"
                            required
                            outlined
                            dense

                        ></v-text-field>
                        <v-text-field

                            v-model="product.price"

                            label="Product Price"
                            required
                            outlined
                            dense
                        ></v-text-field>


                        <v-autocomplete

                            v-model="product.country"

                            :items="countries"
                            label="Country"
                            outlined
                            dense
                            required
                        ></v-autocomplete>
                        <v-file-input

                            v-model="product.image"
                            accept="image/png, image/jpeg, image/bmp"
                            placeholder="Choose Image"
                            prepend-icon="mdi-camera"
                            label="Image"
                            outlined
                            dense
                        ></v-file-input>
                    </v-card-text>
                    <v-divider class="mt-12"></v-divider>
                    <v-card-actions>
                        <v-btn text>
                            Cancel
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-slide-x-reverse-transition>
                            <v-tooltip
                                v-if="formHasErrors"
                                left>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        icon
                                        class="my-0"
                                        v-bind="attrs"
                                        @click="resetForm"
                                        v-on="on"
                                    >
                                        <v-icon>mdi-refresh</v-icon>
                                    </v-btn>
                                </template>
                                <span>Refresh form</span>
                            </v-tooltip>
                        </v-slide-x-reverse-transition>
                        <v-btn
                            color="primary"
                            text
                            type="submit"
                        >
                            Submit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-form>

        </v-col>
    </v-row>
</template>

<script>



import {authClient} from "../Plugins/client";

export default {
    data: () => ({
        product:{
            id:'',
            product_name:'',
            seller_name:'',
            address:'',
            stock:'',
            price:'',
            country:'',
            image:'',

        },
        countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', `Timor L'Este`, 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
        errorMessages: '',

        formHasErrors: false,
        image:'',
        rules: [
            value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
        ],
        items:['yes', 'No']
    }),

    computed: {
        form () {
            return {
                product_name: this.product_name,
                address: this.address,
                city: this.city,
                seller_name: this.seller_name,
                price: this.price,
                country: this.country,
                stock:this.stock,
                image:this.image,
            }
        },
    },
    created() {
        this.SaveData();
    },

    watch: {
        name () {
            this.errorMessages = ''
        },
    },

    methods: {
        SaveData(){
            authClient.post('api/add-new-products/SaveData')
            .then((response) => {
                console.log(response)
                this.product = response.data.product
            });

        },
        addressCheck () {
            this.errorMessages = this.address && !this.product_name
                ? `Hey! I'm required`
                : ''

            return true
        },
        resetForm () {
            this.errorMessages = []
            this.formHasErrors = false

            Object.keys(this.form).forEach(f => {
                this.$refs[f].reset()
            })
        },
        submit () {
            this.formHasErrors = false

            Object.keys(this.form).forEach(f => {
                if (!this.form[f]) this.formHasErrors = true

                this.$refs[f].validate(true)
            })
        },
    },


    name: "AddNewProducts"
}
</script>

<style scoped>

</style>
