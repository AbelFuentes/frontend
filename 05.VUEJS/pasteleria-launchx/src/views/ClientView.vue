<template>
  <div class="client">
    <Container title="Pasteles">
      <Cakes />
    </Container>
    <Container title="Adornos">
      <Adornments />
    </Container>
    <Container title="A tu gusto!">
      <CustomCake />
    </Container>
  </div>
</template>

<script>
import Container from '../components/Container.vue';
import Cakes from '../components/Cakes.vue';
import Adornments from '../components/Adornments.vue';
import CustomCake from '../components/CustomCake.vue';
export default {
  name: "ClientView",
  components: {
    Container,
    Cakes,
    Adornments,
    CustomCake,
  },
};
</script>

<style scoped>
.client {
  width: 100%;
  margin-top: 16px;
  display: inline-flex;
}
</style>