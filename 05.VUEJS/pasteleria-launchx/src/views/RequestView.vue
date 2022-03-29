<template>
    <div class="request">
        <Container title="Pedido">
            <Request />
        </Container>
    </div>
</template>

<script>
import Container from '../components/Container.vue';
import Request from '../components/Request.vue';
export default {
    name: 'RequestView',
    components: {
        Container,
        Request,
    },
}
</script>

<style scoped>
.request {
    width: 100%;
    margin-top: 16px;
    display: inline-flex;
}
</style>