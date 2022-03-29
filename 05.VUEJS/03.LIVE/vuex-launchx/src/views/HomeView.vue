<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Counter />
    <Square />
    <Actions />
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue';
import Square from '@/components/Square.vue';
import Actions from '@/components/Actions.vue';
export default {
  name: 'HomeView',
  components: {
    Counter,
    Square,
    Actions,
  }
}
</script>

<style>
div {
  margin-bottom: 10px;
}

.counter {
  font-size: 80px;
}

.square {
  font-size: 25px;
}

.actions button {
  font-size: 80px;
  width: 100px;
  margin: 0 10px;
}
</style>