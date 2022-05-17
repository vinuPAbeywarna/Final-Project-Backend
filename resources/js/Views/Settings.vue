<template>
<v-row>
    <v-col
        >
        <v-card
            class=" mt-5  ml-5"
            max-width="1180"

        >
            <v-card-text>
                <p class="text-h6 text--primary ">
                    Delete Account
                </p>

                <div class="text--primary font-weight-regular">
                    <v-container fluid>
                        <v-radio-group
                            v-model="radi"
                            mandatory

                        >
                            <v-radio
                                label="No longer usable"
                                value="radio-1"
                            ></v-radio>
                            <v-radio
                                label="Want to switch on other account"
                                value="radio-2"
                            ></v-radio>
                            <v-radio
                                label="other"
                                value="radio-3"
                            ></v-radio>
                        </v-radio-group>
                    </v-container>
                </div>
            </v-card-text>
            <v-card-actions>
                <div class="mt-0 mr-6" >
                    <v-btn
                        text
                        color="primary"
                        dark
                        dense
                        @click="deleteAccount"
                    >
                        Delete Account
                    </v-btn>
                </div>

            </v-card-actions>
        </v-card>

    </v-col>
</v-row>





</template>

<script>
import {authClient} from "../Plugins/client";

export default {
    data () {
        return {
            radios: null,
            radio: null,
            radi:null,
        }
    },
    methods: {
        deleteAccount() {
            authClient.delete('/api/user-details/DeleteUser').then(() => {
                this.$router.push('/auth');
            })
        }
    },
    name: "Settings"
}
</script>

<style scoped>

</style>
