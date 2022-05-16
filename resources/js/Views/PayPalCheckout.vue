<template>
    <div class="paypal-btn">
        <PayPal
            @payment-authorized="paymentAuthorized"
            @payment-completed="paymentCompleted"
            @payment-cancelled="paymentCancelled"
            :amount="total"
            currency="USD"
            :client="paypal"
            env="sandbox">
        </PayPal>
    </div>
</template>

<script>
import PayPal from 'vue-paypal-checkout'
export default {
    name: 'PayPalCheckout',
    components: {
        PayPal
    },
    data() {
        return {
            paypal: {
                sandbox: process.env.MIX_PAYPAL_CLIENT_ID,
            },
            buttonStyle: {
                label: 'checkout',
                size:  'large',
                shape: 'pill',
                color: 'gold'
            }
        }
    },
    computed: {
        total() {
            return this.$store.state.checkout.order.total.toString()
        }
    },
    methods: {
        paymentAuthorized(data) {
            console.log(data, 'authorized')
        },
        paymentCompleted() {
            this.$store.dispatch('checkout/approveOrder')
            this.$router.push('/orders')
            this.$notify({
                type: 'success',
                title: 'Success',
                text: 'Your payment is successful!'
            })
        },
        paymentCancelled() {
            this.$notify({
                type: 'error',
                title: 'Error',
                text: 'Your payment is unsuccessful!'
            })
        }
    }
}
</script>

<style scoped>
.paypal-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100px;
    align-items: center;
}
</style>
