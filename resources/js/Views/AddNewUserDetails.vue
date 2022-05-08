<template>
    <v-card>
        <v-row no-gutters>
            <v-col cols="12" sm="6" class="ml-4 mt-3">
                <v-text-field
                    label="Name"
                    v-model="user.name"
                    outlined
                    dense


                ></v-text-field>

                <v-text-field

                    label="Email"
                    v-model="user.email"
                    outlined
                    dense


                ></v-text-field>

                <v-text-field

                    label="NIC"
                    v-model="user.nic"
                    outlined
                    dense


                ></v-text-field>
                <v-text-field

                    label="Contact No"
                    v-model="user.contact_no"
                    outlined
                    dense


                ></v-text-field>
            </v-col>

            <v-col  class="mr-4 mt-3">
                <v-text-field
                    label="City"
                    v-model="user.city"
                    outlined
                    dense


                ></v-text-field>

                <v-text-field

                    label="BirthDay"
                    v-model="user.birthday"
                    outlined
                    dense


                ></v-text-field>

                <v-text-field

                    label="Gender"
                    v-model="user.gender"
                    outlined
                    dense


                ></v-text-field>
                <v-select
                    :items="['admin','seller','buyer']"
                    label="User Role"
                    v-model="user.role"
                    outlined
                    dense


                ></v-select>
                <v-text-field

                    label="User Address"
                    v-model="user.address"
                    outlined
                    dense


                ></v-text-field>

                <v-text-field

                    label="User Password"
                    v-model="user.password"
                    outlined
                    dense


                ></v-text-field>
            </v-col>
        </v-row>

        <v-card-actions class="justify-center">
            <v-btn
                color="blue darken-1"
                text
                @click="AddUser"

            >
                Save
            </v-btn>
            <v-btn
                text
                @click="$emit('close');"

            >
                Close
            </v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>
import {authClient} from "../Plugins/client";

export default {
    props:{
      edit:Boolean,
      userdata: Object
    },
    data: () => ({
        user:{
            name: '',
            email: '',
            nic:'',
            contact_no: '',
            password:'',
            city: '',
            address: '',
            birthday:'',
            gender:'',
            role: '',
        }
    }),
    methods:{
        AddUser(){
            authClient.post('/api/add-new-users/AddEditUser', this.user)
                .then((response)=>{
                    console.log(response);
                    this.$emit('close');
                }).catch(err => {
                    console.log(err);
            });
        },
    },
    mounted() {
      if(this.edit){
          this.user = this.userdata;
      }
    },
    name: "AddNewUserDetails"
}
</script>

<style scoped>

</style>
