<template>
    <v-container>
        <v-row>
            <v-col>
                <span class=" font-weight-bold"> Seller Account Approval</span>
                <v-card tile height="95" dense class="mt-5" v-for="seller in sellers" :key="seller.id">
                    <v-row>

                        <v-avatar size="85" class="mr-3 ml-6 mt-1 " dense>
                            <v-img src="/images/businessman-character-avatar-isolated_24877-60111.webp" />

                        </v-avatar>
                        <v-col class="mr-6">
                            <span>Account Type : {{ seller.role }}</span><br />
                            <span>Name : {{ seller.name }}</span><br />
                        </v-col>

                        <v-col>
                            <v-btn class="mr-1 " color="primary" v-if="$store.state.User.role === 'admin'"
                                v-on:click="giveApprovel(seller)">Approve</v-btn>
                            <v-btn class="mr-1" color="red" dark v-on:click="notApproved(seller)"
                                v-if="$store.state.User.role === 'admin'">Reject</v-btn>
                        </v-col>
                        <v-col>
                            <v-chip class="mx-1" color="primary" label v-if="seller.status === 1">Approved <v-icon
                                    class="ml-1" dark light>
                                    mdi-checkbox-marked-circle</v-icon>
                            </v-chip>
                            <v-chip class="mx-1" color="red" text-color="white" label v-if="seller.status === 2">
                                Rejected <v-icon class="ml-1" dark light>
                                    mdi-cancel</v-icon>
                            </v-chip>
                        </v-col>
                    </v-row>

                </v-card>
                <v-row>

                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { authClient } from "../Plugins/client";

export default {
    name: "SellerAccountApproval",
    mounted() {
        this.getSellers()
    },
    methods: {
        getSellers() {
            this.$store.dispatch('seller/getAll')
        },
        giveApprovel(item) {
            authClient.post(`/api/seller/update/${item.id}`, {
                "status": 1
            }).then(() => {
                this.$notify({
                    type: 'success',
                    title: 'Success',
                    text: 'Seller Approved!'
                }),
                    this.$store.dispatch('seller/getAll')
            })
        },
        notApproved(item) {
            authClient.post(`/api/seller/update/${item.id}`, {
                "status": 2
            }).then(() => {
                this.$notify({
                    type: 'success',
                    title: 'Success',
                    text: 'Seller Rejected!'
                }),
                    this.$store.dispatch('seller/getAll')
            })
        },

    },
    computed: {
        sellers() {
            return this.$store.state.seller.items
        }
    }
}
</script>

<style scoped>
</style>
