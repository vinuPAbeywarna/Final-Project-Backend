<template>
    <v-container>
        <v-card>
            <v-data-table
                :items="CartItems"
                :headers="headers"
            >
                <template v-slot:item.Remove="{ item }">
                    <v-btn icon><v-icon>mdi-trash-can</v-icon></v-btn>
                </template>
            </v-data-table>

            <v-card-title>
                <v-row no-gutters align="center">

                    Total: 5500 LKR
                    <v-spacer/>
                    <v-btn class="ml-2" color="primary">Continue</v-btn>
                </v-row>
            </v-card-title>
        </v-card>

    </v-container>
</template>

<script>
export default {
    name: "Cart",
    data: ()=>({
        CartItems: [
            {
                Name:'Honeycomb Wall Art / Photo Frame / Shelving',
                Price: '5500 LKR',
                Quantity: '1',
                Total: '5500 LKR'
            }
        ],
        headers: [
            { text:'Product', value:'Name'},
            { text:'Price', value:'Price'},
            { text:'Quantity', value:'Quantity'},
            { text:'Total', value:'Total'},
            { text:'Remove', value:'Remove'}
        ]
    })

}
</script>

<style scoped>

</style>
