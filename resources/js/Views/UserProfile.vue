<template>
    <v-container>
        <h4 class="text-h6 " >Welcome {{ $store.state.User.name }} | {{ $store.state.User.role }}</h4>

            <v-container>
                <v-row>
                    <v-col>
                        <span class=" font-weight-bold ">  Profile details</span>

                        <v-card  tile height="95"  dense class="mt-3" >
                            <v-row>

                                <v-avatar size="85" class="mr-3 ml-6 mt-1 " dense >
                                    <v-img  v-if="$store.state.User.role === 'admin'" src="/images/businessman-character-avatar-isolated_24877-60111.webp"/>
                                    <v-img  v-if="$store.state.User.role === 'seller'" src="/images/img_avatar2.png"/>
                                    <v-img  v-if="$store.state.User.role === 'buyer'" src="/images/avatar6.png"/>

                                </v-avatar>
                                <v-col class="mr-6">

                                </v-col>
                            </v-row>
                        </v-card >
                        <v-card>

                        </v-card>
                        <v-container fluid>
                            <v-row>
                                <v-card class="mt-5" width="1500" dense >
                                    <v-form>
                                        <v-container >
                                            <v-row class="mt-1">
                                                <v-text-field

                                                    :counter="30"
                                                    v-model="username"

                                                    label="Name"
                                                    required
                                                    outlined
                                                    dense
                                                    class="ml-1 mr-1 "

                                                ></v-text-field>



                                                <v-text-field

                                                    label="NIC Number"
                                                    v-model="nic"
                                                    outlined
                                                    dense
                                                    class="ml-1 mr-1 "
                                                ></v-text-field>



                                                <v-text-field

                                                    label="E-mail"
                                                    v-model="email"
                                                    outlined
                                                    dense
                                                    class="ml-1 mr-1"
                                                ></v-text-field>

                                                <v-text-field

                                                    label="Contact Number"
                                                    v-model="contact"
                                                    outlined
                                                    dense
                                                    class="ml-1 mr-1"
                                                ></v-text-field>

                                                <v-text-field

                                                    label="City"
                                                    v-model="city"
                                                    outlined
                                                    dense
                                                    class="ml-1 mr-1"
                                                ></v-text-field>



                                            </v-row>
                                        </v-container>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-text-field
                                                    label="Address"
                                                    v-model="address"
                                                    outlined
                                                    dense
                                                    readonly
                                                    class="ml-1 mr-1"
                                                ></v-text-field>

                                                <v-text-field

                                                    label="Postal Code"
                                                    v-model="postalcode"
                                                    outlined
                                                    dense
                                                    readonly
                                                    class="ml-1 mr-1"
                                                ></v-text-field>

                                                <v-text-field

                                                    label="Birth Day"
                                                    v-model="birthday"
                                                    outlined
                                                    dense
                                                    readonly
                                                    class="ml-1 mr-1"
                                                ></v-text-field>

                                                <v-text-field
                                                    label="Gender"
                                                    v-model="gender"
                                                    outlined
                                                    dense
                                                    readonly
                                                    class="ml-1 mr-1"
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>

                                        <v-card-actions class="justify-center">
                                            <v-btn
                                                color="blue darken-1"
                                                text

                                            >
                                                Save
                                            </v-btn>
                                        </v-card-actions>

                                    </v-form>


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
    data: () => ({
        username:'Vinuri',
        nic:'0123654789v',
        email:'abc@gmail.com',
        contact:'0714562369',
        city:'Colombo',
        address:'No.12,Colombo Road,Colombo',
        postalcode:'1100',
        birthday:'12-04-1998',
        gender:'Female',

    }),
    name: "UserProfile"



}
</script>

<style scoped>

</style>
