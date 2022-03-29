<template>
    <div class="requests">
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Teléfono</th>
                    <th>Correo</th>
                    <th>Descripción</th>
                    <th>Sabor</th>
                    <th>Adorno</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="request in $store.state.requests" v-bind:key="request.id">
                    <td>{{ request.id }}</td>
                    <td>{{ request.client_name }}</td>
                    <td>{{ request.client_phone }}</td>
                    <td>{{ request.client_email }}</td>
                    <td>{{ request.client_description }} </td>
                    <td>{{ request.cake_flavor }}</td>
                    <td>{{ request.cake_adornment }}</td>
                    <td>{{ request.cake_price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Requests',
}
</script>