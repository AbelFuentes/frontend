<template>
    <div>
        <ul>
            <li v-for="flavor in $store.state.cake_flavors" :key="flavor.id">
                {{ flavor.name }} - {{ flavor.quantity }}
            </li>
        </ul>
        <strong>Total: {{ $store.getters.cake_flavors_inv_total }}</strong>
    </div>
</template>

<script>
export default {
    name: 'CakeFlavorsInv',
}
</script>

<style scoped>
ul {
    list-style-type: none;
}
</style>