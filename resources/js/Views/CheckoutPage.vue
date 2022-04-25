<template>
<v-row>
    <v-col cols="12 " sm="6">
        <v-toolbar-title class="ml-4 mt-3 font-weight-bold">Billing Details</v-toolbar-title>
        <v-card ref="form" width="600" class="ml-4 mt-3">
            <v-card-text>
                <v-text-field
                    ref="name"
                    v-model="name"
                    :rules="[() => !!name || 'This field is required']"
                    :error-messages="errorMessages"
                    label="Full Name"
                    placeholder="John Doe"
                    required
                    outlined
                    dense
                    clearable
                ></v-text-field>
                <v-text-field
                    ref="address"
                    clearable
                    v-model="address"
                    :rules="[
              () => !!address || 'This field is required',
              () => !!address && address.length <= 25 || 'Address must be less than 25 characters',
              addressCheck
            ]"
                    label="Address Line"
                    placeholder="Snowy Rock Pl"
                    counter="25"
                    required
                    outlined
                    dense
                ></v-text-field>
                <v-text-field
                    ref="city"
                    clearable
                    v-model="city"
                    :rules="[() => !!city || 'This field is required', addressCheck]"
                    label="City"
                    placeholder="El Paso"
                    required
                    outlined
                    dense
                ></v-text-field>
                <v-text-field
                    ref="state"
                    v-model="state"
                    :rules="[() => !!state || 'This field is required']"
                    label="State/Province/Region"
                    required
                    placeholder="TX"
                    outlined
                    dense
                ></v-text-field>
                <v-text-field
                    ref="zip"
                    v-model="zip"
                    :rules="[() => !!zip || 'This field is required']"
                    label="ZIP / Postal Code"
                    required
                    placeholder="79938"
                    outlined
                    dense
                ></v-text-field>
                <v-text-field
                    ref="country"
                    v-model="country"
                    :rules="[() => !!country || 'This field is required']"
                    label="Phone Number"
                    required
                    outlined
                    dense
                ></v-text-field>
                <v-textarea
                label="Order Note"
                outlined
                dense
                >

                </v-textarea>
            </v-card-text>
<!--            <v-divider class="mt-12"></v-divider>-->
            <v-card-actions>
<!--                <v-btn text>-->
<!--                    Cancel-->
<!--                </v-btn>-->
<!--                <v-spacer></v-spacer>-->
<!--                <v-slide-x-reverse-transition>-->
<!--                    <v-tooltip-->
<!--                        v-if="formHasErrors"-->
<!--                        left-->
<!--                    >-->
<!--                        <template v-slot:activator="{ on, attrs }">-->
<!--                            <v-btn-->
<!--                                icon-->
<!--                                class="my-0"-->
<!--                                v-bind="attrs"-->
<!--                                @click="resetForm"-->
<!--                                v-on="on"-->
<!--                            >-->
<!--                                <v-icon>mdi-refresh</v-icon>-->
<!--                            </v-btn>-->
<!--                        </template>-->
<!--                        <span>Refresh form</span>-->
<!--                    </v-tooltip>-->
<!--                </v-slide-x-reverse-transition>-->
                <v-btn
                    color="primary"
                    text
                    @click="submit"
                >
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
    <v-col cols="12" sm="6">

        <v-card ref="form" width="600" class="ml-4 mt-13">
            <v-card-title class="font-weight-bold">Order ID:#001</v-card-title>
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class="text-left">
                            Item
                        </th>
                        <th class="text-left">
                            Total
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="item in desserts"
                        :key="item.name"
                    >
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
            <v-card-text class="font-weight-bold">Cart Sub Total : Rs.500</v-card-text>
            <v-card-text class="font-weight-bold">Shipping Fee: Rs.250</v-card-text>
            <v-card-text class="font-weight-bold">Total Amount : Rs.750</v-card-text>
            <v-container fluid class="ml-2">
                <p>{{ radios || 'null' }}</p>
                <v-radio-group
                    v-model="radios"
                    mandatory
                >
                    <v-radio
                        label="Card Payments"
                        value="Card Payments"
                    ></v-radio>
                    <v-radio
                        label="Cash on delivary"
                        value="Cash on delivary"
                    ></v-radio>
                </v-radio-group>
            </v-container>
            <v-card-actions>
                <v-btn class="ml-2 ">

                    Place Order
                </v-btn>
            </v-card-actions>


        </v-card>
    </v-col>
</v-row>
</template>

<script>
export default {
    data: () => ({
        errorMessages: '',
        name: null,
        address: null,
        city: null,
        state: null,
        zip: null,
        country: null,
        formHasErrors: false,
        radios: null,
        desserts: [
            {
                name: 'Frozen Yogurt',
                calories: 159,
            },
            {
                name: 'Ice cream sandwich',
                calories: 237,
            },


        ],
    }),

    computed: {
        form () {
            return {
                name: this.name,
                address: this.address,
                city: this.city,
                state: this.state,
                zip: this.zip,
                country: this.country,
            }
        },
    },

    watch: {
        name () {
            this.errorMessages = ''
        },
    },

    methods: {
        addressCheck () {
            this.errorMessages = this.address && !this.name
                ? `Hey! I'm required`
                : ''

            return true
        },
        resetForm () {
            this.errorMessages = []
            this.formHasErrors = false

            Object.keys(this.form).forEach(f => {
                this.$refs[f].reset()
            })
        },
        submit () {
            this.formHasErrors = false

            Object.keys(this.form).forEach(f => {
                if (!this.form[f]) this.formHasErrors = true

                this.$refs[f].validate(true)
            })
        },
    },

    name: "CheckoutPage"
}
</script>

<style scoped>

</style>
