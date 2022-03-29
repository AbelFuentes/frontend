<template>
    <div class="cakes">
        <div>
            <ul>
                <li v-for="flavor in $store.state.cake_flavors" :key="flavor.id">
                    {{ flavor.name }} - ${{ flavor.price }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cakes'
}
</script>

<style scoped>
ul {
    list-style-type: none;
}
</style>