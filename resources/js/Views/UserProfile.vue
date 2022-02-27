<template>
    <v-container>
        <h4 class="text-h4">{{ $store.state.User.name }} ({{ $store.state.User.role }})</h4>
    </v-container>

</template>

<script>
export default {
    name: "UserProfile"
}
</script>

<style scoped>

</style>
