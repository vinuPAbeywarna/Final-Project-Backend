<template>
    <v-card class="mx-auto text-center" color="green" dark max-width="600">
        <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .12)">
                <v-sparkline :value="value" color="rgba(255, 255, 255, .7)" height="100" padding="24"
                    stroke-linecap="round" smooth>
                    <template v-slot:label="item">
                        Rs.{{ item.value }}
                    </template>
                </v-sparkline>
            </v-sheet>
        </v-card-text>

        <v-card-text>
            <div class="text-h4 font-weight-thin">
                Sales Last 24 Hours
            </div>
        </v-card-text>

        <v-divider></v-divider>


    </v-card>
</template>

<script>
import { authClient } from "../Plugins/client";
export default {
    data: () => ({
        value: [],
    }),
    mounted() {
        this.getDaySales();
    },
    methods: {
        getDaySales() {
            authClient.get('api/dashboard/getDaySales')
                .then((response) => {
                    this.value = response.data
                })
        }
    },
    name: "graphs"
}
</script>

<style scoped>
</style>
