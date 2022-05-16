import { authClient } from "../Plugins/client";

const seller = {
    namespaced: true,
    state: () => ({
        items: []
    }),
    mutations: {
        setItems(state, items) {
            state.items = items.map((item) => ({
                id: item.id,
                name: item.name,
                status: item.status,
                role: item.role
            }))
        }
    },
    actions: {
        getAll({ commit }) {
            authClient.get('/api/seller/all').then((res) => {
                commit('setItems', res.data)
            })
        }
    }
}

export default seller