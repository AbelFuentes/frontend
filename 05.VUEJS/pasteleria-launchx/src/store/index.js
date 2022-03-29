import { createStore } from "vuex";

export default createStore({
  state: {
    bakery: {
      address: {
        street: 'Calle Bollitos, 123',
        city: 'Ciudad Cuernito',
        state: 'Aladona',
        postal_code: '12345',
        country: 'Estados Unidos Buñuelos',
      },
      phone: '555-123',
      working_times: {
        start_date: 'Lunes',
        end_date: 'Sabado',
        start_time: '07:00',
        end_time: '19:00',
      },
    },
    cake_flavors: [
      {
        id: 1,
        name: 'Vainilla',
        price: '200.00',
        quantity: 180,
      },
      {
        id: 2,
        name: 'Chocolate',
        price: '230.00',
        quantity: 400,
      },
      {
        id: 3,
        name: 'Red Velvet',
        price: '370.00',
        quantity: 700,
      },
    ],
    cake_adornments: [
      {
        id: 1,
        cake_flavors: [1],
        name: 'Frutas',
        price: '80.00',
        quantity: 100,
      }, {
        id: 2,
        cake_flavors: [3],
        name: 'Macarrons',
        price: '90.00',
        quantity: 200,
      }, {
        id: 3,
        cake_flavors: [1, 2, 3],
        name: 'Crema batida',
        price: '40.00',
        quantity: 300,
      },
    ],
    client: {
      name: undefined,
      phone: undefined,
      email: undefined,
      description: undefined,
    },
    custom_cake: {
      flavor: undefined,
      adornment: undefined,
    },
    permissions: {
      can_view_administrator: true,
    },
    requests: [],
  },
  getters: {
    custom_flavor(state) {
      const flavor = state.cake_flavors.find((f) => f.id === parseInt(state.custom_cake.flavor, 10));
      return flavor?.name;
    },
    custom_adornment(state) {
      const adornment = state.cake_adornments.find((a) => a.id === parseInt(state.custom_cake.adornment, 10));
      return adornment?.name;
    },
    custom_cake_total(state) {
      const flavor = state.cake_flavors.find((f) => f.id === parseInt(state.custom_cake.flavor, 10));
      const adornment = state.cake_adornments.find((a) => a.id === parseInt(state.custom_cake.adornment, 10));
      return parseFloat(flavor?.price || 0) + parseFloat(adornment?.price || 0);
    },
    cake_flavors_inv_total(state) {
      return state.cake_flavors.reduce((acc, curr) => acc += curr.quantity, 0);
    },
    cake_adornments_inv_total(state) {
      return state.cake_adornments.reduce((acc, curr) => acc += curr.quantity, 0);
    },
  },
  mutations: {
    set_permission(state, permission) {
      state.permissions[permission] = !state.permissions[permission];
    },
    set_bakery(state, value) {
      state.bakery = value;
    },
    set_custom_cake(state, { key, value }) {
      state.custom_cake[key] = value;
    },
    set_client(state, { key, value }) {
      state.client[key] = value;
    },
    make_request(state) {
      const flavor = state.cake_flavors.find((f) => f.id === parseInt(state.custom_cake.flavor, 10));
      const adornment = state.cake_adornments.find((a) => a.id === parseInt(state.custom_cake.adornment, 10));
      const request = {
        id: state.requests.length + 1,
        client_name: state.client.name,
        client_phone: state.client.phone,
        client_email: state.client.email,
        client_description: state.client.description,
        cake_flavor: flavor?.name,
        cake_adornment: adornment?.name,
        cake_price: parseFloat(flavor?.price || 0) + parseFloat(adornment?.price || 0),
      }
      state.requests.push(request);
      state.client = {
        name: undefined,
        phone: undefined,
        email: undefined,
        description: undefined,
      };
      state.custom_cake = {
        flavor: undefined,
        adornment: undefined,
      };
    },
  },
  actions: {},
  modules: {},
});
