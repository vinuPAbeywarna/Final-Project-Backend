<template>
  <v-container>
    <v-row no-gutters justify="center">
        <v-col cols="6">
            <v-card class="rounded-lg mt-16">
                <v-card-text>
                    <v-row no-gutters>
                        <v-col>
                            <lottie-animation path="./assets/auth.json"/>
                        </v-col>
                        <v-col>
                            <v-card-title class="ml-0 pl-0">
                                <span v-if="is_login" class="headline">Sign In</span>
                                <span v-if="!is_login" class="headline">Sign Up</span>
                            </v-card-title>
                            <v-form v-if="is_login" ref="form" v-model="valid" lazy-validation>
                                <v-text-field
                                    outlined
                                    v-model="form.email"
                                    :rules="emailRules"
                                    label="Email"
                                    type="email"
                                    autofocus
                                    required
                                ></v-text-field>
                                <v-text-field
                                    outlined
                                    v-model="form.password"
                                    :rules="passwordRules"
                                    label="Password"
                                    type="password"
                                    required
                                ></v-text-field>
                                <v-btn
                                    :loading="loading"
                                    color="primary"
                                    dark
                                    @click="Login">
                                    Sign In
                                </v-btn>
                                <v-btn
                                    text
                                    @click="is_login = false">
                                    Sign Up
                                </v-btn>
                            </v-form>

                            <v-form v-if="!is_login" ref="form" v-model="valid" lazy-validation>

                                <v-text-field
                                    outlined
                                    v-model="form.name"
                                    :rules="nameRules"
                                    label="Name"
                                    type="text"
                                    autofocus
                                    required
                                ></v-text-field>
                                <v-text-field
                                    outlined
                                    v-model="form.email"
                                    :rules="emailRules"
                                    label="Email"
                                    type="email"
                                    autofocus
                                    required
                                ></v-text-field>
                                <v-text-field
                                    outlined
                                    v-model="form.password"
                                    :rules="passwordRules"
                                    label="Password"
                                    type="password"
                                    required
                                ></v-text-field>
                                <v-text-field
                                    outlined
                                    v-model="form.password_confirmation"
                                    :rules="passwordRules"
                                    label="Confirm Password"
                                    type="password"
                                    required
                                ></v-text-field>
                                <v-text-field
                                    outlined
                                    v-model="form.nic"
                                    :rules="nicRules"
                                    label="NIC"
                                    type="nic"
                                    required
                                ></v-text-field>



                                <v-text-field
                                    outlined
                                    v-model="form.contact_no"
                                    :rules="contact_noRules"
                                    label="Contact Number"
                                    type="contact_no"
                                    required
                                ></v-text-field>



                                <v-text-field
                                    outlined
                                    v-model="form.address"
                                    :rules="addressRules"
                                    label="Address"
                                    type="address"
                                    required
                                ></v-text-field>

                                <v-text-field
                                    outlined
                                    v-model="form.birthday"
                                    :rules="birthdayRules"
                                    label="Birth Day"
                                    type="birthday"
                                    required
                                ></v-text-field>



                                <v-select
                                    outlined
                                    :items="AccountTypes"
                                    item-text="title"
                                    item-value="value"
                                    v-model="form.role"
                                    :rules="roleRules"
                                    label="Role"
                                    required
                                ></v-select>
                                <v-btn
                                    :loading="loading"
                                    color="primary"
                                    dark
                                    @click="Register">
                                    Sign Up
                                </v-btn>
                                <v-btn
                                    text
                                    @click="is_login = true">
                                    Sign In
                                </v-btn>

                            </v-form>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {client} from "../Plugins/client";
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

export default {
    name: "Authentication",
    components: {
        LottieAnimation
    },
    data:()=>({
        loading: false,
        is_login:true,
        form: {
            name: null,
            email: null,
            password: '',
            password_confirmation: '',
            nic:null,
            contact_no:null,
            address:null,
            birthday:null,
            role: null
        },
        valid: false,
        AccountTypes:[
            {
                title:"Seller",
                value:"seller"
            },
            {
                title:"Buyer",
                value:"buyer"
            }
        ],

        nameRules: [
            v => !!v || 'Name is required',
        ],
        roleRules: [
            v => !!v || 'Role is required',
        ],
        emailRules: [
            v => !!v || 'Email is required',
            v => /.+@.+\..+/.test(v) || 'Email must be valid'
        ],
        passwordRules: [
            v => !!v || 'Password is required',
            v => v.length >= 6 || 'Password must be at least 6 characters'
        ],
        nicRules: [
            v => !!v || 'NIC is required',
        ],
        contact_noRules: [
            v => !!v || 'Contact Number is required',
        ],

        birthdayRules: [
            v => !!v || 'BirthDay is required',
        ],

        addressRules: [
            v => !!v || 'Address is required',
        ],


    }),
    methods:{
        Login(){
            this.loading = true;
            this.$refs.form.validate()
            if(this.valid){
                client.post('/api/auth/login', this.form).then(response => {
                    console.log(response.data);
                    this.$store.commit('auth', {
                        token: response.data.token,
                        user: response.data.user
                    });
                }).catch(error => {
                    console.log(error.response);
                }).finally(() => {
                    this.loading = false;
                });
            }
        },
        Register(){
            this.loading = true;
            this.$refs.form.validate()
            // console.log(this.form)
            if(this.valid){
                client.post('/api/auth/register', this.form).then(response => {
                    console.log(response.data);
                    this.is_login = true;
                }).catch(error => {
                    console.log(error.response);
                }).finally(() => {
                    this.loading = false;
                });
            }
        }

    },
    mounted() {

    }
}
</script>

<style scoped>

</style>
