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
                                <span class="headline">Sign In</span>
                            </v-card-title>
                            <v-form ref="form" v-model="valid" lazy-validation>
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
        form: {
            email: '',
            password: ''
        },
        valid: false,
        emailRules: [
            v => !!v || 'Email is required',
            v => /.+@.+\..+/.test(v) || 'Email must be valid'
        ],
        passwordRules: [
            v => !!v || 'Password is required',
            v => v.length >= 6 || 'Password must be at least 6 characters'
        ]
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
        }
    },
    mounted() {

    }
}
</script>

<style scoped>

</style>
