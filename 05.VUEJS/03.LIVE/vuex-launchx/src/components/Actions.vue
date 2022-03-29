<template>
    <div class="actions">
      <button @click="$store.dispatch('decrease')">-</button>
      <button @click="$store.dispatch('increase')">+</button>
    </div>
</template>

<script>
export default {
    name: 'Actions'
}
</script>