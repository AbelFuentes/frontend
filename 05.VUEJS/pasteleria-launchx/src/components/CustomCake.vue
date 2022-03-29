<template>
    <div>
        <form>
            <div class="row mb-1">
                <label for="flavor" class="col-sm-4 col-form-label"><strong>Sabor</strong></label>
                <div class="col-sm-8">
                    <select
                        v-model="$store.state.custom_cake.flavor"
                        @change="(event) => $store.commit('set_custom_cake', { key: event.target.name, value: event.target.value })"
                        id="flavor"
                        name="flavor"
                        class="full-width-select"
                    >
                        <option disabled value="">Escoje tu sabor</option>
                        <option v-for="flavor in $store.state.cake_flavors" :value="flavor.id" v-bind:key="flavor.id">{{flavor.name}}</option>
                    </select>
                </div>
            </div>
            <div class="row mb-3">
                <label for="adornment" class="col-sm-4 col-form-label"><strong>Adorno</strong></label>
                <div class="col-sm-8">
                    <select
                        v-model="$store.state.custom_cake.adornment"
                        @change="(event) => $store.commit('set_custom_cake', { key: event.target.name, value: event.target.value })"
                        id="adornment"
                        name="adornment"
                        class="full-width-select"
                    >
                        <option disabled value="">Escoje tu adorno</option>
                        <option v-for="adornment in $store.state.cake_adornments" :value="adornment.id" v-bind:key="adornment.id">{{adornment.name}}</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <label for="adornment" class="col-sm-4 col-form-label"><strong>Total</strong></label>
                <div class="col-sm-8">
                    ${{ $store.getters.custom_cake_total }}.00
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'CustomCake',
}
</script>

<style scoped>
.full-width-select {
    width: 100%;
    height: 40px;
}
</style>