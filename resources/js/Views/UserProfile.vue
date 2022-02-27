<template>
    <v-container>
        <h4 class="text-h4">Welcome {{ $store.state.User.name }} | {{ $store.state.User.role }}</h4>

            <v-container>
                <v-row>
                    <v-col>
                        <v-text class=" font-weight-bold">  Profile details</v-text>

                        <v-card  tile height="95"  dense class="mt-3" >
                            <v-row>

                                <v-avatar size="85" class="mr-3 ml-6 mt-1 " dense >
                                    <img  src="/img/avatar2.png"/>;

                                </v-avatar>
                                <v-col align="left" class="mr-6">
                                    <h4 class="mt-3 ml-16 font-weight-bold"> Welcome Nimal Kumara</h4>
                                </v-col>
                            </v-row>
                        </v-card >
                        <v-card>

                        </v-card>
                        <v-container fluid>
                            <v-text><h4>Personal Details</h4></v-text>
                            <v-divider></v-divider>
                            <v-spacer></v-spacer>
                            <v-row>
                                <v-card class="mt-5" width="1500" dense >
                                    <v-form>
                                        <v-container >
                                            <v-row>

                                                <v-text-field
                                                    v-model="personal_firstname"


                                                    :counter="15"
                                                    label="Name"
                                                    required
                                                    outlined
                                                    dense
                                                    class="ml-1 mr-1 "
                                                ></v-text-field>



                                                <v-text-field
                                                    v-model="personal_nic"
                                                    label="NIC Number"
                                                    outlined
                                                    dense
                                                    class="ml-1 mr-1 "
                                                ></v-text-field>



                                                <v-text-field
                                                    v-model="personal_email"
                                                    label="E-mail"
                                                    outlined
                                                    dense
                                                    class="ml-1 mr-1"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="personal_tele"
                                                    label="Contact Number"
                                                    outlined
                                                    dense
                                                    class="ml-1 mr-1"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="personal_city"
                                                    label="City"
                                                    outlined
                                                    dense
                                                    class="ml-1 mr-1"
                                                ></v-text-field>



                                            </v-row>
                                        </v-container>

                                    </v-form>
                                    <v-expansion-panels inset class="mt-1" dense v-model="details">
                                        <v-expansion-panel
                                            v-for="(item,i) in 1"
                                            :key="i"
                                        >
                                            <v-expansion-panel-header class="font-weight-bold">Other Details</v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <v-text-field
                                                    v-model="details_province"
                                                    label="Province"
                                                    outlined
                                                    dense
                                                    readonly
                                                    class="ml-1 mr-1"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="details_district"
                                                    label="District"
                                                    outlined
                                                    dense
                                                    readonly
                                                    class="ml-1 mr-1"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="details_division"
                                                    label="Division"
                                                    outlined
                                                    dense
                                                    readonly
                                                    class="ml-1 mr-1"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="details_gnd"
                                                    label="GND"
                                                    outlined
                                                    dense
                                                    readonly
                                                    class="ml-1 mr-1"
                                                ></v-text-field>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                    </v-expansion-panels>
                                    <v-card-actions class="justify-center">
                                        <v-btn
                                            color="blue darken-1"
                                            text
                                            @click="save"
                                        >
                                            Save
                                        </v-btn>
                                    </v-card-actions>

                                </v-card>

                            </v-row>






                        </v-container>



                    </v-col>
                </v-row>
            </v-container>
    </v-container>

</template>

<script>
export default {
    name: "UserProfile"
}
</script>

<style scoped>

</style>
