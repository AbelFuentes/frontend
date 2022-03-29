<template>
    <div>
        <ul>
            <li v-for="adornment in $store.state.cake_adornments" :key="adornment.id">
                {{ adornment.name }} - {{ adornment.quantity }}
            </li>
        </ul>
        <strong>Total: {{ $store.getters.cake_adornments_inv_total }}</strong>
    </div>
</template>

<script>
export default {
    name: 'CakeAdornmentsInv',
}
</script>

<style scoped>
ul {
    list-style-type: none;
}
</style>