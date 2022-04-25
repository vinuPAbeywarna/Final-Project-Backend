<template>
<v-row>
    <v-col
    cols="12">
        <v-card
            class=" mt-5  ml-5"
            max-width="1200"

        >
            <v-card-text>
                <p class="text-h6 font-weight-bold ">
                   Order Tracking
                </p>

                <div class=" text-h7 text--primary ">
                    <v-toolbar-title class="mt-5 ml-4">To track your order please enter your Order
                        ID in the box below and press the "Track Your Item" button.

                    </v-toolbar-title>

                </div>
                <v-col
                cols="12"
                sm="6">
                    <v-text-field
                        label="Order ID"
                        value=""
                        hint="Found in your order confirmation email"
                        outlined
                        dense
                    ></v-text-field>
                    <v-text-field
                        label="Billing Email"
                        value=""
                        hint="Enter your email address"
                        outlined
                        dense
                    ></v-text-field>

                </v-col>

            </v-card-text>
            <v-card-actions>
                <div class="mt-0 mr-6" >
                    <v-btn
                        rounded
                        color="primary"
                        dark
                        dense

                    >
                       Track Your Item
                    </v-btn>
                </div>

            </v-card-actions>
        </v-card>

    </v-col>
</v-row>
</template>

<script>
export default {
    name: "TrackingDetails"
}
</script>

<style scoped>

</style>
