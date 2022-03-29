<template>
  <div class="configuration">
    <Container title="Pasteleria">
      <div>
        <form>
          <div class="mb-1">
            <h4>Dirección</h4>
            <div class="row">
              <label for="street" class="col-sm-2 col-form-label"><strong>Calle</strong></label>
              <div class="col-sm-10">
                <input
                  type="text"
                  id="street"
                  name="street"
                  class="form-control form-control-sm"
                  placeholder="Calle"
                  v-model="$store.state.bakery.address.street"
                  @change="(event) => $store.commit('set_bakery', { ...$store.state.bakery, address: { ...$store.state.bakery.address, [event.target.name]: event.target.value } })"
                />
              </div>
            </div>
            <div class="row">
              <label for="city" class="col-sm-2 col-form-label"><strong>Ciudad</strong></label>
              <div class="col-sm-10">
                <input
                  type="text"
                  id="city"
                  name="city"
                  class="form-control form-control-sm"
                  placeholder="Ciudad"
                  v-model="$store.state.bakery.address.city"
                  @change="(event) => $store.commit('set_bakery', { ...$store.state.bakery, address: { ...$store.state.bakery.address, [event.target.name]: event.target.value } })"
                />
              </div>
            </div>
            <div class="row">
              <label for="state" class="col-sm-2 col-form-label"><strong>Estado</strong></label>
              <div class="col-sm-10">
                <input
                  type="text"
                  id="state"
                  name="state"
                  class="form-control form-control-sm"
                  placeholder="Estado"
                  v-model="$store.state.bakery.address.state"
                  @change="(event) => $store.commit('set_bakery', { ...$store.state.bakery, address: { ...$store.state.bakery.address, [event.target.name]: event.target.value } })"
                />
              </div>
            </div>
            <div class="row">
              <label for="postal_code" class="col-sm-2 col-form-label"><strong>Zip</strong></label>
              <div class="col-sm-10">
                <input
                  type="text"
                  id="postal_code"
                  name="postal_code"
                  class="form-control form-control-sm"
                  placeholder="Código postal"
                  v-model="$store.state.bakery.address.postal_code"
                  @change="(event) => $store.commit('set_bakery', { ...$store.state.bakery, address: { ...$store.state.bakery.address, [event.target.name]: event.target.value } })"
                />
              </div>
            </div>
            <div class="row">
              <label for="country" class="col-sm-2 col-form-label"><strong>País</strong></label>
              <div class="col-sm-10">
                <input
                  type="text"
                  id="country"
                  name="country"
                  class="form-control form-control-sm"
                  placeholder="Pais"
                  v-model="$store.state.bakery.address.country"
                  @change="(event) => $store.commit('set_bakery', { ...$store.state.bakery, address: { ...$store.state.bakery.address, [event.target.name]: event.target.value } })"
                />
              </div>
            </div>
          </div>
          <div class="mb-1">
            <h4>Teléfono</h4>
            <input
              type="text"
              id="phone"
              name="phone"
              class="form-control form-control-sm"
              placeholder="Telefono"
              v-model="$store.state.bakery.phone"
              @change="(event) => $store.commit('set_bakery', { ...$store.state.bakery, [event.target.name]: event.target.value })"
            />
          </div>
          <div class="mb-1">
            <h4>Horarios de atención</h4>
            <div class="row">
              <label for="start_date" class="col-sm-2 col-form-label"><strong>Inicio</strong></label>
              <div class="col-sm-4">
                <input
                  type="string"
                  id="start_date"
                  name="start_date"
                  class="form-control form-control-sm"
                  placeholder="Inicio"
                  v-model="$store.state.bakery.working_times.start_date"
                  @change="(event) => $store.commit('set_bakery', { ...$store.state.bakery, working_times: { ...$store.state.bakery.working_times, [event.target.name]: event.target.value } })"
                />
              </div>
              <label for="end_date" class="col-sm-2 col-form-label"><strong>Fin</strong></label>
              <div class="col-sm-4">
                <input
                  type="string"
                  id="end_date"
                  name="end_date"
                  class="form-control form-control-sm"
                  placeholder="Inicio"
                  v-model="$store.state.bakery.working_times.end_date"
                  @change="(event) => $store.commit('set_bakery', { ...$store.state.bakery, working_times: { ...$store.state.bakery.working_times, [event.target.name]: event.target.value } })"
                />
              </div>
            </div>
            <div class="row">
              <label for="end_date" class="col-sm-2 col-form-label"><strong>De</strong></label>
              <div class="col-sm-4">
                <input
                  type="string"
                  id="start_time"
                  name="start_time"
                  class="form-control form-control-sm"
                  placeholder="Inicio"
                  v-model="$store.state.bakery.working_times.start_time"
                  @change="(event) => $store.commit('set_bakery', { ...$store.state.bakery, working_times: { ...$store.state.bakery.working_times, [event.target.name]: event.target.value } })"
                />
              </div>
              <label for="end_time" class="col-sm-2 col-form-label"><strong>Hasta</strong></label>
              <div class="col-sm-4">
                <input
                  type="string"
                  id="end_time"
                  name="end_time"
                  class="form-control form-control-sm"
                  placeholder="Inicio"
                  v-model="$store.state.bakery.working_times.end_time"
                  @change="(event) => $store.commit('set_bakery', { ...$store.state.bakery, working_times: { ...$store.state.bakery.working_times, [event.target.name]: event.target.value } })"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </Container>
    <Container title="Permisos">
      <div>
        <input
          type="checkbox"
          id="can_view_administrator"
          style="margin-right: 8px;"
          v-model="$store.state.permissions.can_view_administrator"
          @click="$store.commit('set_permission', 'can_view_administrator')"
        >
        <label for="can_view_administrator">Puede ver Administrator</label>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '../components/Container.vue';
export default {
  name: 'ConfigurationView',
  components: {
    Container,
  },
}
</script>

<style scoped>
.row {
  text-align: left;
  align-items: center;
}

.configuration {
  width: 100%;
  display: inline-flex;
}
</style>