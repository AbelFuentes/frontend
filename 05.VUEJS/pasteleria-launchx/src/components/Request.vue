<template>
    <form>
        <div class="row mb-1">
            <label for="name" class="col-sm-2 col-form-label"><strong>Nombre</strong></label>
            <div class="col-sm-10">
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="form-control form-control-sm"
                  placeholder="Nombre"
                  v-model="$store.state.client.name"
                  @change="(event) => $store.commit('set_client', { key: event.target.name, value: event.target.value })"
                />
            </div>
        </div>
        <div class="row mb-1">
            <label for="phone" class="col-sm-2 col-form-label"><strong>Teléfono</strong></label>
            <div class="col-sm-10">
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  class="form-control form-control-sm"
                  placeholder="Teléfono"
                  v-model="$store.state.client.phone"
                  @change="(event) => $store.commit('set_client', { key: event.target.name, value: event.target.value })"
                />
            </div>
        </div>
        <div class="row mb-1">
            <label for="email" class="col-sm-2 col-form-label"><strong>Correo</strong></label>
            <div class="col-sm-10">
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control form-control-sm"
                  placeholder="Correo"
                  v-model="$store.state.client.email"
                  @change="(event) => $store.commit('set_client', { key: event.target.name, value: event.target.value })"
                />
            </div>
        </div>
        <div class="row mb-1">
            <label for="description" class="col-sm-3 col-form-label"><strong>Descripción</strong></label>
            <div class="col-sm-9">
                <textarea
                  id="description"
                  name="description"
                  class="form-control form-control-sm"
                  placeholder="Descripción"
                  v-model="$store.state.client.description"
                  @change="(event) => $store.commit('set_client', { key: event.target.name, value: event.target.value })"
                />
            </div>
        </div>
        <div class="row mb-1">
            <label for="flavor" class="col-sm-2 col-form-label"><strong>Sabor</strong></label>
            <div class="col-sm-10">
                <input
                  type="text"
                  id="flavor"
                  name="flavor"
                  class="form-control form-control-sm"
                  placeholder="Sabor"
                  v-model="$store.getters.custom_flavor"
                  disabled
                />
            </div>
        </div>
        <div class="row mb-1">
            <label for="adornment" class="col-sm-2 col-form-label"><strong>Adorno</strong></label>
            <div class="col-sm-10">
                <input
                  type="text"
                  id="adornment"
                  name="adornment"
                  class="form-control form-control-sm"
                  placeholder="Descripción"
                  v-model="$store.getters.custom_adornment"
                  disabled
                />
            </div>
        </div>
    </form>
    <div class="row mb-1">
        <div class="col-sm-10" />
        <div class="col-sm-2">
            <button @click="$store.commit('make_request')">
                Pedir
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Request',
}
</script>

<style scoped>
.row {
    align-items: center;
}
</style>