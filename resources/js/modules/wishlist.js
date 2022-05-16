import { authClient } from "../Plugins/client";

const wishlist = {
    namespaced: true,
    state: () => ({
        items: []
    }),
    mutations: {
        setItems(state, items) {
            state.items = items.map((item) => ({
                id: item.id,
                user_id: item.user_id,
                product_id: item.product.id,
                name: item.product.name,
                price: item.product.price,
                image: item.product.image,
            }))
        }
    },
    actions: {
        getAllItems({ commit }) {
            authClient.get('/api/wishlist/all').then((res) => {
                commit('setItems', res.data)
            })
        },
        removeItems({ commit }, item) {
            authClient.delete(`/api/wishlist/delete/${item.id}`).then((res) => {
                commit('setItems', res.data)
            })
        },
    }
}

export default wishlist
