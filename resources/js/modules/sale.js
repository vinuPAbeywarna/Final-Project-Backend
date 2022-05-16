import { authClient } from "../Plugins/client";

const sale = {
    namespaced: true,
    state: () => ({
        items: []
    }),
    mutations: {
        setItems(state, items) {
            state.items = items.map((item) => ({
                id: item.id,
                total: item.total,
            }))
        }
    },
    actions: {
        getAllItems({ commit }) {
            authClient.get('/api/dashboard/displayAllSales').then((res) => {
                commit('setItems', res.data)
            })
        },
    }
}

export default sale