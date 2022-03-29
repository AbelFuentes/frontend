<template>
    <div class="container">
        <h3>{{ title }}</h3>
        <div class="children"><slot /></div>
    </div>
</template>

<script>
export default {
    name: 'Container',
    props: {
        title: String,
        className: String,
    },
}
</script>

<style scoped>
.container {
  width: 500px;
  margin: 16px;
}

h3 {
    margin: 0;
    color: #FFFFFF;
    text-align: left;
    padding-left: 8px;
    border: 1px solid black;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #343A40;
}

.children {
    padding: 8px;
    border: 1px solid black;
    border-top: none;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}
</style>