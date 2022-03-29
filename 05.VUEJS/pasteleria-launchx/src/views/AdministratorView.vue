<template>
  <div class="administrator">
    <div class="inventory">
      <Container title="Sabores">
        <CakeFlavorsInv />
      </Container>
      <Container title="Adornos">
        <CakeAdornmentsInv />
      </Container>
    </div>
    <Requests />
  </div>
</template>

<script>
import Container from '../components/Container.vue';
import CakeFlavorsInv from '../components/CakeFlavorsInv.vue';
import CakeAdornmentsInv from '../components/CakeAdornmentsInv.vue';
import Requests from '../components/Requests.vue';
export default {
  name: 'Administrator',
  components: {
    Container,
    CakeFlavorsInv,
    CakeAdornmentsInv,
    Requests,
  },
}
</script>

<style scoped>
.administrator {
  margin-top: 16px;
}

.inventory {
  width: 100%;
  display: inline-flex;
}
</style>