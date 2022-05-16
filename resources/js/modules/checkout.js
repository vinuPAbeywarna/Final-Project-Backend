import {authClient} from "../Plugins/client";

const checkout = {
    namespaced: true,
    state: () => ({
        order: {
            id: null,
            total: 0,
        }
    }),
    mutations: {
        setOrder(state, order) {
            state.order.id = order.id
            state.order.total = order.total
        }
    },
    actions: {
        approveOrder({ state }) {
            authClient.put('/api/orders/updatePaymentStatus/' + state.order.id.toString()).then((res) => {
                console.log('success')
            })
        }
    }
}

export default checkout
