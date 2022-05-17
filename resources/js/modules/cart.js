import {authClient} from "../Plugins/client";

const cart = {
    namespaced: true,
    state: () => ({
        items: []
    }),
    mutations: {
        setItems(state, items) {
            state.items = items.map((item) => ({
                id: item.id,
                name: item.product.name,
                price: item.product.price,
                quantity: item.qty,
            }))
        },
    },
    actions: {
        getAllItems({ commit }) {
            authClient.get('/api/cart/all').then((res) => {
                commit('setItems', res.data)
                commit('setTotal')
            })
        },
        removeItems({ commit }, item) {
            authClient.delete(`/api/cart/delete/${item.id}`).then((res) => {
                commit('setItems', res.data)
            })
        }
    }
}

export default cart
