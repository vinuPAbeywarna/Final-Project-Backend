<template>
<v-container>
    <v-row>
        <v-col>
            <span class=" font-weight-bold"> Seller Account Approval</span>
            <v-card  tile height="95"  dense class="mt-5" >
                <v-row>

                    <v-avatar size="85" class="mr-3 ml-6 mt-1 " dense >
                        <v-img  v-if="$store.state.User.role === 'admin'" src="/images/businessman-character-avatar-isolated_24877-60111.webp"/>

                    </v-avatar>
                    <v-col class="mr-6">
                        <span>Account Type : Seller </span><br/>
                        <span>Name : Vihanga Nirmani</span><br/>
                        <span>City : Colombo</span>

                    </v-col>

                    <v-col>
                        <v-btn class="mr-10 " color="primary">Approve</v-btn>
                        <v-btn class="mr-10" color="red" dark>Reject</v-btn>
                    </v-col>
                </v-row>

            </v-card>
            <v-row>

            </v-row>
            <v-card  tile height="95"  dense class="mt-10 " >
                <v-row>

                    <v-avatar size="85" class="mr-3 ml-6 mt-1 " dense >
                        <v-img  v-if="$store.state.User.role === 'admin'" src="/images/businessman-character-avatar-isolated_24877-60111.webp"/>

                    </v-avatar>
                    <v-col class="mr-6">
                        <span>Account Type : Seller </span><br/>
                        <span>Name : Sachintha Siriwardana</span><br/>
                        <span>City : Colombo</span>

                    </v-col>

                    <v-col>
                        <v-btn class="mr-10 " color="primary">Approve</v-btn>
                        <v-btn class="mr-10" color="red" dark>Reject</v-btn>
                    </v-col>

                </v-row>
            </v-card>

            <v-card  tile height="95"  dense class="mt-8" >
                <v-row>

                    <v-avatar size="85" class="mr-3 ml-6 mt-1 " dense >
                        <v-img  v-if="$store.state.User.role === 'admin'" src="/images/businessman-character-avatar-isolated_24877-60111.webp"/>

                    </v-avatar>
                    <v-col class="mr-6">
                        <span>Account Type : Seller </span><br/>
                        <span>Name : Kamal Siriwardana</span><br/>
                        <span>City : Colombo</span>

                    </v-col>
                    <v-col>
                        <v-btn class="mr-10 " color="primary">Approve</v-btn>
                        <v-btn class="mr-10" color="red" dark>Reject</v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: "SellerAccountApprovel"
}
</script>

<style scoped>

</style>
