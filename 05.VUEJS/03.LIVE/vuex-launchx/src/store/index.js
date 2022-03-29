import { createStore } from 'vuex'

const DICE = 'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new';

export default createStore({
  state: {
    counter: 0,
  },
  getters: {
    square(state) {
      return state.counter * state.counter;
    },
  },
  mutations: {
    decrease(state, value) {
      state.counter -= value;
    },
    increase(state, value) {
      state.counter += value;
    },
  },
  actions: {
    async increase({ commit }) {
      const res = await fetch(DICE);
      const result = await res.json();
      commit('increase', result);
    },
    async decrease({ commit }) {
      const res = await fetch(DICE);
      const result = await res.json();
      commit('decrease', result);
    }
  },
  modules: {
  }
})
