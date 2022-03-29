<template>
    <div class="bakery">
        <div class="address">
            <h4>Dirección</h4>
            <div>
                {{ $store.state.bakery.address.street }},
                {{ $store.state.bakery.address.city }},
                {{ $store.state.bakery.address.state }},
                {{ $store.state.bakery.address.country }}
            </div>
        </div>
        <div class="phone">
            <h4>Teléfono</h4> 
            <div>
                {{ $store.state.bakery.phone }}
            </div>
        </div>
        <div>
            <h4>Horarios de atención</h4>
            <div>
                {{ $store.state.bakery.working_times.start_date }} a 
                {{ $store.state.bakery.working_times.end_date }} de 
                {{ $store.state.bakery.working_times.start_time }} hasta
                {{ $store.state.bakery.working_times.end_time }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.bakery {
    margin-top: 16px;
}

.address, .phone {
    margin-bottom: 8px;
}
</style>