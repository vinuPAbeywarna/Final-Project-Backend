<template>
    <v-form ref="form" lazy-validation>
        <v-row>
            <v-col cols="12 " sm="6">
                <v-toolbar-title class="ml-4 mt-3 font-weight-bold">Billing Details</v-toolbar-title>
                <v-card width="600" class="ml-4 mt-3">
                    <v-card-text>
                        <v-text-field ref="name" v-model="name" :rules="[() => !!name || 'This field is required']"
                            label="Full Name" placeholder="John Doe" required outlined dense clearable></v-text-field>
                        <v-text-field ref="address" clearable v-model="address" :rules="[
                            () => !!address || 'This field is required',
                            () => !!address && address.length <= 50 || 'Address must be less than 25 characters'
                        ]" label="Address Line" placeholder="Snowy Rock Pl" counter="50" required outlined dense></v-text-field>
                        <v-text-field ref="city" clearable v-model="city"
                            :rules="[() => !!city || 'This field is required']" label="City" placeholder="El Paso"
                            required outlined dense></v-text-field>
                        <v-text-field ref="state" v-model="state" :rules="[() => !!state || 'This field is required']"
                            label="State/Province/Region" required placeholder="TX" outlined dense></v-text-field>
                        <v-text-field ref="zip" v-model="zip" :rules="[() => !!zip || 'This field is required']"
                            label="ZIP / Postal Code" required placeholder="79938" outlined dense></v-text-field>
                        <v-text-field ref="contact_no" v-model="contactNo"
                            :rules="[() => !!contactNo || 'This field is required']" label="Phone Number" required
                            outlined dense></v-text-field>
                        <v-textarea label="Order Note" outlined dense v-model="orderNote">

                        </v-textarea>
                    </v-card-text>
                    <!--                <v-card-actions>-->
                    <!--                    <v-btn color="primary" text @click="submit">Save</v-btn>-->
                    <!--                </v-card-actions>-->
                </v-card>
            </v-col>
            <v-col cols="12" sm="6">

                <v-card ref="form" width="600" class="ml-4 mt-13">
                    <v-card-title class="font-weight-bold">Item List</v-card-title>
                    <v-simple-table dense>
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left">
                                        Item
                                    </th>
                                    <th class="text-left">
                                        Qty
                                    </th>
                                    <th class="text-left">
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in items" :key="item.id">
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.quantity }}</td>
                                    <td>{{ item.price }} LKR</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                    <v-card-text class="font-weight-bold">Total Amount : {{ totalAmount }} LKR</v-card-text>
                    <v-container fluid class="ml-2">
                        <p>{{ radios || 'null' }}</p>
                        <v-radio-group v-model="radios" mandatory>
                            <v-radio label="PayPal" value="Payment method"></v-radio>
                        </v-radio-group>
                    </v-container>
                    <v-card-actions>
                        <v-btn class="ml-2" @click="submit">Place Order & Pay</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
import { authClient } from "../Plugins/client";

export default {
    name: "CheckoutPage",
    data: () => ({
        valid: true,
        name: null,
        address: null,
        city: null,
        state: null,
        zip: null,
        contactNo: null,
        orderNote: null,
        formHasErrors: false,
        radios: null,
        paymentType: 1, //online payment
    }),

    computed: {
        form() {
            return {
                full_name: this.name,
                address: this.address,
                city: this.city,
                state: this.state,
                postal_code: this.zip,
                contact_no: this.contactNo,
                order_note: this.orderNote,
                total: this.totalAmount,
                user_id: this.$store.state.User.id,
                payment_type: this.paymentType
            }
        },
        items() {
            return this.$store.state.cart.items
        },
        totalAmount: function () {
            let total = 0;
            this.$store.state.cart.items.forEach(function (item) {
                total += (parseFloat(item.price) * parseFloat(item.quantity));
            });
            return total;
        },
    },
    mounted() {
        this.$store.dispatch('cart/getAllItems');
    },
    methods: {
        submit() {
            if (!this.isCartEmpty() && this.$refs.form.validate()) {
                authClient.post('/api/orders/create', this.form).then((res) => {
                    this.$store.commit('checkout/setOrder', res.data)
                    this.$router.push('/checkout-page/paypal');
                })
            }
        },
        isCartEmpty() {
            if (!this.items.length) {
                this.$notify({
                    type: 'warning',
                    title: 'Warning',
                    text: 'Your cart is empty!'
                })
                return true
            } else {
                return false
            }
        }
    }
}
</script>

<style scoped>
</style>
