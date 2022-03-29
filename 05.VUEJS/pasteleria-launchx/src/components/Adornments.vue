<template>
    <div>
        <ul>
            <li v-for="adornment in $store.state.cake_adornments" :key="adornment.id">
                {{ adornment.name }} - ${{ adornment.price }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Adornments',
}
</script>

<style scoped>
ul {
    list-style-type: none;
}
</style>