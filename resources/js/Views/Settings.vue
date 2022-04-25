<template>
<v-row>
    <v-col
    cols="6">
        <v-toolbar-title class="font-weight-bold mt-5 ml-4">Settings</v-toolbar-title>
        <v-card
            class=" mt-4 ml-5"
            max-width="550"

        >
            <v-card-text>
                <p class="text-h6 text--primary ">
                    Notification
                </p>

                <div class="text--primary font-weight-regular" >
                    <v-container fluid>
                        <v-radio-group
                            v-model="radios"
                            mandatory

                        >
                            <v-radio
                                label="Allow Desktop Notification"
                                value="radio-1"
                            ></v-radio>
                            <v-radio
                                label="Enable Notifications"
                                value="radio-2"
                            ></v-radio>
                            <v-radio
                                label="Get notification for my own activity"
                                value="radio-3"
                            ></v-radio>
                            <v-radio
                                label="DND"
                                value="radio-4"
                            ></v-radio>
                        </v-radio-group>
                    </v-container>

                </div>
            </v-card-text>

        </v-card>


    </v-col>
    <v-col
        cols="6">
        <v-card
            class=" mt-16"
            max-width="550"

        >
            <v-card-text>
                <p class="text-h6 text--primary ">
                    Deactivate Account
                </p>

                <div class="text--primary font-weight-regular">
                    <v-container fluid>
                        <v-radio-group
                            v-model="radio"
                            mandatory

                        >
                            <v-radio
                                label="I have a privacy concern"
                                value="radio-1"
                            ></v-radio>
                            <v-radio
                                label="This is temporary"
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

                    >
                        Deactivate Account
                    </v-btn>
                </div>

            </v-card-actions>
        </v-card>

    </v-col>
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
export default {
    data () {
        return {
            radios: null,
            radio: null,
            radi:null,
        }
    },
    name: "Settings"
}
</script>

<style scoped>

</style>
