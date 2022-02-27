<template>
    <v-container>
        <v-btn v-if="$store.state.User.role === 'seller'">Jet Fuel</v-btn>
        <p>
            {{ $store.state.User }}
        </p>
    </v-container>
</template>

<script>

export default {
    name: "Home",
    methods:{
    }
}
</script>

<style scoped>

</style>
