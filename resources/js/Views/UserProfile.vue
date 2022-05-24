<template>
    <v-container v-if="user != null">
        <h4 class="text-h6 " >Welcome {{ user.name }} | {{ user.role }}  </h4>
            <v-container>
                <v-row>
                    <v-col>
                        <span class=" font-weight-bold ">  Profile details</span>

                        <v-card  tile height="95"  dense class="mt-3" >
                            <v-row>
                                <v-avatar size="85" class="mr-3 ml-6 mt-1 " dense >
                                    <v-img  v-if="user.role === 'admin'" src="/images/businessman-character-avatar-isolated_24877-60111.webp"/>
                                    <v-img  v-if="user.role === 'seller'" src="/images/img_avatar2.png"/>
                                    <v-img  v-if="user.role === 'buyer'" src="/images/avatar6.png"/>
                                </v-avatar>
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
                                                    v-model="user.name"
                                                    label="Name"
                                                    required
                                                    outlined
                                                    dense
                                                    class="ml-1 mr-1"
                                                ></v-text-field>



                                                <v-text-field

                                                    label="NIC Number"
                                                    v-model="user.nic"
                                                    outlined
                                                    dense
                                                    class="ml-1 mr-1 "
                                                ></v-text-field>



                                                <v-text-field

                                                    label="E-mail"
                                                    v-model="user.email"
                                                    outlined
                                                    dense
                                                    class="ml-1 mr-1"
                                                ></v-text-field>

                                                <v-text-field

                                                    label="Contact Number"
                                                    v-model="user.contact_no"
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
                                                    v-model="user.address"
                                                    outlined
                                                    dense
                                                    readonly
                                                    class="ml-1 mr-1"
                                                ></v-text-field>

                                                <v-text-field

                                                    label="Birth Day"
                                                    v-model="user.birthday"
                                                    outlined
                                                    dense
                                                    readonly
                                                    class="ml-1 mr-1"
                                                ></v-text-field>

                                                
                                            </v-col>
                                        </v-row>


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
        user: null
    }),
    mounted() {
        this.user = this.$store.state.User;
    },
    name: "UserProfile"



}
</script>

<style scoped>

</style>
