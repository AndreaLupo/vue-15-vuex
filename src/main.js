import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            counter: 0
        };
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 1;
        },
        /** payload is custom, can be anything */
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        }
    }
});
const app = createApp(App);
app.use(store);

app.mount('#app');
